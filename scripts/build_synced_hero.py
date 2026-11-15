#!/usr/bin/env python3
"""
scripts/build_synced_hero.py
Generates perfectly lip-synced 15.46s transparent hero videos and audio assets:
- hero-transparent.webm (VP9 yuva420p + Opus audio)
- hero-transparent.mov (Apple HEVC muxa + AAC audio)
- intro-voice.mp3, intro-voice.m4a, intro-voice.wav
- hero-poster.png (Frame 0 transparent bust)
"""

import os
import sys
import subprocess
import numpy as np
from PIL import Image

FFMPEG = "node_modules/ffmpeg-static/ffmpeg"
FRAMES_DIR = "/tmp/transparent_frames"
AUDIO_WAV = "/tmp/voice_slow_relaxed.wav"
AUDIO_MP3 = "/tmp/voice_slow_relaxed.mp3"
OUTPUT_DIR = "public/hero"
SEQ_DIR = "/tmp/synced_seq"

os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(SEQ_DIR, exist_ok=True)

print("--- 1. Building Frame Timeline ---")

def build_timeline_indices():
    seq = []
    # 1. 0.00s - 0.25s (6 frames): Quiet opening
    for i in np.linspace(0, 5, 6):
        seq.append(int(round(i)))

    # 2. 0.25s - 1.65s (34 frames): 'Hi, I\'m Gurpreet.'
    for i in np.linspace(6, 48, 34):
        seq.append(int(round(i)))

    # 3. 1.65s - 2.85s (29 frames): Pause 1 (mouth closes, gentle blink, nod)
    for i in range(49, 73):
        seq.append(i)
    for i in [71, 70, 71, 72, 72]:
        seq.append(i)

    # 4. 2.85s - 4.80s (47 frames): 'Senior UI/UX designer.'
    for i in np.linspace(73, 112, 47):
        seq.append(int(round(i)))

    # 5. 4.80s - 5.85s (25 frames): Pause 2 (between ideas: mouth closes, soft smile)
    for i in np.linspace(113, 140, 25):
        seq.append(int(round(i)))

    # 6. 5.85s - 11.65s (139 frames): 'I design intuitive web applications...'
    # 6A: 5.85 - 8.25s (58 frames): 'I design intuitive web applications'
    for i in np.linspace(73, 127, 58):
        seq.append(int(round(i)))
    # 6B: 8.25 - 8.50s (6 frames): brief breath pause -> closed mouth
    for i in np.linspace(128, 133, 6):
        seq.append(int(round(i)))
    # 6C: 8.50 - 9.45s (23 frames): 'mobile apps'
    for i in np.linspace(80, 105, 23):
        seq.append(int(round(i)))
    # 6D: 9.45 - 9.75s (7 frames): brief breath pause -> closed mouth
    for i in np.linspace(134, 140, 7):
        seq.append(int(round(i)))
    # 6E: 9.75 - 11.65s (45 frames): 'and modern AI platforms.'
    for i in np.linspace(100, 142, 45):
        seq.append(int(round(i)))

    # 7. 11.65s - 12.70s (25 frames): Pause 3 (mouth closes, gentle nod)
    for i in np.linspace(137, 141, 15):
        seq.append(int(round(i)))
    for i in [140, 139, 138, 139, 140, 141, 141, 141, 141, 141]:
        seq.append(i)

    # 8. 12.70s - 14.40s (41 frames): 'Welcome to my portfolio!'
    for i in np.linspace(142, 167, 41):
        seq.append(int(round(i)))

    # 9. 14.40s - 15.46s (25 frames): Concluding rest & warm smile into poster
    for i in np.linspace(168, 178, 18):
        seq.append(int(round(i)))
    for i in [178, 178, 178, 0, 0, 0, 0]:
        seq.append(i)

    return seq

seq_indices = build_timeline_indices()
num_frames = len(seq_indices)
print(f"Total timeline frames: {num_frames} ({num_frames / 24.0:.3f}s at 24fps)")

print("--- 2. Loading Source Transparent Frames ---")
raw_frames = []
for i in range(179):
    fn = os.path.join(FRAMES_DIR, f"frame_{i:03d}.png")
    im = Image.open(fn).convert("RGBA")
    raw_frames.append(im)

print("--- 3. Compositing & Smoothing Frame Transitions ---")
# Identify jump points where adjacent indices have significant change (> 4)
jump_indices = set()
for k in range(num_frames - 1):
    f_curr = seq_indices[k]
    f_next = seq_indices[k+1]
    if abs(f_curr - f_next) > 4:
        jump_indices.add(k)

print(f"Identified {len(jump_indices)} transition points requiring crossfade: {sorted(list(jump_indices))}")

# Render each frame in sequence, applying smooth 4-frame alpha crossfade on jump boundaries
rendered_frames = []
for k in range(num_frames):
    f_idx = seq_indices[k]
    im = raw_frames[f_idx]
    rendered_frames.append(im)

# Apply 4-frame crossfade at each jump point
for j in sorted(list(jump_indices)):
    # Jump occurs between j and j+1
    # We blend across j-1, j, j+1, j+2
    from_frame = seq_indices[j]
    to_frame = seq_indices[j+1]
    
    # 4-frame blend
    w_to = [0.20, 0.45, 0.70, 0.90]
    for step, w in enumerate(w_to):
        target_idx = j - 1 + step
        if 0 <= target_idx < num_frames:
            im_a = raw_frames[from_frame]
            im_b = raw_frames[to_frame]
            blended = Image.blend(im_a, im_b, w)
            rendered_frames[target_idx] = blended

print(f"--- 4. Saving {num_frames} frames to {SEQ_DIR} ---")
for k, im in enumerate(rendered_frames):
    out_path = os.path.join(SEQ_DIR, f"seq_{k:03d}.png")
    im.save(out_path, "PNG", compress_level=1)

# Save poster frame (Frame 0 transparent bust)
poster_path = os.path.join(OUTPUT_DIR, "hero-poster.png")
rendered_frames[0].save(poster_path, "PNG", compress_level=3)
print(f"Saved poster frame to {poster_path}")

print("--- 5. Encoding WebM with Alpha (VP9 + yuva420p + Opus) ---")
webm_out = os.path.join(OUTPUT_DIR, "hero-transparent.webm")
cmd_webm = [
    FFMPEG, "-y",
    "-framerate", "24",
    "-i", os.path.join(SEQ_DIR, "seq_%03d.png"),
    "-i", AUDIO_WAV,
    "-c:v", "libvpx-vp9",
    "-pix_fmt", "yuva420p",
    "-auto-alt-ref", "0",
    "-crf", "28",
    "-b:v", "0",
    "-c:a", "libopus",
    "-b:a", "96k",
    "-shortest",
    webm_out
]
subprocess.check_call(cmd_webm)
print(f"Saved WebM with Alpha: {webm_out}")

print("--- 6. Encoding Apple HEVC with Alpha (muxa + AAC) ---")
temp_hevc_video = "/tmp/temp_hevc_video.mov"
subprocess.check_call(["scripts/encode_hevc_alpha", SEQ_DIR, str(num_frames), temp_hevc_video])

mov_out = os.path.join(OUTPUT_DIR, "hero-transparent.mov")
cmd_mov = [
    FFMPEG, "-y",
    "-i", temp_hevc_video,
    "-i", AUDIO_WAV,
    "-c:v", "copy",
    "-c:a", "aac",
    "-b:a", "128k",
    "-ar", "48000",
    "-shortest",
    "-movflags", "+faststart",
    mov_out
]
subprocess.check_call(cmd_mov)
print(f"Saved Apple HEVC with Alpha: {mov_out}")

print("--- 7. Exporting Audio Assets ---")
# intro-voice.mp3
mp3_out = os.path.join(OUTPUT_DIR, "intro-voice.mp3")
subprocess.check_call([
    FFMPEG, "-y",
    "-i", AUDIO_WAV,
    "-c:a", "libmp3lame",
    "-b:a", "128k",
    mp3_out
])

# intro-voice.m4a
m4a_out = os.path.join(OUTPUT_DIR, "intro-voice.m4a")
subprocess.check_call([
    FFMPEG, "-y",
    "-i", AUDIO_WAV,
    "-c:a", "aac",
    "-b:a", "128k",
    m4a_out
])

# intro-voice.wav
wav_out = os.path.join(OUTPUT_DIR, "intro-voice.wav")
subprocess.check_call([
    FFMPEG, "-y",
    "-i", AUDIO_WAV,
    "-c:a", "pcm_s16le",
    "-ar", "48000",
    wav_out
])

print("\n=== HERO ASSETS GENERATION COMPLETED SUCCESSFULLY ===")
