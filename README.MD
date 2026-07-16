# 贺兰星辰 · HikariLan — Personal Homepage

A bespoke, single-screen **deep-space starfield** homepage for 贺兰星辰 (HikariLan), playing on the
meaning of the name — 星辰 (stars) and 光 / Hikari (light).

Built with **Nuxt 4 + Vue 3.5 + Tailwind CSS v4**, statically generated and deployed to GitHub Pages.

![screenshot](docs/screenshot.jpeg)

## Tech stack

- [Nuxt 4](https://nuxt.com) (SSG via `nuxt generate`, `ssr: true`)
- [Vue 3.5](https://vuejs.org)
- [Tailwind CSS v4](https://tailwindcss.com) via the `@tailwindcss/vite` plugin (CSS-first config)
- [@nuxt/icon](https://github.com/nuxt/icon) for brand/UI icons
- [@nuxt/fonts](https://github.com/nuxt/fonts) for the display typeface (Space Grotesk / Sora)
- [@vueuse/nuxt](https://vueuse.org) for reduced-motion and pointer parallax

## Project layout

```
app/
  app.vue                       # root: SEO (useHead/useSeoMeta + JSON-LD) + layout
  site.ts                       # single source of truth (identity, links, SEO strings)
  assets/css/main.css           # Tailwind import + deep-space theme tokens + keyframes
  components/
    CosmicBackdrop.vue          # nebula/aurora blobs, orbital rings, mouse parallax
    StarfieldCanvas.client.vue  # animated twinkling starfield + shooting stars (canvas)
    HeroCard.vue                # avatar + name + slogan
    HeroAvatar.vue              # glowing avatar halo + rotating ring
    SocialLinks.vue             # glassmorphic social pill buttons
    SiteFooter.vue              # copyright + ICP filing
public/                         # SEO assets: robots.txt, sitemap.xml, edgeone.json, verifications
```

All content lives in [`app/site.ts`](app/site.ts); the SEO strings there are kept in sync with what
is rendered on the page.

## Develop, build & deploy

```bash
yarn install     # install dependencies
yarn dev         # local dev server
yarn generate    # static generate into .output/public
yarn preview     # preview the generated output
```

Deployment is automated via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): every push
to `master` runs `yarn generate` and publishes `.output/public` to GitHub Pages
(custom domain `hikarilan.life`).

## Accessibility

`prefers-reduced-motion` is honored throughout: the starfield renders a single static frame, parallax
is disabled, and CSS animations/transitions are collapsed. All interactive elements have visible focus
rings.

## License

Licensed under the [AGPL-3.0 License](LICENSE).

```
    Hikari Homepage
    Copyright (C) 2023  HikariLan & contributors

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
```
