# STATE.md — Clases Sinergéticos

> Bookmark técnico de continuidad. Léelo al inicio de cada sesión y actualízalo al cierre.

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
