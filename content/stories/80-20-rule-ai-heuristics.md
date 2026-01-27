---
title: "The 80/20 Rule in AI: When to Use Heuristics, When to Use Learning Models"
slug: "80-20-rule-ai-heuristics"
excerpt: "How we decide when a boring heuristic beats a clever model — and the tiny set of prompts and evals that deliver 80% of quality."
publishedAt: "2024-12-07"
heroImage: "/story_media/bg1.webp"
thumbnail: "/story_media/bg1.webp"
author: "Atem Team"
readingTime: "7 min read"
tags: ["AI", "Efficiency", "Heuristics"]
featured: false
---

## When the clever prompt lost to the boring regex

We once spent a week crafting a “smart” prompt to normalize job titles. It handled 40 edge cases, referenced an ontology, and burned tokens like a campfire. A teammate quietly shipped a four-line regex to cover the top five patterns. Guess which one shipped to prod? The regex — because it solved 80% of requests at 5% of the cost, and we could layer nuance later.

That’s when we stopped treating heuristics as shortcuts and started treating them as force multipliers.

## Why the 80/20 mindset matters in AI

AI projects drown in possibilities. Every new model, provider, or prompt tweak feels like a step forward. But most of the value lives in a small handful of moves:

- The few prompts that anchor tone and structure.
- The handful of evals that catch real regressions.
- The dead-simple guards that prevent runaway costs.

The rest is noise — fun noise, but noise.

## How we learned to find the vital 20%

**We started with a hallucination triage board.** Every user-visible failure went on one whiteboard: category, sample, impact, cost. Seeing 50 failures grouped into five buckets made the priorities obvious.

**We deleted our “clever” prompts.** We replaced flowery instructions with a single, boring pattern: role, input format, output format, constraints. Consistency beat creativity.

**We standardized an eval harness.** Instead of arguing about “feels better,” we wrote evals for the five failure buckets, then refused to merge changes that didn’t move those scores.

**We logged cost per win.** For every improvement, we tracked tokens burned versus errors removed. High-cost/low-win changes were reverted within a day.

## Heuristics versus models: our decision tree

1) **Is the problem high-volume and repetitive?** Start with heuristics. Deterministic rules reduce variance and make debugging trivial.
2) **Is the problem ambiguous but bounded?** Use a hybrid: rules for structure, model for nuance. Example: rules enforce schema; LLM fills the free text.
3) **Is the problem open-ended or creative?** Go model-first, but add guardrails (format locks, refusals, cost caps) and evals before rollout.

## What went right (and wrong)

**Win:** A “hallucination triage” board cut production incidents by 60% in two weeks because we fixed the top five buckets first.

**Miss:** We once replaced a deterministic parser with an LLM for “flexibility.” Error rates doubled, costs tripled, and we quietly reverted to the parser + a small LLM assist.

**Lesson:** Determinism is an asset. Use LLMs to fill gaps, not to redo what rules already do well.

## Our current playbook

- **Ship the boring prompt that wins.** If a dull template is 90% as good as the “artful” one and half the cost, we pick dull.
- **Protect the evals.** Five to eight evals cover most regressions. We fail builds when they regress.
- **Design for rollback.** Every “smart” change travels with a kill switch and a deterministic fallback.
- **Refresh monthly.** We rotate in new real-world failures each month so evals stay honest.

## The heuristic we now use

> If a deterministic rule solves 80% of the problem in a day, ship it; add the model only where human effort can’t keep up.

It keeps us from overfitting on cleverness and focuses us on outcomes: fewer errors, lower cost, faster delivery.

## What we’d tell past-us

Triple-check whether you need the model at all. Start with a rule, add a format lock, then sprinkle model judgment where users actually feel it. It’s not anti-AI — it’s pro-outcome.

**Want to build something reliable without burning budget on cleverness?** [Let’s talk](mailto:contact@atem.gdn).
