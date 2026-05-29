# COPY.md — Contenido final del portafolio

> Fuente de verdad del copy. Toda decisión de copy se cerró acá; el resto de
> archivos (ui.ts, data/experience.ts, data/education.ts, content/projects/*.mdx)
> derivan de este documento. Si hay divergencia, este archivo gana.
>
> Idioma default: **EN** (lo que un visitante ve sin tocar el toggle).
> Toggle: **EN / ES** client-side, sin recargar.

---

## 1. Hero

### Estructura visual

```
Full-stack developer · Argentina       ← mono, chico, text-muted
Martin Leonardi                        ← Fraunces grande
[tagline]
↓ [CTA del CV]
```

### Texto

**Rol (mono, arriba del nombre):**
- 🇺🇸 EN: `Full-stack developer · Argentina`
- 🇪🇸 ES: `Desarrollador full-stack · Argentina`

**Nombre:** `Martin Leonardi` (igual en ambos idiomas)

**Tagline:**
- 🇺🇸 EN: `Building software that works, AI-focused.`
- 🇪🇸 ES: `Construyendo software que sirve, AI-focused.`

**CTA del CV:**
- 🇺🇸 EN: `↓ Download Resume`
- 🇪🇸 ES: `↓ Descargar CV`

> ⚠️ Nota importante: en EN se usa **"Resume"**, no "CV". En US, "CV" se usa
> casi exclusivamente en contexto académico. "Resume" es el estándar para
> portfolios profesionales.

---

## 2. About

### 🇺🇸 EN

> Full-stack developer based in Argentina. Finishing my Computer Science degree this December; I already hold an Associate's in Programming from UTN. I build with AI every day — Claude Code, agents, automations — and I'd rather be inside what's happening than wait for it to settle.
>
> Four years in tech, but I was working with clients online before that. At seventeen I started editing videos on Fiverr for US clients. The next few years: 500+ deliveries, several thousand dollars billed, and a small team of editors I ran to scale the operation. I learned to handle clients in English — deadlines, feedback, expectations — before I learned any framework. When I started my Associate's in 2022, dev and video ran in parallel for a while. Eventually code took over.
>
> Three seasons in Colorado on a J-1 visa along the way, and a trip to San Francisco that stuck. The accent color on this site owes something to the **Golden Gate**.

### 🇪🇸 ES

> Soy desarrollador full-stack en Argentina. Termino la Licenciatura en Informática en diciembre, y ya tengo el Técnico en Programación de la UTN. Construyo con IA todos los días (Claude Code, agentes, automatizaciones) y me importa estar adentro de lo que está pasando, no esperar a que se asiente.
>
> Llevo cuatro años en tecnología, pero antes de eso ya estaba trabajando con clientes en internet. A los diecisiete abrí un perfil en Fiverr editando videos para clientes en Estados Unidos (más de 500 entregas en los años siguientes, varios miles de dólares facturados, y un equipo chico de editores que coordiné para escalar la operación). Aprendí a manejar clientes en inglés, deadlines y feedback antes que cualquier framework. Cuando empecé la tecnicatura en 2022, el desarrollo y el video convivieron unos años, y eventualmente el código se quedó con todo el espacio.
>
> En el medio pasé tres temporadas en Colorado con visa J-1 y tuve la oportunidad de conocer San Francisco. El color de este sitio le debe algo al **Golden Gate**.

### 📌 Detalles de implementación

- **"Golden Gate"** va envuelto en `<span class="text-accent">Golden Gate</span>`. Sin negrita, solo color.
- **Em dashes (—)** en inglés son intencionales (estándar americano).
- **Paréntesis** en español son intencionales (decisión consciente para no parecer "escrito por IA").
- **NO normalizar la puntuación entre idiomas.** Cada uno usa la convención que le queda natural.

---

## 3. Experience

> Sección con timeline vertical (línea izquierda, puntos en accent, fechas en mono a la derecha).
> Tres hitos. **Orden deliberadamente no cronológico estricto**: el orden es por relevancia narrativa, no por fecha. Las fechas visibles dejan claro que es decisión, no error.

### Hito 1 — Freelance Full-stack Developer

**Empresa:** `Self-employed` (EN) / `Independiente` (ES)
**Fechas:** `Apr 2026 – Present`

#### 🇺🇸 EN bullets

- Building web sites and applications with Next.js, TypeScript, Supabase and Cloudflare. Modern stack, fast to iterate.
- Designing custom solutions that mix code with automations and integrations, avoiding unnecessary complexity.
- Bringing product judgment beyond the technical side: SEO, online presence, and what looks good — after four years editing for brands.

#### 🇪🇸 ES bullets

- Desarrollo sitios y aplicaciones web con Next.js, TypeScript, Supabase y Cloudflare. Stack moderno, ágil para iterar.
- Diseño soluciones a medida combinando código con automatizaciones e integraciones, evitando complejidad innecesaria.
- Aporto criterio de producto además del técnico: SEO, presencia online y qué se ve bien, después de cuatro años editando para marcas.

---

### Hito 2 — Frontend Engineer Intern

**Empresa:** `Grid Dynamics`
**Fechas:** `Jul 2025 – Sep 2025`

#### 🇺🇸 EN bullets

- Three-month internship at a multinational headquartered in San Francisco, reporting to a senior mentor.
- Worked through the frontend curriculum: deep JavaScript, modern CSS, API architecture, and security fundamentals.
- Learned how a software company operates at scale: async reporting and working under mentorship from senior devs.

#### 🇪🇸 ES bullets

- Internship de tres meses en una multinacional con base en San Francisco, reportando a un mentor senior.
- Recorrí el currículum de frontend: JavaScript en profundidad, CSS moderno, arquitectura de APIs y ciberseguridad básica.
- Aprendí cómo opera una empresa de software a escala: reporte asincrónico y trabajo bajo mentoría con devs senior.

---

### Hito 3 — Freelance Video Editor

**Empresa:** `Self-employed` (EN) / `Independiente` (ES)
**Fechas:** `Jun 2021 – Dec 2024`

#### 🇺🇸 EN bullets

- Edited 500+ videos for US clients: long-form YouTube, reels, podcasts, and ads — backed by 130+ five-star reviews.
- Ran a small team of editors and managed client material, keeping every delivery to the standard I offered.
- Worked with creators and agencies, some with large audiences. Learned that editing supports the idea: it doesn't invent it.

#### 🇪🇸 ES bullets

- Edité más de 500 videos para clientes en Estados Unidos: YouTube long-form, reels, podcasts y anuncios. Servicio sostenido por 130+ reviews de cinco estrellas.
- Coordiné un equipo chico de editores y gestioné el material de los clientes, manteniendo el estándar que ofrecía.
- Trabajé con creators y agencias, algunos con audiencias grandes. Aprendí que la edición sostiene la idea: no la inventa.

---

## 4. Education

> Sección compacta (NO timeline). Dos filas: título-institución a la izquierda,
> fechas en mono a la derecha (apila en mobile).

### Ítem 1 — Bachelor's / Licenciatura

- **Degree EN:** `Bachelor's in Computer Science`
- **Degree ES:** `Licenciatura en Informática`
- **School:** `UAA, Argentina`
- **Fechas:** `Mar 2024 – Dec 2026`

### Ítem 2 — Associate's / Técnico

- **Degree EN:** `Associate's in Programming`
- **Degree ES:** `Técnico en Programación`
- **School:** `UTN, Argentina`
- **Fechas:** `Feb 2022 – Jul 2024`

> ⚠️ Las siglas (UAA, UTN) son intencionales — no expandir a nombre completo.
> "Argentina" en lugar de "Mar del Plata" es deliberado: consistente con
> About y Hero, y no limita búsqueda laboral en Buenos Aires.

---

## 5. Projects

> Sin screenshots en v1 (decisión deliberada para mantener coherencia visual
> tipográfica). Cada proyecto: título, descripción 1-2 oraciones, stack en
> una línea, y botones Demo / Code según corresponda.
>
> Los botones se renderizan condicionalmente:
> - Si hay URL → link con ↗
> - Si está marcado como `soon` → texto deshabilitado tipo `Demo soon`
> - Si es repo privado → texto en cursiva chica `Private repo`

### Proyecto 1 — Hivemind

**Title:** `Hivemind` (igual en ambos idiomas)

**Description EN:**
> A personal "second brain" with AI that lives on Telegram. Send any link — an article, a YouTube video, a tweet — and it reads it, summarizes it, classifies it, and makes it accessible through natural-language search.

**Description ES:**
> Un "segundo cerebro" personal con IA que vive en Telegram. Le mandás cualquier link (un artículo, un video de YouTube, un tweet) y lo lee, lo resume, lo clasifica, y lo deja accesible por búsqueda en lenguaje natural.

**Stack (igual en ambos idiomas):** `Raspberry Pi · n8n · Cloudflare Tunnel · Gemini 2.5 Flash · Supabase + pgvector · Obsidian`

**Extra (cierre del stack):**
- EN: `Running at $0/month.`
- ES: `Corriendo a $0/mes.`

**Botones:**
- Code: ✅ (GitHub público — URL la pone Martin)
- Demo: ⏳ `Demo soon` / `Demo próximamente`

---

### Proyecto 2 — AT Arquitectura+

**Title:** `AT Arquitectura+` (igual en ambos idiomas)

**Description EN:**
> Portfolio site for an architecture studio. Next.js frontend on Cloudflare, with an unconventional CMS that wires Google Drive as a source via n8n — the client uploads content from a tool they already know, no DB in the middle.

**Description ES:**
> Portafolio de autor para un estudio de arquitectura. Frontend en Next.js sobre Cloudflare, con un CMS no convencional que conecta Google Drive como fuente vía n8n: el cliente sube contenido desde una herramienta que ya conoce, sin pasar por una DB.

**Stack:** `Next.js · TypeScript · Cloudflare · n8n · Google Drive`

**Botones:**
- Code: ❌ `Private repo` / `Repo privado` (cursiva chica)
- Demo: ⏳ `Demo soon` / `Demo próximamente`

> ⚠️ Pendiente Martin: confirmar si el CMS Drive+n8n está construido al
> momento del launch del portfolio. Si no, esta descripción miente. Decisión
> entre: (a) construir el CMS antes del launch del portfolio, o (b) sacar
> la mención del CMS de la descripción y dejar solo Next.js + Cloudflare.

---

### Proyecto 3 — LEGORO

**Title:** `LEGORO` (igual en ambos idiomas)

**Description EN:**
> Landing page for an electromechanical engineering firm. Production site focused on performance, restrained branding, and a contact form with transactional email.

**Description ES:**
> Landing page para una empresa de ingeniería electromecánica. Sitio en producción con foco en performance, branding sobrio y formulario de contacto con email transaccional.

**Stack:** `Next.js · TypeScript · Supabase · Cloudflare Workers · Resend`

**Botones:**
- Code: ❌ `Private repo` / `Repo privado`
- Demo: ✅ (URL la pone Martin)

> ⚠️ Pendiente Martin: arreglar las cosas "medio rotas" del demo antes de
> publicarlo en el portafolio. Un portafolio se juzga por su pieza más débil.

---

## 6. Microcopy

### Nav anchors (minúsculas, igual en ambos idiomas)

- 🇺🇸 EN: `about` · `experience` · `education` · `projects`
- 🇪🇸 ES: `sobre mí` · `experiencia` · `educación` · `proyectos`

### Toggle de idioma

Botón: `EN / ES` (el "/" en color text-muted, sin label adicional).

### Footer note

- 🇺🇸 EN: `From Argentina, onwards.`
- 🇪🇸 ES: `Desde Argentina, onwards.`

> ⚠️ Intencional: el "onwards" se mantiene en inglés en ambas versiones.
> Es un guiño de carácter, no un error de traducción.

---

## 7. Margin notes (anotaciones manuscritas)

🔲 **TBD.** Decisión postergada: Martin quiere ver el sitio completo armado
con todo el copy real antes de decidir las anotaciones definitivas.

Por ahora, dejar las anotaciones como placeholder (o quitarlas temporariamente
de los componentes). Cuando se definan, irán en el diccionario con keys `note.*`.

---

## 8. Notas técnicas finales

### Sobre el assignment del español "Argentina" vs ciudades

Decisión consistente: **"Argentina"** se usa en Hero (rol), About, y Education
(escuelas). NO se menciona Mar del Plata ni Buenos Aires en ningún lado público.
Razón: máxima flexibilidad para búsqueda laboral.

### Sobre los pendientes que Martin tiene que resolver antes del launch

1. **CV/Resume** → poner en `public/cv.pdf`.
2. **LEGORO demo** → arreglar las cosas rotas que conoce antes de linkearlo.
3. **AT Arquitectura+** → decidir si el CMS Drive+n8n va en la descripción.
4. **Margin notes** → definir las anotaciones después de ver el sitio.
5. **Hivemind GitHub URL** → confirmar URL pública.

### Sobre el orden de Projects

El orden propuesto es: Hivemind, AT Arquitectura+, LEGORO. Razones:

1. Hivemind primero: es el único 100% completo y demuestra AI-focused.
2. AT Arquitectura+: cliente activo, demuestra ingeniería creativa.
3. LEGORO: cliente en producción.

Si Martin prefiere otro orden, ajustar el campo `order` en cada `.mdx`.
