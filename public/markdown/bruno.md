# Bruno — AI Voice Desktop Assistant

> Production-grade AI voice assistant for Windows with on-device speech recognition, multi-provider LLM chaining, persistent memory, and 20+ system automation tools.

## Overview

Architected a modular, protocol-driven desktop AI assistant in Python that processes voice input end-to-end — from microphone capture through Whisper STT, LLM inference, to Piper TTS — with sub-2-second response latency.

## Key Features

- **Multi-provider LLM fallback chain** (Groq, Gemini, Cerebras) that automatically switches when free-tier quotas are exhausted, ensuring zero-downtime for the user
- **20+ voice-activated system tools** including app launcher/closer, window snap management, system volume/brightness/media control, screen OCR, clipboard integration, and calendar awareness using Win32 APIs and PowerShell automation
- **Persistent memory system** using SQLite that stores user preferences across sessions and dynamically injects relevant facts into the LLM system prompt at runtime
- **Real-time glowing aura UI** using Win32 UpdateLayeredWindow with true per-pixel ARGB transparency — no external UI frameworks, drawn directly into a GDI BGRA bitmap at 60 FPS
- **Wake word detection** by running Whisper continuously on 2-second audio chunks in a background thread with energy-gating to minimise CPU usage
- **Streaming TTS pipeline** that speaks reply sentences as they are generated, keeping time-to-first-word constant regardless of reply length
- **Web content summarisation** by extracting live browser URLs via Windows UI Automation and fetching/parsing page content for LLM summarization
- **Security best practices** including API key encryption with the Windows DPAPI credential store, no background microphone capture, and on-device STT ensuring voice data never leaves the machine

## Skills Demonstrated

- **Languages:** Python 3.12, JavaScript (WebGL GLSL shaders), PowerShell
- **AI/ML:** faster-whisper, OpenAI-compatible APIs, prompt engineering, streaming LLM inference, VAD (Silero), tool/function calling
