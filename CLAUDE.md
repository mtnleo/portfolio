# CLAUDE.md — Portafolio personal de Martin Leonardi

> Fuente de verdad del proyecto. Leer **completo** antes de escribir código.
> Este archivo define el QUÉ y el PORQUÉ. Los prompts por fase (en `PROMPTS.md`)
> definen el CÓMO y el ORDEN. No te adelantes a fases futuras.

---

## 1. Objetivo del proyecto

Portafolio personal de un desarrollador full-stack. Tres audiencias: clientes
freelance, recruiters/roles full-time, y networking general. Objetivo de diseño:
**sobrio, minimalista, cálido, liviano**. Que en 2 segundos comunique qué hace
Martin, con qué stack, y dónde está; y que el contenido (no la decoración) sea
el protagonista.

Referencias estéticas: rauchg.com, franciscoerramuspe.com, nachogorriti.com.
La línea es "cálido narrativo con impronta propia" — NO una copia de ninguno.

### Principios no negociables

- **Cero JS innecesario.** Astro estático. JS solo donde es imprescindible
  (toggle de idioma, scroll progress, traducción dinámica de listas). El bundle
  principal debe quedar en ~0 KB de JS.
- **Performance objetivo:** Lighthouse 100/100/100/100. Primer load < 100 KB.
- **Accesibilidad real:** contraste WCAG AA, `prefers-reduced-motion`, HTML
  semántico, foco visible.
- **Mobile-first.** Todo responsive desde 360px.
- **Contenido data-driven.** Textos en diccionario i18n; experiencia/educación
  en archivos de datos; proyectos en MDX. Nunca hardcodear copy en componentes.

---

## 2. Stack y versiones (CRÍTICO)

- **Astro 6** (static output, sin adapter)
- **Tailwind v4** vía `@tailwindcss/vite` (tokens con `@theme` en CSS, NO hay
  `tailwind.config.js`)
- **MDX** (`@astrojs/mdx`) para proyectos
- Fuentes self-hosted con `@fontsource-variable/*`, **solo subset latin**
- Deploy target: **Cloudflare Pages** (Astro es de Cloudflare desde 2026)

### ⚠️ Pin de versiones obligatorio

`@tailwindcss/vite@4.3.x` arrastra **Vite 8 (rolldown)** que es incompatible con
el **Vite 7** de Astro 6. El build falla con:
`Missing field tsconfigPaths on BindingViteResolvePluginConfig`.

**Solución:** fijar Tailwind a `4.1.18` (usa Vite 7, deduped con Astro):

```jsonc
// package.json — usar EXACTAMENTE estas versiones de tailwind
"@tailwindcss/vite": "4.1.18",
"tailwindcss": "4.1.18"
```

Verificá tras instalar: `npm ls vite` debe mostrar **un solo** Vite 7.x deduped.

---

## 3. Design tokens

Definidos en `src/styles/global.css` con `@theme`. Tailwind v4 genera utilities
automáticamente (`bg-bg`, `text-accent`, `border-border`, etc.).

```css
@theme {
  /* Colores */
  --color-bg: #292323;          /* fondo oscuro cálido */
  --color-bg-elevated: #332b2b; /* cards, hover surfaces */
  --color-text: #e1e0dd;        /* texto principal */
  --color-text-muted: #a29f9b;  /* secundario: fechas, captions */
  --color-accent: #ba3e35;      /* Golden Gate — títulos, anotaciones, acentos grandes */
  --color-accent-hover: #d4554b;/* links en texto chico / hover — pasa WCAG AA */
  --color-border: #3b3331;      /* separadores sutiles */

  /* Tipografía */
  --font-display: "Fraunces Variable", "Fraunces", Georgia, serif;
  --font-body: "Geist Variable", "Geist", system-ui, sans-serif;
  --font-mono: "Geist Mono Variable", "Geist Mono", ui-monospace, monospace;
  --font-hand: "Caveat Variable", "Caveat", cursive;

  /* Layout — ANCHO DE COLUMNA: 680px (NO 800) */
  --container-content: 680px;
}
```

### Regla de uso del color de acento

- `--color-accent` (#ba3e35): títulos de acento, anotaciones manuscritas, puntos
  de timeline, elementos GRANDES. Su contraste sobre el fondo es ~3.8:1 → solo
  apto para texto grande, NUNCA para body chico.
- `--color-accent-hover` (#d4554b): links dentro de texto, estados hover. Este SÍ
  pasa WCAG AA para texto chico.

### Roles tipográficos

- **Display (Fraunces):** nombre del hero, títulos de sección (`h2`). Peso light
  (300–400). Da la calidez editorial.
- **Body (Geist):** todo el texto de lectura.
- **Mono (Geist Mono):** logo "ML", labels (rol del hero, nav), fechas, labels de
  links (Demo/Code/sociales).
- **Hand (Caveat):** EXCLUSIVO para anotaciones al margen. Nunca para otra cosa.

---

## 4. Fuentes — solo subset latin

Importar SOLO el subset latin (la ñ está en latin; no se necesita latin-ext ni
otros). Esto baja de ~512 KB a ~80 KB por familia.

### ⚠️ Fontsource v5 — `latin.css` no existe

`@fontsource-variable/<font>@^5` ya **no** expone `latin.css` (lo quitaron). Solo
hay `index.css` (todos los subsets vía `unicode-range`) y archivos por axis
(`wght.css`). Importar `index.css` haría que Vite bundlee TODOS los subsets en
`dist/` (~512 KB de fonts), aunque el browser solo cargue el latin en runtime.

**Solución:** `src/styles/fonts.css` hand-rolled con `@font-face` apuntando solo
al woff2 latin. Vite 7 resuelve specifiers npm en `url()` de CSS importadas vía
JS sin prefijo `~`.

```css
/* src/styles/fonts.css */
@font-face {
  font-family: "Fraunces Variable";
  font-style: normal;
  font-display: swap;
  font-weight: 100 900;
  src: url("@fontsource-variable/fraunces/files/fraunces-latin-wght-normal.woff2") format("woff2-variations");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* Repetir para Geist (geist-latin-wght-normal.woff2), Geist Mono
   (geist-mono-latin-wght-normal.woff2) y Caveat (caveat-latin-wght-normal.woff2,
   font-weight 400 700 en lugar de 100 900). */
```

```ts
// en Layout.astro
import "../styles/fonts.css";
```

Verificado en Fase 1: dist queda en ~196 KB total (4 woff2 latin: 36+32+32+76).

---

## 5. Estructura del sitio

Single-page, scroll lineal. Orden de secciones:

```
Nav (sticky)
 └─ logo ML · about · work · projects · toggle EN/ES · barra de progreso scroll
Hero        → rol (mono) + nombre (Fraunces) + tagline + ↓ Download CV
About       → 2-3 párrafos, voz propia
Experience  → timeline vertical
Education   → bullets compactos (NO timeline)   ← va DESPUÉS de Experience
Projects    → cards con screenshot + Demo/Code
Footer      → LinkedIn · Email · GitHub + nota
```

### Layout de columna

`.content-column`: `max-width: var(--container-content)` (680px), centrada con
`margin-inline:auto`, `padding-inline: 1.5rem`. En mobile ocupa todo el ancho con
ese padding. Toda sección usa esta clase.

---

## 6. Secciones — specs detalladas

### Nav (sticky)
- `position: sticky; top: 0`, fondo `bg/80` con `backdrop-blur-sm`, borde inferior.
- Izquierda: logo "ML" en mono, link a `#top`.
- Derecha: anchors (about/work/projects) en mono/sans chico + toggle de idioma.
- Barra de progreso de scroll de 1px arriba de todo, en color accent, ancho =
  % scrolleado. Script vanilla con listener `scroll` pasivo.
- Smooth scroll vía CSS (`scroll-behavior: smooth` + `scroll-padding-top: 6rem`
  para que los anchors no queden tapados). Respetar `prefers-reduced-motion`.

### Hero
- Línea 1: rol en mono, `text-muted` (key `hero.role`).
- Línea 2: "Martin Leonardi" en Fraunces grande (~3.5rem desktop), light.
  Es el ancla de una anotación al margen (key `note.hero`).
- Línea 3: tagline en `text-muted`, máx ~36rem de ancho (key `hero.tagline`).
- CTA: link sutil "↓ Download CV" en mono con underline animado, NO botón grande
  (key `hero.cv`, href `/cv.pdf` con `download`).

### About
- `h2` "About" + 1-3 párrafos en `text-muted`, ancho de lectura.
- Texto desde `about.body` (placeholder hasta tener copy real).

### Experience (timeline vertical)
- Lista `<ol>` con borde izquierdo (`border-l`) como línea de tiempo.
- Cada hito: punto en accent sobre la línea (`ring` del color de fondo para que
  "corte" la línea), título "**Rol** — Empresa" a la izquierda, fechas en mono
  `text-muted` a la derecha (en mobile se apilan), y 3 bullets con guion en accent.
- Data-driven desde `src/data/experience.ts`. Textos EN/ES en el data file.
- Traducción dinámica: script que observa `document.documentElement.lang` con
  `MutationObserver` y reemplaza textos. (Ver patrón en §8.)

### Education (bullets compactos) ← NUEVA
- NO es timeline. Sección chica: `h2` "Education" + lista de 2 ítems.
- Cada ítem en una fila: a la izquierda "**Título** — Institución", a la derecha
  las fechas en mono `text-muted` (mismo tratamiento de fecha que la timeline,
  para coherencia). En mobile se apilan.
- Sin bullets descriptivos (son solo 2 líneas de contexto).
- Data-driven desde `src/data/education.ts`, EN/ES.
- Contenido real:
  - **Técnico en Programación** — UTN · Feb 2022 – Jul 2024
  - **Licenciatura en Informática** — Universidad Atlántida Argentina · Mar 2024 – Dec 2026
  - (Versión EN: "Programming Technician Degree" / "Bachelor's in Computer Science")

### Projects
- Cada proyecto: screenshot (componente `<Image>` de `astro:assets`, optimizada,
  con `widths`/`sizes`), título, descripción breve, y links Demo/Code en mono con
  flecha ↗ y underline animado.
- Hover sutil: leve `scale(1.02)` en la imagen.
- Data-driven desde `src/content/projects/*.mdx` (content collection).
- Descripción EN en `description`, ES opcional en `description_es`.

### Footer
- 3 links en mono con ↗: LinkedIn, Email (mailto), GitHub. NO sticky.
- Nota final chica en `text-muted` (key `footer.note`).

---

## 7. i18n — toggle EN/ES client-side (sin rutas)

NO usar el routing `[locale]/` de Astro (innecesario para single-page). Patrón:
diccionario `ui.ts` + toggle que intercambia `textContent` de nodos marcados,
sin recargar. Persiste en `localStorage`, respeta `navigator.language` en la
primera visita. EN es el default que se renderiza en build (SSG).

### Reglas
- Todo texto traducible va en `src/i18n/ui.ts` (keys EN + ES).
- Nodos estáticos: atributo `data-i18n="key"`. El script los traduce.
- Listas dinámicas (experiencia, educación, proyectos): traducir vía script que
  lee el data file y observa cambios de `lang` (ver §8).
- Anti-flash: script inline en `<head>` que setea `document.documentElement.lang`
  antes del primer paint.
- El toggle puede tener voz propia (label tipo "¿hablás español?"). Las
  anotaciones pueden cambiar entre idiomas como easter egg (Martin define el copy).

---

## 8. Snippets de referencia (patrones ya resueltos)

### Anotación al margen — comportamiento responsive
Desktop (>1100px): flota absoluta FUERA de la columna de 680px, en el espacio
lateral. Mobile: cae inline debajo de lo que anota, más chica.

```css
.margin-note {
  font-family: var(--font-hand);
  color: var(--color-accent);
  font-size: 1.35rem; line-height: 1.2; font-weight: 500;
  display: block; margin-top: 0.35rem; opacity: 0.9; /* mobile: inline */
}
@media (min-width: 1100px) {
  .margin-note-anchor { position: relative; }
  .margin-note {
    position: absolute; width: 180px; margin-top: 0;
    left: calc(100% + 2rem); top: 0;
  }
  .margin-note--left { left: auto; right: calc(100% + 2rem); text-align: right; }
}
```
Las anotaciones llevan `aria-hidden="true"` (son decorativas) y su texto vive en
`ui.ts` con `data-i18n` para que el toggle las traduzca.
Mejora futura: reemplazar la flecha de teclado por un SVG hand-drawn.

### Traducción dinámica de listas (experiencia/educación/proyectos)
```js
import { milestones } from "../data/experience";
function applyLang(lang) {
  document.querySelectorAll("[data-i18n-dyn]").forEach((el) => {
    const [, idx, field, j] = el.dataset.i18nDyn.split(".");
    const m = milestones[Number(idx)]; if (!m) return;
    if (field === "role") el.textContent = m.role[lang];
    else if (field === "bullet") el.textContent = m.bullets[lang][Number(j)];
  });
}
new MutationObserver(() => applyLang(document.documentElement.lang || "en"))
  .observe(document.documentElement, { attributes:true, attributeFilter:["lang"] });
applyLang(document.documentElement.lang || "en");
```

### astro.config.mjs
```js
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  site: "https://TU-DOMINIO.com",
  integrations: [mdx()],
  vite: { plugins: [tailwindcss()] },
});
```

### content.config.ts (Astro 6 — patrón actual)
```ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    description_es: z.string().optional(),
    cover: image().optional(),
    demo: z.string().url().optional(),
    code: z.string().url().optional(),
    order: z.number().default(0),
    featured: z.boolean().default(true),
  }),
});
export const collections = { projects };
```

---

## 9. Estructura de archivos esperada

```
src/
├─ styles/global.css        # @import tailwind + @theme + clases base
├─ i18n/ui.ts               # diccionario EN/ES (todo el copy de UI)
├─ data/
│  ├─ experience.ts         # hitos de experiencia (EN/ES)
│  └─ education.ts          # ítems de educación (EN/ES)
├─ content.config.ts        # schema de proyectos
├─ content/projects/*.mdx   # un archivo por proyecto
├─ layouts/Layout.astro     # html base, fuentes, meta, anti-flash lang
├─ components/
│  ├─ Nav.astro
│  ├─ LangToggle.astro
│  ├─ MarginNote.astro
│  ├─ Hero.astro
│  ├─ About.astro
│  ├─ Experience.astro
│  ├─ Education.astro
│  ├─ Projects.astro
│  └─ Footer.astro
└─ pages/index.astro        # ensambla todo
public/
├─ favicon.svg              # monograma ML
└─ cv.pdf                   # (lo agrega Martin)
```

---

## 10. Checklist de verificación (correr en cada fase)

- [ ] `npm run build` pasa sin errores
- [ ] `npm ls vite` → un solo Vite 7.x
- [ ] Bundle principal sin JS de framework (revisar `dist/_astro/*.js`)
- [ ] Toggle EN/ES cambia TODO el texto sin recargar
- [ ] Anotaciones: al margen en desktop, inline en mobile
- [ ] Timeline: punto, título izq, fecha der; apila en mobile
- [ ] Contraste: body nunca en `--color-accent` puro
- [ ] Responsive ok desde 360px
- [ ] `prefers-reduced-motion` desactiva smooth scroll y animaciones
```
