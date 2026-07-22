---
title: Security & privacy
description: How AuraCRM handles your data — Supabase Postgres with row-level security, FilesHub for files and email, OpenAI with PII redaction, HIPAA-ready architecture, and account deletion.
tags: [security, privacy, data, hipaa, deletion]
---

# Security & privacy

AuraCRM handles sensitive client conversations, so data handling is designed in from the start. This
page describes the posture honestly — including where certification is still ahead of us.

## Where your data lives

- **Database — Supabase (Postgres).** Your clients, sessions, tasks, invoices, and portal content
  live in Postgres. Access is governed by **row-level security (RLS)**: policies at the database
  level ensure you can only read and write your own data, and admin-only data stays admin-only even
  if a request reaches the API directly. This is the real security boundary, not just a UI check.
- **Files — FilesHub.** Audio recordings and other files are stored via FilesHub. Old files are
  removed when replaced, and your files are deleted when you delete your account.
- **Email — FilesHub.** All transactional email (portal invites, follow-ups you approve,
  confirmations) is sent through FilesHub.

## How AI processing handles your data

- Transcription uses OpenAI's `whisper-1`; reasoning and drafting use `gpt-4o-mini`.
- **Personally identifying details are redacted from a transcript before it is sent to the language
  model.** The model works on the redacted text to produce proposals.
- AI outputs are proposals only — nothing is sent or charged without your approval. See
  [AI proposals](/docs/features/ai-proposals).

## HIPAA-ready, not HIPAA-certified

AuraCRM is built on a **HIPAA-ready architecture** — RLS, least-privilege access, encrypted
transport, and a data model designed for regulated practices. It is **not** a certified HIPAA
product today. Formal steps — a signed Business Associate Agreement and independent audit — are
completed at go-live, not claimed prematurely. If your practice is regulated, treat AuraCRM as
compliant only once those steps are in place for your account.

## Analytics & consent

Optional analytics and error monitoring are **off until configured** and gated behind the consent
step you see on first use. You can review your choices in **Settings** at any time.

## Deleting your account

You can export your data and delete your account from **Settings**. Deletion removes your records
and cascades to related data, and removes your stored files. This is a genuine deletion, not a soft
disable.

## Reporting a concern

For a security or privacy question, use the support channel listed on the [FAQ](/docs/faq#how-do-i-get-help).
