---
title: AI proposals
description: How AuraCRM turns one spoken session into proposals you review and approve — CRM stage, follow-up email, tasks, homework, and invoices. Nothing auto-sends.
tags: [features, ai, proposals, orchestration]
---

# AI proposals

AuraCRM's job is to draft the admin, not to act for you. Every AI output is a **proposal** you
review, edit if needed, and approve. Nothing is sent, charged, or moved without your click.

## From a session to proposals

After a session is transcribed, AuraCRM runs orchestration in three steps:

1. **Redact** — personally identifying details are stripped from the transcript before it is sent to
   the language model.
2. **Extract** — the model reads the redacted transcript and produces structured proposals.
3. **Review & approve** — you see each proposal, adjust anything, and approve the ones you want.

The models used are OpenAI's `gpt-4o-mini` for reasoning and drafting, with `whisper-1` for
transcription. See [Security & privacy](/docs/security-and-privacy) for how data is handled.

## What it proposes

A single update can generate up to five kinds of proposal:

- **Engagement stage change** — advance the client along the FSM (Discovery → Proposal → Active
  Engagement → Renewal Review) when the conversation warrants it. See [Clients](/docs/features/clients).
- **Follow-up email** — a style-matched draft you can edit and send. Approving it sends it via
  FilesHub email; declining discards it.
- **Professional tasks** — action items for *you* to complete. See [Tasks](/docs/features/tasks).
- **Client homework** — action items for the *client*, surfaced in their portal once you publish.
- **Overage invoice** — when extra hours or scope are detected, a draft invoice is queued for your
  review. See [Invoices](/docs/features/invoices).

## The human is always in the loop

- No email leaves your account until you approve that specific draft.
- No invoice is created until you approve it.
- A stage change is applied only when you accept it, and illegal stage jumps are blocked by design.

This is deliberate: AuraCRM speeds up the paperwork while you keep judgement over what actually
reaches a client.

## Your plan sets how many runs you get

Each orchestration counts against your monthly AI-run allowance. The free tier includes a small
trial allowance; paid tiers raise or remove the cap. See [Plans & limits](/docs/plans-and-limits).
