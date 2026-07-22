---
title: Clients
description: Manage clients in AuraCRM and track each engagement through a clear stage machine — Discovery, Proposal, Active Engagement, Renewal Review.
tags: [features, clients, crm, engagement-stages]
---

# Clients

Clients are the centre of AuraCRM. Each client has a profile, a running history of sessions and
notes, and a current **engagement stage**.

## The engagement stage machine

Every client moves through a fixed set of stages, in order:

1. **Discovery** — early conversations, understanding goals and fit.
2. **Proposal** — scope, terms, and next steps are on the table.
3. **Active Engagement** — the working relationship is underway.
4. **Renewal Review** — the engagement is up for renewal or wrap-up.

Stages are a **finite-state machine**: a client can only move to a valid next stage, so the pipeline
stays honest. Illegal jumps (for example, skipping straight from Discovery to Renewal Review) are
disabled in the interface. Every stage change is recorded in the client's audit history, whether you
make it by hand or approve it from an [AI proposal](/docs/features/ai-proposals).

## What a client record holds

- Contact and engagement details.
- Session history and manual notes (see [Capture](/docs/features/capture)).
- Tasks and client homework (see [Tasks](/docs/features/tasks)).
- Invoices (see [Invoices](/docs/features/invoices)).
- A publishable [client portal](/docs/features/client-portal).

## Working with the list

The clients list is a sortable, filterable table built for real use — search, sort, and paginate
without loading everything at once. Open a client to see its full timeline and act on it.

## Real-time updates

Changes propagate in real time, so if a session finishes processing while you are looking at a
client, the new tasks and proposals appear without a manual refresh.
