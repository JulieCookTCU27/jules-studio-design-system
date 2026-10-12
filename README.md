# Jules Studio — Design System

Part of the Cook Consulting Services, LLC brand family. Files: `tokens.json` (source of truth), `tokens.css` (CSS variables + font faces), the font files, logos, floral elements and product images (all in the top level).

Jules Studio is Julie's handmade Etsy shop (JulesStudioTX, Fort Worth, Texas): custom floral letters and monograms built from silk blooms. It is the CCS brand book at its softest — the same linen ground, black line florals, League Spartan / Quicksand pairing and a thread of peacock blue — with one thing of its own: **soft watercolor washes of lavender and sky behind the line drawings**. Minimal first; the color is a pop, never a fill.

## Content fundamentals

- Voice: warm, personal, crafted. First person is fine — "I build every letter by hand." Speak to the gift-giver: "for her nursery", "for graduation day", "for the bride-to-be".
- Listing titles: product, letter or word, colors, occasion — "Floral Letter J — Lavender & White Silk Peonies — Nursery Decor".
- Set display lines (`display`, `h1`) in lowercase League Spartan, like CCS. Use `script` only for a signature word ("jules studio", "thank you", a name on a gift tag), in `signature`.
- Use tracked uppercase `label` for small banners: HANDCRAFTED BY · MADE TO ORDER · FORT WORTH, TX.
- Emoji: none in brand graphics; at most one in a social caption.

## Visual foundations

### Color

- Ground is `linen`; text, line art and prices are `black` (`ink`). Most of every layout is these two.
- The pops are `lavender` and `sky`, used as **watercolor washes behind florals** (the `*-wash.png` elements and the watercolor badge) and, flat, as `wash-warm` / `wash-cool` tag and panel fills. Text on any of them is `ink`. Never set text in `lavender` or `sky`.
- `peacock-blue` is the CCS thread and stays rare: text links (`link`), the `focus` ring, the footer line "a Cook Consulting Services brand", or one small detail such as a sale tag. Never a background or a large block.
- Primary buttons are `action` (black) with `on-action` text. Prices are `price` in `ink` — no colored prices.
- `lavender-ink` (`signature`) is only for the script signature word and the lavender badge.
- Evening theme: ground `#17181D`, linen ink, light sky links; washes darken to `#3A3450` / `#2B3A48` behind linen text.
- Plum, rose, blush and mauve are retired; don't use them.

### Watercolor

- One or two washes per layout, always behind a line floral or the badge sprig, slightly off-register so the drawing reads first.
- Pair lavender with sky; let them overlap where they meet. Keep washes inside the composition — they don't bleed off the page the way line florals can.
- Never put a wash behind body text or a product photo.

### Type

- League Spartan for headings, Quicksand for body — the family pair.
- Sacramento (`script`) sits with the badge's handwriting; it is not the badge's exact font. One word per layout.
- `label` mirrors the badge's spaced capitals.

### Layout

- Lots of linen. Generous `space-6` margins; product photos on white or linen, square tiles (`radius-none`) in a grid with `space-4` gutters.
- Square corners everywhere; `radius-pill` only for small tags, echoing the oval badge.
- 1px `rule` frames in `black`, like the badge's double oval. No shadows, no gradients.

### Imagery

- Product photography: the letter centered on pure white, shot straight on, full letter visible, even soft light. A measured shot (tape along two edges) goes last in the listing.
- The line florals — magnolia, peony, ginkgo, wildflower stems, and the banner's orchids — frame graphics in black ink on linen, bleeding off edges. Use the `-wash` versions where a pop of color helps, the plain versions where the product photo already brings color.

## Logos

- `jules-studio-badge-watercolor.png` — the primary mark: the double oval, "HANDCRAFTED BY", the line sprig with a lavender-and-sky wash behind it, and "jules studio" in script, on linen. Use it for the shop icon, packaging and thank-you cards.
- `jules-studio-badge-black.png` — the same mark, ink only, transparent. Use it small (under 120px wide) and anywhere color would compete with a photo.
- `jules-studio-badge-peacock.png` — peacock ink, for stickers and stamps on linen or white.
- `jules-studio-badge-lavender.png` — `lavender-ink`, for tissue paper, tags and soft prints.
- `jules-studio-badge-linen.png` — linen ink, only on `black`, `peacock-blue` or the Evening ground.
- `jules-studio-badge-watercolor-transparent.png` — the watercolor mark without the linen ground, for light photos and kraft paper.
- `jules-studio-shop-icon-1200.png` — square 1200×1200 crop for the Etsy shop icon.
- `jules-etsy-banner-watercolor.jpg` — the 1680×420 shop banner, orchids with lavender and sky washes. `jules-etsy-banner.jpg` is the plain original.
- Keep clear space of one-quarter of the badge's width. Don't stretch, crop the oval or recolor it outside these versions.
- The rings and lettering were redrawn clean; the sprig is upscaled from a 500px source, so it is sharp to about 6 in wide at 300 dpi. For larger print, ask Canva for the original vector sprig.

## Iconography

No icon set. Use the floral line drawings as ornament; for shop UI, thin-line icons (1.5px) in `ink`.

## The family

Cook Consulting Services, LLC is the house; each business is its own brand cut from the same cloth.

| Brand | Role | What it keeps from CCS | What it changes |
| --- | --- | --- | --- |
| CCS | Parent consultancy | — | — |
| The Collective Space | Community and gathering brand | Palette, League Spartan, Quicksand, florals | Leads on black; script word in the logo |
| Impact Advisory Group | Advisory practice | Palette, League Spartan, Quicksand, florals | Quietest of the set: ink and linen, one accent |
| Red Tape Academy | Education DBA | Linen, peacock blue, sky blue, black, Quicksand, League Spartan labels | Adds civic red; Libre Baskerville headings; no florals |
| Jules Studio | Handmade Etsy shop | Linen, black, peacock blue, sky blue, Quicksand, League Spartan, line florals | Adds lavender and watercolor washes; script signature word; pill tags |

Threads every brand keeps: the `linen` ground, `black` ink, Quicksand for body copy, League Spartan in the hierarchy, wide-tracked sub-lines, square corners, 1px hairline rules — and here, peacock blue as a small family mark.

## Canva brand kit

Set up a Canva Brand Kit for this brand so designs stay consistent.

**Colors**

| Name | Hex | Role |
| --- | --- | --- |
| linen | `#F1EFE7` | Page background (shared family color) |
| black | `#101010` | Text, prices, buttons (shared family color) |
| lavender | `#C8BCE0` | Watercolor pop, soft fills |
| lavender-wash | `#E8E3F1` | Palest lavender: tags, panels |
| sky | `#B8D3EA` | Watercolor pop, soft fills (CCS sky thread) |
| sky-wash | `#DDE9F4` | Palest sky: tags, panels |
| lavender-ink | `#5B4A80` | Script signature word only |
| peacock-blue | `#016795` | Limited: links, one small detail, CCS footer line |

**Fonts** — all Google Fonts; pick them from Canva's font menu.

| Use | Font |
| --- | --- |
| Headings | League Spartan |
| Body text | Quicksand |
| Script accents | Sacramento |

**Logos** to upload: `jules-studio-badge-watercolor.png`, `jules-studio-badge-watercolor-transparent.png`, `jules-studio-badge-black.png`, `jules-studio-badge-peacock.png`, `jules-studio-badge-lavender.png`, `jules-studio-badge-linen.png`.

**Graphics** to upload: the four `floral-*-wash.png` elements and the plain `floral-*.png` originals.

## Licenses

- Fonts: SIL Open Font License 1.1 — see `FONTS.md` and the `OFL-*.txt` files.
- Logos, icons and brand guidelines: © Cook Consulting Services, LLC. All rights reserved. Not licensed for reuse.
