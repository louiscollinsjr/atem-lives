---
title: "The Art of the Nudge: Using Few-Shot Learning to Guide AI Behavior (and Reduce Hallucinations)"
slug: "art-of-nudge-few-shot-learning"
excerpt: "How we curate small example sets that tame models: fewer shots, better formats, refreshed from real failures."
publishedAt: "2024-12-04"
heroImage: "/story_media/bg6.png"
thumbnail: "/story_media/bg6.png"
author: "Atem Team"
readingTime: "6 min read"
tags: ["AI", "Few-Shot Learning", "Quality Control"]
featured: false
---

## The time 30 examples made things worse

We once stuffed 30 “representative” examples into a prompt to tame an unruly model. Quality dropped. Turns out we taught it contradictory tones and formats. When we cut to six tightly-curated examples — including two negative ones — accuracy jumped and variance fell.

## Why few-shot works when it’s small

Models overfit to the vibe you show them. Too many examples blur the signal; too few miss edge cases. The sweet spot for us has been 3–8 examples with strict formatting and a couple of “don’t do this” shots.

## Our curation rules

- **Cover extremes first.** Include the weird, not just the median.
- **Add negatives.** Show the model what a bad answer looks like.
- **Lock format.** Use the exact output schema in every example.
- **Localize tone.** Keep voice consistent: concise, direct, no fluff.

## Building the nudge set

1) **Collect real failures.** Pull from logs and support tickets.
2) **Group into 3–5 buckets.** Each bucket gets a canonical example.
3) **Write one anti-pattern.** Show what to avoid (hallucinated source, wrong format, overconfident tone).
4) **Refresh monthly.** Rotate in fresh failures so the nudge doesn’t drift.

## A quick win story

We added two negative examples to a summarizer prompt: one with invented numbers and one with missing citations. Hallucinations dropped ~35% overnight with no model change. Cost stayed flat; trust went up.

## Guardrails that amplify few-shot

- **Temperature discipline.** Keep sampling low when precision matters.
- **Schema validation.** Reject anything that violates format before it reaches users.
- **Light evals.** Track a handful of prompts against a fixed set so drift is obvious.

## The heuristic we now use

> Three great examples beat thirty mediocre ones. Make them real, make them consistent, and update them from live failures.

## What we’d tell past-us

Stop hoarding examples. Curate. The right few shots act like a steering wheel; the wrong pile is just ballast.

**Want prompts that stay on-voice and on-facts?** [Let’s talk](mailto:contact@atem.gdn).
