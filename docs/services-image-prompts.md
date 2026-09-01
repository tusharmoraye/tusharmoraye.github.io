# What I Do — image generation prompts

The three pillar scenes are currently built as live SVG + icon + GSAP animations
(no raster assets). Use these prompts only if you want generated artwork to sit
*behind* or *instead of* those scenes.

## Shared art direction

Append to every prompt:

> Dark near-black navy background (#0B0D12), single indigo accent (#6C6CFF) with a
> warm amber secondary (#F0A868), thin 1px line work, generous negative space,
> soft volumetric glow, subtle film grain. Editorial tech aesthetic, not corporate
> stock. Absolutely no text, no letters, no numbers, no UI chrome, no logos, no
> watermark. Centred composition with breathing room at the edges.

Output: 1600×1200 (4:3), PNG. Also generate a light-mode variant by swapping the
background to warm off-white (#F8F6F2) and keeping the same accents.

## 01 — Intelligence & Agents

> A single luminous indigo sphere suspended at the centre of a dark void, wrapped
> by two thin concentric orbital rings at slightly different angles. Four small
> geometric nodes rest on the outer ring at the cardinal points, each connected to
> the core by a hairline spoke. One spoke carries a bright travelling pulse of
> light toward its node. Volumetric bloom around the core, faint dust particles.
> Macro 3D render, shallow depth of field.

## 02 — Experience & Craft

> A thin circular progress arc drawn in indigo, nearly complete, floating above a
> flat abstract composition of stacked rounded rectangles that suggest a page
> layout dissolving into light. A single amber lightning bolt sits at the centre of
> the arc. Motion trails streak left to right behind the layout blocks, conveying
> speed. Clean isometric perspective, soft shadows, dark background.

## 03 — Platform & Infrastructure

> An abstract distributed system: one glowing indigo hub on the left connected by
> dashed hairline paths to a cluster of small floating cubes on the right. Bright
> particles travel along the paths from hub to cubes. One cube is materialising
> from a dashed green outline, suggesting autoscaling. Deep space background, thin
> grid floor fading to black, cinematic rim light on every cube.

## Where they would go

Drop files at `src/assets/services/pillar-01.png` … `pillar-03.png`, then place
them as `<Image>` inside each `.zeni-stage`, layered under the existing widgets
with `absolute inset-0 size-full object-cover opacity-40`.
