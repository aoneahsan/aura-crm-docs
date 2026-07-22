---
title: Admin panel
description: The AuraCRM admin panel covers users and roles, subscription approvals, the waitlist, analytics, an audit log, and short links.
tags: [features, admin, roles, approvals, analytics]
---

# Admin panel

The admin panel is a restricted area for the people who run AuraCRM. Regular practitioners never see
it — the workspace guards it and returns a 403 to anyone without an admin role.

## What admins can do

- **Users & roles** — view accounts and manage roles (for example, promoting a super admin).
- **Subscription approvals** — because billing is by direct transfer, an admin confirms an incoming
  payment, which flips a subscription from *pending confirmation* to *active*. See
  [Plans & limits](/docs/plans-and-limits).
- **Waitlist** — review waitlist sign-ups from the marketing site and export them as CSV.
- **Analytics** — usage charts (rendered with D3) giving a quick read on activity.
- **Audit log** — a record of sensitive actions across the system.
- **Short links** — create and track short URLs (served at `/s/<slug>`) with hit counts, handy for
  campaigns and announcements.

## Access control

Admin access is enforced both in the interface and in the database. Row-level security in Postgres
means an ordinary user cannot read or change admin-only data even if they reach an endpoint directly.
See [Security & privacy](/docs/security-and-privacy).
