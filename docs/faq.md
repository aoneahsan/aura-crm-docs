---
title: FAQ
description: Honest answers to common questions about AuraCRM — what it does, whether it auto-sends anything, how billing works, HIPAA status, and getting help.
tags: [faq, questions, support]
---

# FAQ

## Does AuraCRM send emails or bill clients automatically?

No. Every AI output is a **proposal** you review and approve. An email sends only when you approve
that draft; an invoice exists only when you approve it; a client stage moves only when you accept the
change. See [AI proposals](/docs/features/ai-proposals).

## Is voice capture always listening in the background?

No. Capture today is **foreground, tap-to-record**. You start and stop each recording. Fully
ambient, always-on capture is a future phase and is not something AuraCRM does yet.

## How do I sign in?

With Google, on web and mobile. There is no separate password. See
[Getting started](/docs/getting-started).

## What does the free tier include?

The manual CRM plus **2 AI runs per month** so you can try the full workflow. Paid tiers raise or
remove that cap — see [Plans & limits](/docs/plans-and-limits).

## How do I pay, and why is there no card checkout?

Billing is a **direct bank/account transfer** via
[aoneahsan.com/payment](https://aoneahsan.com/payment), confirmed by an admin, which activates your
plan. There is no card processor. Always include the transfer reference AuraCRM shows you.

## Is AuraCRM HIPAA compliant?

AuraCRM uses a **HIPAA-ready architecture**, but it is not a certified HIPAA product today.
Certification (a signed BAA and audit) happens at go-live. See
[Security & privacy](/docs/security-and-privacy).

## Who can see my clients' data?

Only you. Access is enforced at the database level with row-level security, so other users — and
non-admins reaching an endpoint directly — cannot read your data. Client portals are shared only via
magic links you create and can revoke.

## Can I export or delete my data?

Yes. You can export your data and delete your account from **Settings**; deletion cascades to your
records and removes your stored files. See
[Deleting your account](/docs/security-and-privacy#deleting-your-account).

## What happens to a client's portal link if I revoke it?

It stops working immediately and shows an "access expired" screen. See
[Client portal](/docs/features/client-portal).

## How do I get help?

Support and contact go through the developer: **aoneahsan@gmail.com**. You can also open an issue on
the [documentation repository](https://github.com/aoneahsan/aura-crm-docs). To support the project,
see [aoneahsan.com/payment](https://aoneahsan.com/payment?project-id=auracrm&project-identifier=com.aoneahsan.auracrm).
