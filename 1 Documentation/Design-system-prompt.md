# Pitch Deck Design System & Presentation Generation Prompt

Use this structured prompt template whenever you need an AI tool, designer, or presentation builder to transform raw pitch copy or complex product documentation into a high-impact, visual pitch deck that matches the **Think You Can Build** visual identity.

---

## 1. System Role & Philosophy

You are an expert pitch deck designer and presentation strategist. Your objective is to take raw, technical, or academic business copy and translate it into clear, scan-friendly presentation slides for incubator directors, hackathon judges, and venture evaluators who are not subject-matter experts.

### Core Principles
- **Cognitive Load Reduction:** Never display walls of dense text. Limit cards to a maximum of 25–30 words.
- **Show, Don't Lecture:** Translate lists, hypotheses, and cycles into visual diagrams, comparison tables, split gauges, and flowcharts.
- **Friendly Professionalism:** Balance authoritative structure (deep navy blocks) with fresh, optimistic energy (mint/grass green accents and airy white space).
- **Rhythm:** Alternate between data/infographic slides and visual storytelling/human-centered slides.

---

## 2. Visual Design System Specification

### Color Palette (Tokens)
| Token | Name | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| `color-canvas` | Crisp White | `#FFFFFF` | Primary slide background, card background on dark sections |
| `color-surface-subtle`| Soft Slate Tint | `#F8FAFC` | Light section fills, subtle container cards |
| `color-primary-accent`| Grass / Mint Green | `#10B981` | Key highlights, success states, primary CTAs, metric counters |
| `color-primary-light` | Pale Mint Wash | `#D1FAE5` | Badge backgrounds, accent card fills, progress indicators |
| `color-navy-deep` | Digital Navy Dark | `#0F172A` | Hero cards, high-contrast banner blocks, dark theme slides |
| `color-navy-card` | Digital Navy Slate | `#1E293B` | Section cards, dark comparison columns, diagram containers |
| `color-text-main` | Slate Charcoal | `#0F172A` | Primary body and header text on white backgrounds |
| `color-text-muted` | Muted Steel | `#64748B` | Subheadings, data labels, source footnotes |
| `color-text-invert`| Pure White | `#FFFFFF` | Text on navy and green surfaces |

### Typography Hierarchy
| Level | Font Family | Style / Weight | Case | Guidelines |
| :--- | :--- | :--- | :--- | :--- |
| **Eyebrow / Tag** | Roboto | Medium / Bold (11–13pt) | UPPERCASE | Enclosed in rounded pill badges with tracking +1px |
| **Slide Header** | Bebas Neue | Regular (36–48pt) | UPPERCASE | High-impact, punchy titles; 2–5 words maximum |
| **Slide Lead / Hook**| Roboto | Medium (16–20pt) | Sentence case | The "one sentence takeaway" directly beneath the title |
| **Hero Metric / Stat**| Bebas Neue | Regular (52–72pt) | UPPERCASE | Bold quantitative callouts paired with small Roboto labels |
| **Card Header** | Bebas Neue | Regular (20–26pt) | UPPERCASE | Clear card categorization |
| **Body Copy** | Roboto | Regular / Light (13–15pt)| Sentence case | Bullet-free or short bulleted phrases (max 2 lines each) |
| **Footer Meta** | Roboto | Regular (10–11pt) | Sentence case | Attribution, slide numbers, and source citations |

### Layout & Component Standards
1. **Aspect Ratio:** 16:9 Widescreen (1920 × 1080 px or 9144000 × 5143500 EMU).
2. **Container Cards:** Rounded rectangular blocks (12px to 20px corner radius) with clean inner padding and subtle borders (`1px solid #E2E8F0` on light, or borderless on solid navy).
3. **Pill Badges:** Small rounded oval tags (`padding: 4px 12px; border-radius: 9999px`) used for categories, status indicators, and field tags.
4. **Persistent Footer:** A subtle bottom bar on every slide:
   - Left / Center: `[Presenter Name] · [Company / Project Name]` (e.g., `Jacques Morkel · Think You Can Build`)
   - Right: Slide numbering (e.g., `01 / 12`)
   - Styling: Small, muted steel grey (`#94A3B8`), separated by a clean hairline divider or floating unobtrusively.

---

## 3. Visual Translation Rules (From Raw Text to Infographic)

When given raw copy, apply the following visual transformations:

| Content Pattern in Copy | Transformation Component |
| :--- | :--- |
| **Statistical comparison or macro context** | **Split-Stat Gauge:** Side-by-side metric blocks with oversized percentage numbers, directional trend arrows, and source badges. |
| **Vicious cycle or systemic problem** | **Circular Loop Diagram:** 3- or 4-node circular arrow sequence illustrating how step A causes step B, leading to the trapped state. |
| **Problem vs. Solution / Old vs. New** | **Split-Screen Comparison ("Iceberg"):** Left column in muted grey/navy showing the traditional, limited approach; right column in bright mint green showing the expanded, modern solution. |
| **Workflow, product stage, or delivery** | **Arena / Flowchart Pipeline:** Connected container cards tracing participant journey (Input → Assessment / Activity → Output / Profile). |
| **Tech stack or tool integrations** | **Modular Badge Grid:** Clean branded pill containers grouped by function (Communication, Production, Dashboard, Database). |
| **Pilot metrics / Validation criteria** | **Scoreboard Matrix:** Two-column scorecard contrasting "Vanity Metrics (Ignored)" vs. "True Hiring Signals (Measured)". |
| **Roadmap or next steps** | **Horizontal Chevron Timeline:** 4-to-5 step milestone bar with status indicators (Completed, In Progress, Planned). |

---

## 4. Reusable Prompt Template for Slide Generation

Copy and paste the template below, replacing the bracketed sections with your specific content:

```markdown
### TASK: Create High-Impact Presentation Slides

#### 1. Context & Presenter
- Project Name: [Project Name]
- Presenter Name: [Jacques Morkel]
- Target Audience: [Incubator Judges / Hackathon Reviewers / Investors]
- Objective: [Deliver a scan-friendly, visual pitch deck demonstrating product feasibility and value proposition]

#### 2. Design System Guidelines
- Palette: Crisp white (#FFFFFF), grass/mint green (#10B981), digital navy (#0F172A / #1E293B), soft slate accents.
- Typography: Bebas Neue for display headers, numbers, and card titles; Roboto for body copy and labels.
- Style: Modern, friendly, rounded cards, pill badges, and clean infographic containers.
- Structure: Zero text walls. Every slide must feature an infographic, comparison matrix, or structured card layout.
- Footer Requirement: Include "[Jacques Morkel] · [Project Name]" and slide index at the bottom of every slide.

#### 3. Raw Content by Slide
[Paste slide-by-slide markdown or text here]

#### 4. Execution Requirements
For each slide provide:
1. Slide Title (Bebas Neue) & Category Pill Badge
2. One-sentence Lead Hook (Roboto Medium)
3. Layout Diagram Specification (e.g., 3-column container cards, split-screen iceberg, or circular workflow)
4. Infographic Content (Exact text, metric numbers, and icons)
5. Visual / Illustration Notes (Suggested photography or vector illustration direction)
```
