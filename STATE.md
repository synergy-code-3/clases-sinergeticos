# STATE.md — Clases Sinergéticos

> Bookmark técnico de continuidad. Léelo al inicio de cada sesión y actualízalo al cierre.

---

## Última sesión — 2026-07-01 — Clase nueva "Cuándo tercerizar tu marketing" + auditar y completar el hub

**Hub Clases Sinergéticos completo y publicado: 6 clases en producción. Se construyó la clase nueva "Cuándo sí y cuándo no tercerizar tu marketing" y se publicaron las dos que faltaban en el índice ("Los 5 activos" y la Certificación).**

### Lo hecho hoy
- **Clase nueva "Cuándo sí y cuándo no tercerizar tu marketing"** (`cuando-tercerizar-tu-marketing/index.html`): deck de 14 slides, tema blanco+violeta, clonando la estructura/nav de `los-5-activos-digitales` (fade, teclado/swipe/dots, barra de progreso). Ángulo = marco neutral de decisión para dueño de negocio (elegido con David): las 3 piezas del marketing (estrategia/ejecución/medición), 4 modos de tercerizar, cuándo sí / cuándo no, el error caro, lo que nunca sueltas, cómo tercerizar bien, autodiagnóstico, cierre. Todo el copy pasado por `GUIA-DE-VOZ.md`.
- **Botón de pantalla completa** inline y autocontenido (tecla F) en la clase nueva — el `fullscreen.js` compartido vive dentro de `certificacion-publicidad-pagada/`, no en la raíz, así que se inlineó. Primer intento fue invisible (blanco translúcido sobre fondo claro); se rehízo sólido violeta con sombra y valores literales.
- **Fix de copy** en la clase nueva: "Tres cosas no se sueltan." → "3 cosas que no se sueltan." (petición de David).
- **Auditoría del hub** (`index.html`): faltaban 2 clases terminadas. Se agregaron cards y se publicaron:
  - **Los 5 activos digitales** — estaba hecha pero SIN commitear (era el P0 pendiente desde 2026-06-17); ahora commiteada y con card.
  - **Certificación en Publicidad y Ads** — ya estaba en git y desplegada, pero nunca tuvo card en el hub; card agregada (link a `./certificacion-publicidad-pagada/`).
- **Barrido global "¿falta alguna clase?"**: revisé carpetas, HTML sueltos (por nombre y por markers de deck), títulos "Clase/Módulo/Lección/Certificación", `.key/.pptx`, y repos GitHub (IrizaD, synergy-code-3, Zentraly). Conclusión: **no falta ninguna clase**. Descartados por no ser clases del hub: `propuesta-erik-taller.html` (propuesta app EXSA), `Consultorias/Machinery-Hunter/.../recorrido.html` (taller de consultoría a cliente), repos `webinar_room`/`first-land-usa-landings`/`cuestionario-podcast-mastery`/`mastermind-marketing`.
- **3 deploys a prod** vía push (auto-deploy por conexión git de Vercel), los 3 verificados HTTP 200. Commits: `a863c05` (clase nueva), `ed39244` (2 cards + carpeta los-5), más este cierre.

### Decisiones tomadas
- Clase nueva = marco neutral de decisión (no "vende consultoría"), audiencia dueño de negocio, tema blanco+violeta reusado de "Los 5 activos" — consistencia del hub.
- El botón de pantalla completa se inlinea por clase cuando la clase vive en la raíz del hub (el `fullscreen.js` compartido solo cubre los decks dentro de `certificacion-publicidad-pagada/`).

### Bugs conocidos
- Ninguno abierto.

### IDs críticos
```
GITHUB_REPO     = "synergy-code-3/clases-sinergeticos"
VERCEL_PROD_URL = "https://clases-sinergeticos.vercel.app"
NUEVA_CLASE_URL = "https://clases-sinergeticos.vercel.app/cuando-tercerizar-tu-marketing/"
```

### Pendientes — orden de prioridad

#### 🟢 P2 — Cuando haya tiempo
- Card de la Certificación dice "Certificación · 5 módulos"; David puede querer un tiempo estimado.
- Verificar en fullscreen real (sin barra de marcadores) que ninguna slide de la clase nueva se corte; afinar la que quede justa.
- Si David hizo clases en Google Slides/Canva/Gamma (fuera de archivos locales/repos), no se revisaron esos canales — pedírselo si aplica.
- "Voz de la audiencia" en `GUIA-DE-VOZ.md` (de la certificación) sigue pendiente de calibrar con ejemplos suyos.

### Próximo paso para retomar
Hub completo y en prod. Si David quiere seguir: iterar copy/visual de la clase nueva según su feedback, agregar tiempos estimados a las cards, o construir la siguiente clase (mismo patrón: crear carpeta `<slug>/index.html` clonando un deck existente + agregar card al hub + commit/push).

---

## Última sesión — 2026-06-20 — Certificación en Publicidad y Ads (5 módulos, pulido visual y de copy)

**Certificación completa (5 módulos) publicada en `clases-sinergeticos.vercel.app/certificacion-publicidad-pagada/` con menú, imágenes 3D, capa de movimiento, botón de pantalla completa y copy revisado; lista y en uso real.**

### Lo hecho hoy
- **Renombre global** a "Certificación en Publicidad y Ads" (antes "Publicidad Pagada"): títulos, portadas y menú (commit 9ffc7ce).
- **M3 — orden de formatos**: la explicación ("Seis formatos que sí venden") ahora va ANTES de la galería de ejemplos reales ("Así se ven, en la vida real") — petición de David, completada (c56b410).
- **M3 — galería de 6 frames realistas** (UGC, testimonio, antes/después, demo, carrusel, texto+video) generados con GPT Image 2 1K (a2f0727).
- **Imágenes 3D** en hooks: atención (M1), afinar y ROI (M5) (f0acbda); portadas-hero + hook M3 (cfb9d64). Estándar fijado: GPT Image 2, **1K**, JPG ligero.
- **Capa de movimiento y efectos**: entrada escalonada (hf-rise), glow ambiental en slides dark/divider, micro-interacciones, transición con escala; M1 y M2 migrados a `cert.css`/`cert.js` compartidos (cea1155).
- **Botón de pantalla completa** (tecla F) en los 5 decks vía `fullscreen.js` compartido (b2dd9f6).
- **Fix 404** al entrar a módulos: `trailingSlash:true` en `vercel.json` + enlaces absolutos en el menú (a844f9b).
- **Copy M2**: subtítulo de portada acortado a "A quién le hablas y por qué." (1711acf).
- **Guía de voz** (`GUIA-DE-VOZ.md`): 6 reglas basadas en *Made to Stick* / Sugarman / Ogilvy; se quitó toda mención a "Club" (e7b5aae).

### Decisiones tomadas
- Arquitectura compartida: `cert.css` + `cert.js` + `fullscreen.js` cargados con `../` desde cada subcarpeta de módulo (evita ~470 líneas duplicadas).
- Todo título/copy pasa por el filtro de `GUIA-DE-VOZ.md` antes de quedarse (David rechazó copy "traducido/mecánico").
- No mencionar "Club Sinergético" en ningún punto de la certificación.

### Bugs conocidos
- Ninguno abierto. (El `index.html` raíz del proyecto tiene cambios sin commitear — pertenece a la otra clase, no a la certificación.)

### Pendientes — orden de prioridad

#### 🟢 P2 — Cuando haya tiempo
- "Voz de la audiencia" en `GUIA-DE-VOZ.md` sigue pendiente: pegar 1–2 títulos que a David le encanten para fijar el tono exacto.
- Revisar si M4 (light, demo en vivo) necesita más apoyo visual o queda así por diseño.

### Próximo paso para retomar
La certificación está completa y publicada. Si David quiere seguir: calibrar la "Voz de la audiencia" con ejemplos suyos, o iterar copy/visual módulo por módulo según su feedback.

---

## Última sesión — 2026-06-17 — Clase nueva "Los 5 activos digitales" (deck premium)

**Clase nueva construida y lista en local (`los-5-activos-digitales/`), 25 slides, tema blanco+violeta, mockups visuales; falta el OK de David para commit + push + deploy.**

### Lo hecho hoy
- Definimos con David el contenido de los 5 activos (iterando): **Marca e identidad · Redes sociales · Página web · WhatsApp · CRM**. Marco narrativo = viaje del cliente con función por activo (te recuerdan → te descubren → toman acción → te hablan → no se caen). Marca es el activo base; se descartaron "pagos" (vive en la web) y "contenido" (vive en redes) por traslape.
- Construí el deck `los-5-activos-digitales/index.html` (clonando el patrón de `si-mides-esto-vas-a-vender-mas`: slides absolutas con fade, nav teclado/swipe/dots/botones, barra de progreso).
- Estructura final: **25 slides** = 3 intro (portada · presencia vs activo · mapa) + por cada activo 4 slides (**Divisor → Puntos clave → Mockup visual → Error/Bien**) + 2 cierre (sistema conectado · autodiagnóstico).
- Mockups en CSS puro: ficha de marca, perfil en teléfono, ventana de navegador con hero+CTA, chat de WhatsApp con burbujas, kanban de CRM.
- Agregué la **card al hub** (`index.html`): "Los 5 activos digitales que todo negocio debe construir" → `./los-5-activos-digitales/`.
- Iteraciones de David aplicadas: (1) varias slides por activo, (2) +slide de "Puntos clave a considerar" por activo, (3) **todo más grande** (se verá en video desde teléfono), (4) **nada alineado a la izquierda** → todo centrado, (5) recolor a **blanco + violeta** (`#7C3AED`), (6) fix de slides que se cortaban arriba/abajo (`safe center` + scroll oculto + reducción de peso vertical), (7) quité el "25 min ·" de la portada.

### Decisiones tomadas
- **Tema visual:** base blanco cálido `#FBFAFF`, acento violeta `#7C3AED`/`#5B21B6`, superficies oscuras en violeta profundo `#1C1140` con glow radial. El chat de WhatsApp **mantiene verde/teal real** a propósito (si no, no se lee como WhatsApp).
- **Fit en pantalla:** `justify-content/align-items: safe center` + `overflow-y:auto` (scrollbar oculto) como red de seguridad para que nunca se corte contenido; además se bajó el peso vertical (paddings, alto de teléfono/chat, headline) para que entre sin scroll en fullscreen.

### Pendientes — orden de prioridad

#### 🔴 P0 — Bloqueante
- **Falta el OK explícito de David para commit + push.** Nada subido aún. Al confirmar: `git add -A && git commit && git push` (auto-deploya por la conexión git de Vercel) → `https://clases-sinergeticos.vercel.app/los-5-activos-digitales/`.

#### 🟡 P1 — Esta semana
- Personalizar los placeholders del deck ([tu cliente], [resultado], "Tu Negocio", @tunegocio) si David lo va a usar con una marca/caso real en vivo.
- Verificar en fullscreen real (sin barra de marcadores) que ninguna slide se corte; afinar la que quede justa.

### Próximo paso para retomar
Si David da OK: hacer `git add -A && git commit -m "feat: clase Los 5 activos digitales" && git push` desde `Clases Sinergeticos/` y confirmar el deploy en `clases-sinergeticos.vercel.app/los-5-activos-digitales/`. Si no, seguir afinando copy/diseño del deck.

---

## Última sesión — 2026-05-30 — Crear hub Clases Sinergéticos + publicar 3 clases

**Hub Clases Sinergéticos en producción (`clases-sinergeticos.vercel.app`) con 3 clases publicadas y carpetas-fuente consolidadas dentro del proyecto.**

### Lo hecho hoy
- Construí la clase HTML "Cómo vender por WhatsApp": deck premium de 19 slides con identidad WhatsApp completa (header teal fijo, burbujas verde claro `#D9FDD3` con palomitas azules `#53BDEB`, fondo wallpaper beige `#ECE5DD`, tipografía sans-serif Figtree, contador de slides, dot-nav, navegación con teclado).
- Agregué un indicador "estás aquí" del framework `1·2·3·4·5·+` en cada slide de fase y reordené el deck para que la secuencia vaya 1→5 antes del bloque de Seguimiento, alineando recorrido y mapa.
- Convertí los `[placeholders]` de las burbujas de mensajes en **campos editables** (`contenteditable`, selección automática al enfocar, Enter para confirmar, guard de teclado para que no dispare la navegación de slides).
- Scaffold del hub `Clases Sinergeticos/` con `index.html` (tema oscuro premium con cards por clase) y `.gitignore`.
- Repo privado creado en `synergy-code-3/clases-sinergeticos`, pusheado, y conectado a Vercel (`vercel git connect`) para auto-deploys.
- Static-export de la clase Next.js "La estructura de un sitio web que vende": modifiqué su `next.config.ts` con `output: "export"`, `basePath: "/estructura-web-que-vende"`, `trailingSlash: true`, `images.unoptimized: true`. Build limpio, copié `out/` al hub.
- Sumé la clase "Si mides esto vas a vender más" (copia de `/Users/davidiriza/Claude_Dashboard/presentacion-metricas.html`) al hub.
- Moví las carpetas-fuente `Clase Ventas WhatsApp/` y `Clase Estructura Web Que Vende/` dentro de `Clases Sinergeticos/` y las añadí al `.gitignore` para que no contaminen el repo del hub.

### Decisiones tomadas
- **Arquitectura del hub: monorepo estático único.** Cada clase vive como subpath (`/<slug>/`) dentro del mismo proyecto Vercel en vez de proyectos separados → URLs unificadas bajo `clases-sinergeticos.vercel.app`. Razón: David pidió "todas las clases con su título" en un solo lugar; los subpaths se ven más limpios que dominios sueltos.
- **Clases Next.js se static-exportan al hub.** Cuando una clase es Next.js sin features de servidor, se configura `output: "export"` + `basePath` y se copia el `out/` al subpath. Razón: mantener una sola URL canónica y un solo deploy.
- **Carpetas-fuente conviven en el repo pero gitignoreadas.** David ve todo en un solo contenedor en su explorador sin que el repo crezca con `node_modules` ni HTML duplicado.
- **Identidad visual del deck WhatsApp:** fondo wallpaper beige sólido (sin patrón de doodles — fue probado y rechazado por confuso), sans-serif Figtree (no serif), tamaños de texto grandes, animaciones rápidas (`0.32s`, stagger `35ms`).

### IDs críticos
```
GITHUB_REPO        = "synergy-code-3/clases-sinergeticos"  // privado, IrizaD admin
VERCEL_PROJECT     = "clases-sinergeticos"                 // scope synergy-code
VERCEL_PROD_URL    = "https://clases-sinergeticos.vercel.app"
VERCEL_TOKEN_FILE  = "~/.config/sinergeticos/credentials"  // SINERGETICOS_VERCEL_TOKEN
```

URLs públicas:
- Hub: `https://clases-sinergeticos.vercel.app/`
- `…/como-vender-por-whatsapp/`
- `…/estructura-web-que-vende/`
- `…/si-mides-esto-vas-a-vender-mas/`

### Pendientes — orden de prioridad

#### 🟡 P1 — Esta semana
- Personalizar copy de los campos editables de la clase WhatsApp con un producto/Bootcamp real, si David lo va a impartir en vivo.
- Confirmar que el patrón "estático embebido en el hub" es el definitivo para futuras clases (vs. cada clase con su propio repo/deploy).

#### 🟢 P2 — Cuando aplique
- Custom domain en Vercel si quiere algo tipo `clases.sinergeticos.mx` (hoy vive en `.vercel.app`).
- Quitar la tarjeta "Próximamente" del hub cuando haya más clases.
- La clase Next.js "Estructura Web Que Vende" ahora tiene `basePath` en su `next.config.ts`; si algún día se quiere desplegar standalone, hay que quitar esa config o usar un build alternativo.

### Próximo paso para retomar
**Agregar una clase nueva al hub:** si es HTML estática, `cp` a `Clases Sinergeticos/<slug>/index.html`. Si es Next.js sin features de servidor, agregar `output: "export"` + `basePath: "/<slug>"` + `trailingSlash: true` a su `next.config.ts`, hacer `npm run build`, copiar `out/` → `Clases Sinergeticos/<slug>/`. En ambos casos, agregar una card al `index.html` del hub, `git add -A && commit && push` (auto-deploya por la conexión git de Vercel).

---
