---
name: Political Insight Intelligence
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c4c5d9'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#8e8fa2'
  outline-variant: '#444656'
  surface-tint: '#bbc3ff'
  primary: '#bbc3ff'
  on-primary: '#001e92'
  primary-container: '#3e5cff'
  on-primary-container: '#f4f2ff'
  inverse-primary: '#2748ee'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#ffb598'
  on-tertiary: '#591d00'
  tertiary-container: '#c14800'
  on-tertiary-container: '#fff1ed'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dee0ff'
  primary-fixed-dim: '#bbc3ff'
  on-primary-fixed: '#000f5c'
  on-primary-fixed-variant: '#002dcc'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb598'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7e2c00'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system is engineered for an elite demographic of researchers, journalists, and policy analysts. The personality is academic and authoritative, prioritizing cognitive ease and data clarity over visual noise. 

The style utilizes a **Refined Glassmorphism** approach. It avoids the typical "high-tech" tropes of hacking or security; instead, it leans into the aesthetics of high-end editorial platforms and scientific journals. The UI should feel like a premium digital archive: quiet, spacious, and meticulously organized. Depth is communicated through subtle layer translucency and soft environmental blurs rather than aggressive shadows or borders.

## Colors
The palette is rooted in a deep, nocturnal foundation to minimize eye strain during long-form reading and analysis.

*   **Primary (Trust Blue):** Used for critical actions and active states. It represents stability and institutional reliability.
*   **Secondary (Subtle Purple):** Used sparingly for AI-generated insights, data highlights, and decorative accents to denote "intelligence" layers.
*   **Surface / Background:** A rich Deep Navy (#0B0F19) provides the canvas, ensuring that text and data visualizations remain the focal point.
*   **Accents:** Utilize desaturated versions of the primary and secondary colors for glass effects to maintain a professional, rather than "gamer," aesthetic.

## Typography
Manrope serves as the primary typeface for its modern, balanced, and highly legible character, which bridges the gap between technical precision and human-centric design. 

For technical data points, metadata, and labels, **Geist** is used to provide a subtle "technical" contrast that remains clean and professional. Headlines should utilize tighter letter-spacing to appear more cohesive, while body text requires generous line heights to ensure readability of long-form political analysis.

## Layout & Spacing
This design system employs a **Fixed Grid** philosophy for desktop to maintain the "Research Paper" feel, centered within a wide viewport. 

*   **Grid Model:** A 12-column grid with 24px gutters.
*   **Spacing Rhythm:** An 8px linear scale. White space is treated as a first-class citizen—layout elements should "breathe," with generous vertical padding (64px+) between major content sections.
*   **Adaptation:** On mobile, the layout collapses to a single column with 20px side margins. Cards and glass elements should lose their external glow on smaller screens to maintain clarity.

## Elevation & Depth
Depth is created through **Tonal Stacking** and **Glassmorphism**. Shadows are virtually non-existent; instead, hierarchy is defined by the brightness of the surface.

1.  **Base:** #0B0F19 (The lowest level).
2.  **Surface-Low:** A semi-transparent overlay (White at 3% opacity) with a 12px backdrop blur. Use this for main content cards.
3.  **Surface-High:** A semi-transparent overlay (White at 8% opacity) with a 20px backdrop blur and a subtle 1px inner border (White at 10%). Use this for floating menus and modals.
4.  **Interaction Layer:** Primary Trust Blue with a soft, 40px outer blur (15% opacity) to denote focus without looking "neon."

## Shapes
The design system uses a **Moderate Roundedness (8px - 12px)**. This specific radius is chosen to soften the "institutional" nature of political data, making the AI's findings feel more approachable and less robotic.

*   **Standard Components:** 8px (Buttons, Inputs).
*   **Containers/Cards:** 12px (Analysis blocks, News feed cards).
*   **Contextual Elements:** 4px (Small tags, tooltips).

## Components
*   **Buttons:** Primary buttons use a solid Trust Blue. Secondary buttons are "Ghost" style with a 1px border and no fill, inheriting the backdrop blur of the surface they sit on.
*   **Analysis Cards:** These are the hero components. They must feature a subtle gradient border (Deep Navy to Trust Blue) and a high backdrop blur to separate the news content from the analysis background.
*   **Confidence Meters:** Linear gauges using the Secondary Purple. Avoid circular "speedometers" to maintain a research-oriented look.
*   **Inputs:** Minimalist fields with a bottom-only border that transforms into a full 1px outline on focus.
*   **Chips/Tags:** Used for "Political Bias" or "Factual Score" labels. These should have a low-saturation background color corresponding to the sentiment (e.g., muted red, muted green) to avoid looking like social media tags.
*   **Data Visualization:** Graphs should use thin lines (1.5px) and avoid filled areas unless using a very low-opacity gradient.