---
title: Capture
description: Record a session by voice or type a manual note. AuraCRM transcribes voice with OpenAI Whisper and turns it into a reviewable workflow.
tags: [features, capture, voice, transcription]
---

# Capture

Capture is where a session becomes structured work. You give AuraCRM a short update and it does the
rest of the paperwork for you to review.

## Voice capture (tap-to-record)

1. Open **Capture** and choose the client.
2. Tap record and speak a short update — what happened, what was agreed, what comes next.
3. Stop recording. The audio is uploaded securely and transcribed with OpenAI Whisper.
4. The transcript feeds AI orchestration, which produces [proposals you approve](/docs/features/ai-proposals).

Voice capture today is **foreground and tap-to-record**. Truly ambient, always-listening background
capture is on the roadmap as a later, revenue-funded phase — AuraCRM does not claim to do that yet.

## Manual notes

You do not have to speak. You can type a note directly against a client at any time — useful for a
quick thought, a phone call, or when you would rather write than talk. Manual notes live alongside
the client's history and can be used the same way.

## What happens to the recording

- Audio is uploaded to storage (via FilesHub) and processed server-side.
- Before any text reaches the language model, **personally identifying details are redacted** — see
  [AI proposals](/docs/features/ai-proposals) and [Security & privacy](/docs/security-and-privacy).
- You can delete a session, and deleting your account removes your stored files. See
  [account deletion](/docs/security-and-privacy#deleting-your-account).

## Tips

- Speak the way you would brief an assistant: names, decisions, deadlines, and next steps.
- Mention dollar amounts or extra hours explicitly if you want the billing agent to catch an
  overage.
- One update per session keeps each client's timeline clean.
