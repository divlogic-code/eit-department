EIT QUAD-STYLE GLOBAL DESIGN SYSTEM

Install:
1. Copy the five CSS files into:
   src/styles/theme/

2. Add these imports to the TOP of:
   src/styles/CSS.css

   @import "./theme/effects.css";
   @import "./theme/cards.css";
   @import "./theme/buttons.css";
   @import "./theme/sections.css";
   @import "./theme/animations.css";

3. Keep the existing:
   colors.css
   typography.css
   spacing.css
   components.css

This layer does not replace page-specific CSS. It adds the universal
visual language needed to make every page feel like the Quad reference.

Universal classes:
- eit-card / eit-glass-card
- eit-card-dark
- eit-button / eit-pill-button
- eit-button-gold
- eit-button-outline
- eit-button-glass
- eit-section
- eit-section-light
- eit-section-ivory
- eit-section-sapphire
- eit-section-emerald
- eit-section-ruby
- eit-section-cinematic
- eit-section-heading
- eit-grid-2 / 3 / 4
- eit-marquee / eit-marquee-track
- eit-image-zoom
- eit-hover-lift
- eit-glow-hover

Animation attributes already used by the current GSAP work:
- data-gsap="reveal"
- data-gsap="heading"
- data-gsap="text-reveal"
- data-gsap="fade-up"
- data-gsap="stagger"
- data-gsap="magnetic"

Do not remove page-specific CSS yet. The next stage applies these
universal primitives page by page and then cleans duplicated rules.
