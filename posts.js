/* ============================================================
   posts.js — Blog Post Content
   ============================================================
   TO ADD A POST:
   1. Add a new entry to the POSTS array below
   2. Add a matching .blog-card in index.html

   Fields:
     slug        unique URL identifier  → post.html?slug=your-slug
     title       shown in the nav title
     date        display date on the card
     tag         category label
     description short summary on the card
     content     full post in Markdown (use backtick template literal)
   ============================================================ */

const POSTS = [

  {
    slug: '2024-q4-markets',
    title: 'Q4 Markets Recap',
    date: 'Dec 2024',
    tag: 'Markets',
    description: 'A look back at the macro dynamics that shaped equity and credit markets in the final quarter.',
    content: `
# Q4 Markets Recap

*December 2024 · Markets*

---

## Overview

The final quarter of 2024 brought a mix of relief and renewed uncertainty. Equity markets pushed higher on the back of cooling inflation data, while credit spreads tightened across most sectors. But beneath the headline numbers, a more nuanced picture emerged.

This post walks through the three macro forces that shaped the quarter and what they might mean heading into 2025.

---

## 1. The Fed Pivot Narrative

> "Higher for longer" gave way to cautious optimism as core PCE printed below expectations for the third consecutive month.

Markets spent most of Q3 pricing in a delayed pivot. By October, that calculus shifted. The Fed's November meeting signalled a willingness to cut — *conditionally* — and risk assets responded accordingly.

Key observations:

- The 2-year Treasury yield fell roughly 60bps from its September peak
- Rate-sensitive sectors (REITs, utilities) outperformed the broader index
- Dollar weakness provided a tailwind for EM assets

The catch: markets may be pricing in cuts faster than the data warrants. Watch the January employment report closely.

---

## 2. Credit Markets

Investment-grade spreads ended the quarter at multi-year tights. High-yield followed, though with more dispersion — CCC-rated issuers still face meaningful refinancing risk in 2025 and 2026.

**What to watch:**

- Maturity walls in leveraged loans (~$400bn due in 2025)
- Private credit stress as base rates stay elevated longer than expected
- M&A financing conditions, which improved meaningfully in Q4

---

## 3. Earnings Quality

Aggregate earnings beat estimates, but the quality of those beats warrants scrutiny.

A significant portion of S&P 500 earnings growth was driven by **margin expansion** rather than revenue growth — cost cuts and lower input prices rather than genuine demand improvement. That's a thinner foundation for sustained multiple expansion.

---

## Takeaways for 2025

1. **Don't fight the pivot, but don't front-run it either.** Duration positioning should remain measured until the Fed moves.
2. **Credit selection matters more than ever.** Tight spreads leave little room for error; focus on covenant quality and maturity profiles.
3. **Watch the consumer.** Excess savings are largely depleted. The H1 2025 data will tell us whether the soft landing holds.

---

*Thanks for reading. If you found this useful or have a different view, I'd love to hear from you.*
`
  },

  {
    slug: 'dcf-myths',
    title: 'Five DCF Myths',
    date: 'Oct 2024',
    tag: 'Valuation',
    description: 'Common misconceptions in discounted cash flow analysis that trip up even seasoned practitioners.',
    content: `
# Five DCF Myths

*October 2024 · Valuation*

---

Discounted cash flow analysis is simultaneously the most taught and most misused tool in finance. Here are five misconceptions I encounter regularly — even among experienced practitioners.

---

## 1. "The terminal value doesn't matter that much"

It almost always matters more than the explicit forecast period. In a typical 10-year DCF, **60–80% of the total value** comes from the terminal value. Getting your exit multiple or perpetuity growth rate wrong by 0.5% can swing your output by 20–30%. Model it carefully; sensitivity-test it always.

## 2. "A higher discount rate is more conservative"

Not necessarily. A higher WACC compresses value, yes — but it also implicitly assumes higher risk. If you're using an inflated discount rate to be "safe," you may simply be mispricing the asset rather than being prudent.

## 3. "Free cash flow equals net income plus D&A"

This shortcut ignores working capital changes and capex. A business growing quickly often consumes significant working capital — meaning its FCF can be far lower (or even negative) despite healthy reported earnings.

## 4. "The model is only as good as the assumptions"

True, but incomplete. The model is also only as good as your *understanding of which assumptions matter*. Spend 80% of your time stress-testing the two or three drivers that actually move the needle.

## 5. "DCF gives you the answer"

DCF gives you a *range*, not a number. Anyone presenting a single-point DCF output without a sensitivity table is either overconfident or hasn't thought hard enough about uncertainty. Build the tornado chart. Show your work.

---

*These are recurring patterns from advisory work — not academic theory. Your mileage will vary by sector and context.*
`
  },

  {
    slug: 'consulting-year-one',
    title: 'On Starting a Consulting Practice',
    date: 'Jul 2024',
    tag: 'Career',
    description: 'Honest notes from the first year of independent advisory work — what surprised me and what didn\'t.',
    content: `
# On Starting a Consulting Practice

*July 2024 · Career*

---

A year ago I left a full-time role to work independently. Here's what surprised me — and what didn't.

---

## What I Expected

I expected the work itself to be manageable. I'd done similar analysis and advisory work in-house; the content wasn't the unknown. What I underestimated was everything around the work — scoping, contracting, client communication, and simply finding the next engagement before the current one ends.

## The Biggest Surprise: Selling Never Stops

Even when you're heads-down on a project, you need to be nurturing the next one. The pipeline doesn't build itself. Early on I made the classic mistake of disappearing into delivery mode — great work, no follow-through, then a jarring gap between engagements.

The fix was simple but uncomfortable: **treat business development as a deliverable**, not an afterthought. Block time for it weekly, regardless of how busy you feel.

## What Worked

- **Narrow the focus early.** Generalist positioning sounds flexible; it reads as uncertain. I got more traction once I could say specifically what I do and for whom.
- **Existing relationships are everything.** Every engagement in year one came through someone I already knew. Cold outreach produced almost nothing.
- **Contracts matter.** A clear scope, explicit deliverables, and defined payment terms prevent most of the awkward conversations later.

## What I'd Do Differently

Start the pipeline-building six months before going independent, not six weeks. And get comfortable talking about money earlier — rates, terms, scope changes. The discomfort doesn't go away, but it does get easier with practice.

---

*Still figuring it out. Ask me again in year two.*
`
  }

];
