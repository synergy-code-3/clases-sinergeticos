# STATE.md — Clases Sinergéticos

> Bookmark técnico de continuidad. Léelo al inicio de cada sesión y actualízalo al cierre.

---

## Última sesión — 2026-07-22 — Clase nueva "Caso Stanley" (Martes de Estrategia Digital) investigada, construida y publicada

**Clase completa de 17 slides en `clases-sinergeticos.vercel.app/caso-stanley/` con 3 imágenes generadas + 1 foto real de prensa, card en el hub, verificada en prod.**

### Lo hecho hoy
- **Investigación de casos** para la clase "estrategia digital en negocio NO digital": se evaluaron Outdoor Elegance ($194→$106k en Facebook Ads), Blendtec (+700%), Kogi BBQ (Twitter, $0), Domino's (+9,000% stock) y **Stanley (elegido por David)**: $73M (2019) → $750M (2023), mismo termo, nueva audiencia. Todos los datos verificados con fuente (Retail Dive, Forbes, ABC7, HubSpot, CreatorIQ).
- **Deck `caso-stanley/index.html`** (17 slides): clon del patrón del hub (nav teclado/swipe/dots, F fullscreen) con paleta propia verde Stanley sobre crema (`#1D7A53` / `#FAF8F2` / dark `#0F231B`). Estructura: mito → caso → giro (The Buy Guide) → incendio viral → números ($73M→$750M) → 3 principios → 5 acciones → 4 métricas → cierre "No cambies el producto. Cambia a quién se lo cuentas."
- **3 imágenes con Higgsfield** (Seedream 4.5 modo rápido, ~3 créditos, con OK de David): termo vintage en taller, vasos pastel, coche quemado con vaso intacto. Optimizadas con `sips -Z 1200` a JPG 120-230KB. Sin logos de Stanley (tema de marca).
- **Foto real de The Buy Guide** (las 3 fundadoras, foto de prensa vía Retail Dive) publicada en slide 6 por decisión explícita de David ("es solo para la clase"), con crédito al pie.
- **Slide 6 enriquecida** con los números reales: Stanley sin programa de afiliados les ofreció la única vía — mayoreo de 10,000 vasos con dinero propio; 5,000 vendidos en 4 días, los otros 5,000 en 1 hora. Copy ajustado a pedido de David ("las retó" era impreciso).
- **Fix de layout**: el flex de `.fact` partía los `<b>` en columnas; texto envuelto en `span.t`.
- **Card agregada al hub** ("El termo que rompió internet", Estrategia · clase). 4 deploys a prod vía push, todos verificados con curl + screenshots headless.

### Decisiones tomadas
- **El caso es Stanley**, no el 217% del título promocional: David anuncia "217%" pero el deck cuenta los números reales con fuente (regla: datos duros publicables solo de la fuente).
- Foto de prensa de The Buy Guide SÍ publicada en el deck — decisión de David, uso educativo de la clase.
- Screenshots de verificación: el path viejo de chromium (1223) ya no existe; el patrón vigente es `playwright-core` de `~/proyectos/ghl-workflows-mcp/node_modules` + ejecutable `~/Library/Caches/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-mac-arm64/chrome-headless-shell`. Ojo: esperar ≥600ms entre flechazos o el deck ignora la navegación (lock de animación de 420ms).

### IDs críticos
```
GITHUB_REPO     = "synergy-code-3/clases-sinergeticos"
VERCEL_PROD_URL = "https://clases-sinergeticos.vercel.app"
CLASE_NUEVA_URL = "https://clases-sinergeticos.vercel.app/caso-stanley/"
```

### Pendientes — orden de prioridad

#### 🔴 P0 — Bloqueante / para que algo funcione en prod
- David: subir a Skool las 5 lecciones del módulo AI Service (video + miniatura + guía) — arrastrado de la sesión del 14-jul.

#### 🟡 P1 — Esta semana
- Del lado GHL del módulo AI Service: rediseño de los 2 workflows en la subcuenta Prueba Llamada (requiere login de David).

#### 🟢 P2 — Post-launch o cuando haya tiempo
- Si David quiere ajustar algo del deck Stanley al ensayarla: pasar "slide + qué cambiar" y se ajusta puntual.
- Snapshot final de la subcuenta Prueba Llamada + Permanent Link (arrastrado).

### Próximo paso para retomar
David da la clase del martes con el deck de Stanley; cualquier ajuste se pide como "slide + cambio". Los pendientes reales del proyecto siguen siendo los del módulo AI Service (subir a Skool + workflows GHL).

---

## Última sesión — 2026-07-14 — Módulo AI Service EDITADO COMPLETO: 5 videos + miniaturas + guías Skool

**El módulo 4 (AI Service) quedó listo para subir a Skool: 5 videos editados con 3 pasadas de QA (54:07 finales de 76:36 grabados), 5 miniaturas con la estética de la certificación y 5 guías de lección en Google Docs.**

### Lo hecho hoy
- **Pipeline de edición de video construido de cero** (whisper.cpp + VAD silero + ffmpeg + DeepFilterNet, todo local): transcripción, mapeo de módulos, detección de retomas y render. Documentado en memoria (`reference_pipeline_edicion_clases`).
- **Grabación de 77 min separada en 5 módulos** por tema: Introducción (3:42), Base de Conocimiento (3:37), Agente de Chat y Canales (22:25), Agente de Voz (20:21), Números y Central Telefónica (4:02).
- **Cambio de fuente a mitad del proyecto**: la grabación del streaming tenía cámara a ~22fps efectivos (judder) y ruido; David trajo la captura OBS a 59.94fps. Offset medido por correlación de audio (-2.83s, constante, sin drift) → todos los cortes se transfirieron sin re-trabajo. La captura OBS traía 35 min de cola muerta (verificada vacía).
- **Audio**: la grabación sale a -41dB con ruido fuerte de fondo. Cadena final: DeepFilterNet3 (elegido por David en A/B/C vs rnnoise) + ganancia fija +20dB + limitador. NUNCA loudnorm single-pass (es AGC: infla el ruido en las pausas).
- **3 pasadas de QA sobre los videos finales**: (1) cortes quirúrgicos con VAD por palabra, (2) auditoría de las 49 costuras transcribiendo alrededor de cada una, (3) barrido de "frases huérfanas" (receta de David: transcribir el video final y leer buscando saltos de sentido) — cazó 8 errores que las otras dos no vieron, incl. pensamientos abortados corregidos con OTRAS palabras.
- **Módulo 1 (cámara)**: disolvencias de 0.25s en costuras + fade de cierre; los módulos de pantalla van con corte duro.
- **5 miniaturas 1920×1080** con gpt-image-2: L1 generada editando la referencia de la certificación (logo/layout reales), L2-L5 por **inpainting con máscara sobre la L1** para que logo, pill, footer y márgenes queden pixel-idénticos entre las 5 (fix al problema de alineación que reportó David).
- **5 guías de lección en Google Docs** (formato rico, emojis, listas de "lo que hago en pantalla" paso a paso, sacadas 100% del transcript final; la L1 lleva el link de afiliado ×2).
- Entrega final en `~/Desktop/Curso AI Service 13-07/` (videos + Miniaturas/ + Transcripciones/ .srt + CAMBIOS.md con los 31 cortes documentados).

### Decisiones tomadas
- Fuente definitiva = captura OBS 60fps (SIEMPRE preguntar por ella antes de editar la próxima).
- Denoiser: DeepFilterNet3 > rnnoise > afftdn (con truco de 2.5s de warm-up antepuesto y recortado).
- Encoder: videotoolbox 12M CFR para pantalla; x264 solo si la cámara viene ruidosa (con la fuente OBS ya no hizo falta).
- Miniaturas: gpt-image-2 con máscara de inpainting sobre un master = consistencia de layout entre lecciones.
- Guías Skool: estructura 🎯 qué ves → 🧠 conceptos → 🖥️ paso a paso → ⏭️ siguiente lección.

### IDs críticos
```
CARPETA_ENTREGA   = "~/Desktop/Curso AI Service 13-07/"   // videos finales + miniaturas + srt + CAMBIOS.md
FUENTE_FINAL      = "~/Desktop/2026-07-13 10-12-03.mp4"   // OBS 60fps; offset -2.83s vs streaming
PLAN_CORTES       = "scratchpad curso/plan_edicion.py"     // 31 cortes documentados (efímero; copia lógica en CAMBIOS.md)
GUIA_L1           = "1mlr5lJ9fqa0rxTFlOOzeEHK6S_pI1OAcvN5ls49q-xc"  // Google Doc; L2-L5: 1_Xhbb8RGZ..., 1AeJfMGYz..., 1l4ol5Z1A..., 1fl5YDukg...
AFILIADO_GHL      = "https://www.gohighlevel.com/?fp_ref=sinergy-education13"
```

### Pendientes — orden de prioridad

#### 🔴 P0 — Bloqueante / para que algo funcione en prod
- David: subir a Skool las 5 lecciones (video + miniatura + guía) y validar en la plataforma.

#### 🟡 P1 — Esta semana
- Si David detecta algún corte más viendo los videos completos: formato "módulo + minuto:segundo" → se ajusta con el VAD fino y se re-renderiza solo ese módulo (~5 min).
- Del lado GHL del módulo (sesión anterior): decisión de canal Email ya tomada — falta ejecutar el rediseño de los 2 workflows en la subcuenta Prueba Llamada (requiere login de David en GHL).

#### 🟢 P2 — Post-launch o cuando haya tiempo
- Snapshot final de la subcuenta Prueba Llamada + Permanent Link para los alumnos.
- Borrar las grabaciones crudas del Desktop cuando el curso esté publicado (conservar la OBS hasta entonces).

### Próximo paso para retomar
David sube el paquete a Skool; si aparece cualquier defecto de corte, pasarlo como "módulo + timestamp" para cirugía puntual. Siguiente grabación: pedir la captura OBS de una vez y correr el pipeline completo de memoria (`reference_pipeline_edicion_clases`).

---

## Última sesión — 2026-07-14 — Clase nueva "¿n8n o sistema propio?" (construida, iterada en vivo y publicada)

**Clase nueva de 16 slides publicada en `clases-sinergeticos.vercel.app/n8n-o-sistema-propio/` con card en el hub; David la usó EN VIVO durante la sesión y se iteró en caliente (recolor n8n + reencuadre completo del ángulo).**

### Lo hecho hoy
- **Clase "¿n8n o sistema propio?"** (`n8n-o-sistema-propio/index.html`): deck de 16 slides clonando el patrón del hub (nav teclado/swipe/dots, fullscreen con F). Mockups en CSS puro: lienzo de n8n con nodos conectados y ventana de app propia con panel.
- **Recolor completo a paleta n8n** (pedido de David): blanco `#FFFDFB`, naranja `#FF6D2E`/`#D9480F`, negro cálido `#17130F`. Hecho con `sed` de reemplazo de hexes; verificado slide por slide con screenshots headless.
- **Slide de origen de n8n** (slide 3): 2019 Berlín / Jan Oberhauser / nombre "nodemation" (n-8-n) / código abierto auto-hosteable, con gancho personal "el mío corre en mi propio servidor".
- **Reencuadre completo al ángulo de LA RUTA** (iteración clave de David, en vivo): la clase NO compara herramientas ni casos personales — enseña la ruta "la primera versión nace en n8n (prueba barata), y cuando crece se muda a código". Tocó portada, mantra, pregunta que decide (¿probando o ya sabes qué quieres?), divisores, tags de secciones, autodiagnóstico y cierre ("Nace en el lienzo. Crece en código.").
- **Card agregada al hub** (`index.html`, "IA · clase") junto a la de Fable 5.
- **Commiteados los archivos pendientes de `modulo-ai-service/`** de la sesión anterior (29 archivos: PLAN-MODULO.md, plan-modulo.html, img/).
- 4 deploys a prod vía push (auto-deploy), todos verificados con curl contra el contenido nuevo.

### Decisiones tomadas
- **El ángulo de la clase es la ruta, no la comparación**: David rechazó primero "Claude vs n8n" y luego la slide con el caso Lucero/Ali con nombres — el caso se usa como principio general ("La ruta", slide 12) y la historia la cuenta él en vivo.
- Copy pasado por `GUIA-DE-VOZ.md`; datos duros del origen de n8n limitados a hechos verificables (2019, Oberhauser, nodemation).
- Screenshots de verificación con `playwright-core` + chromium headless de caché (los MCP de navegador estaban lockeados por otra sesión) — patrón útil: script `shot.js` en scratchpad.

### IDs críticos
```
GITHUB_REPO     = "synergy-code-3/clases-sinergeticos"
VERCEL_PROD_URL = "https://clases-sinergeticos.vercel.app"
CLASE_NUEVA_URL = "https://clases-sinergeticos.vercel.app/n8n-o-sistema-propio/"
```

### Pendientes — orden de prioridad

#### 🔴 P0 — Bloqueante (heredado del módulo AI Service, sin avance hoy)
- David: iniciar sesión en app.gohighlevel.com → ejecutar el rediseño SMS→Email de los 2 workflows (WF1 `16821c48`, WF2 `ebe9f258` + renombrar a "Seguimiento Leads Sin Visita"), dejar en Draft.

#### 🟡 P1 — Esta semana
- Feedback de David post-clase en vivo: ajustar las slides que se sintieron flojas al presentarla.
- Módulo AI Service: conectar IG demo y arrancar verificación Meta Business + número WhatsApp (bloquean Clase 2).

#### 🟢 P2 — Cuando haya tiempo
- Card de la clase nueva sin tiempo estimado ("IA · clase") — agregar minutos si David quiere.
- Pendientes P2 previos del módulo AI Service y la certificación siguen vigentes (ver sesiones anteriores).

### Próximo paso para retomar
Preguntar a David cómo se sintió la clase en vivo y ajustar el deck con su feedback; si no hay cambios, retomar el P0 del módulo AI Service (login GHL → rediseño de workflows a Email).

---

## Última sesión — 2026-07-13 — Módulo AI Service: calendario conectado a bot y voz; workflows a Email diseñados (bloqueado por login GHL)

**El circuito de agendado quedó cerrado y verificado: el bot de chat Y el agente de voz Valentina agendan citas reales en el calendario "Visitas a Propiedades" (crean contacto + cita en el CRM). Falta ejecutar el rediseño SMS→Email de los 2 workflows — quedó bloqueado porque la sesión de GHL expiró.**

### Lo hecho hoy
- **Verificado en el simulador** que el bot de chat "Coordinadora Visitas Inmobiliarias" ya propone horarios REALES del calendario (respondió "lunes 13 de julio a las 10:00 AM o martes 14 a las 10:00 AM") en vez de inventarlos. La acción Appointment Booking del bot quedó funcional.
- **Acción Appointment Booking agregada al agente de voz Valentina** (builder → New Action → Appointment Booking → calendario "Visitas a Propiedades"), con cancelar, reagendar y auto-confirmación habilitados. Guardada con Save explícito y **verificada tras recargar la página** (persiste). Costo estimado subió a $0.368–$0.454/min (la acción agrega tokens; sigue en V3).
- **tutorial-ghl.html actualizado** (sección 11): bullet nuevo del calendario+booking, fila Clase 2 con el calendario marcado ✅, fila Clase 3 reescrita (Valentina lista con número, "llama y graba"), checklist de David actualizado.
- **NOTAS-GRABACION.md actualizado**: calendario en "lo que ya está listo", tabla de fallas ("bot inventa horarios" ya mitigado), checklist con canal de workflows pendiente de decisión → decidido después: Email.
- **Explicado a David qué datos manda "Trigger a Workflow"**: solo inscribe al CONTACTO (no hay payload de conversación); el patrón es Contact Info / Update Contact Field para escribir datos de la conversación en campos del contacto antes de disparar, y el workflow los lee como merge fields.
- **Diseñado el flujo de negocio completo por estatus post-llamada** (David pidió: sin SMS, con Email, y que cada estatus deje la siguiente acción para cerrar la venta) — ver Pendientes P0 con el diseño detallado.

### Decisiones tomadas
- **Canal de los workflows: Email** (David no usará SMS; WhatsApp queda para cuando esté verificado).
- Cobertura de estatus: agendó → confirmación + recordatorios 24h/1h; canceló → email de reagenda con link del calendario + tarea al asesor (+1 día); no agendó (tag lead-visita) → 2 emails espaciados con check de cita + escalamiento a tarea del asesor. El link de agenda del calendario en los emails cierra el loop (auto-agendarse re-dispara la confirmación).
- El MCP propio ghl-zentraly NO sirve para esta subcuenta (solo tiene conectada la location personal COsMAADseB1N2yw5iqCV) — los workflows se editan por navegador.

### Bugs conocidos
- **Sesión GHL expirada** — el builder de workflows carga en blanco y app.gohighlevel.com muestra login. David debe volver a iniciar sesión para continuar. (El 429 que apareció era solo Sentry/telemetría, inofensivo.)
- Rename del workflow 2 a "Seguimiento Leads Sin Visita" no persiste desde el navegador (3 intentos en sesión anterior) — hacerlo a mano toma 5 segundos.

### IDs críticos
```
SUBCUENTA_PRUEBA   = "2wFlNsFrBbDkYzKSY3Y4"   // Sinergeticos LLC Prueba Llamada
CHAT_AGENT         = "sloDuBfMQyWdQFYVX2dV"   // Coordinadora Visitas Inmobiliarias (Primary, Off)
VOICE_AGENT        = "6a548f82578d660b9ec8b634" // Valentina Visitas Inmobiliarias (V3, Veda Sky)
VOICE_NUMBER       = "+1 (641) 614-5030"       // Answer Calls Directly 24/7
CALENDARIO         = "bhEPeK3TqreEqD5aASH6"    // Visitas a Propiedades, 30 min, slug visitas-propiedades
WORKFLOW_1         = "16821c48-0c23-4c22-903b-824d554620c9" // Confirmacion Visita Inmobiliaria (Draft)
WORKFLOW_2         = "ebe9f258-4ef4-4389-9bf4-e4e2ca2b62ed" // Seguimiento leads (Draft, renombrar)
```

### Pendientes — orden de prioridad

#### 🔴 P0 — Bloqueante / para que algo funcione en prod
- **David: volver a iniciar sesión en app.gohighlevel.com** (la pestaña quedó en el login).
- **Ejecutar el rediseño SMS→Email de los 2 workflows** (diseño ya aprobado por David):
  - WF1 rama agendada: email confirmación inmediato ({{appointment.start_time}}, llevar ID, llegar 5 min antes, links reagendar/cancelar) → recordatorio 24h antes → recordatorio 1h antes.
  - WF1 rama cancelada: email "¿reagendamos?" con link del calendario visitas-propiedades + tarea al asesor (due +1 día) "Llamar a {{contact.name}}: canceló su visita, rescatar".
  - WF2 (tag lead-visita): espera 24h → email 1 con link de agenda → espera 2 días → ¿tiene cita? → email 2 (urgencia suave) → espera 2 días → ¿tiene cita? → tarea al asesor (due +1 día) "Lead frío: llamar manualmente".
  - Renombrar WF2 a "Seguimiento Leads Sin Visita". Dejar ambos en Draft para revisión de David antes de publicar.

#### 🟡 P1 — Esta semana
- Conectar IG demo (cuenta profesional + página FB) — bloquea Clase 2.
- Arrancar verificación Meta Business + número dedicado para WhatsApp ($10/mes) — bloquea Clase 2 y el canal final de los workflows.
- David: publicar los 2 workflows tras revisar el copy de los emails.

#### 🟢 P2 — Post-launch o cuando haya tiempo
- Knowledge Base con datos de la inmobiliaria demo (opcional).
- Snapshot final de la subcuenta (excluir workflows Synthflow) + Permanent Link + probar importándolo en cuenta limpia (verificar si el bot viaja dentro).
- Considerar acción Contact Info en el bot para capturar propiedad de interés/presupuesto en campos personalizados.

### Próximo paso para retomar
David inicia sesión en GHL → abrir workflow 16821c48 (Confirmacion Visita Inmobiliaria) y ejecutar el rediseño a Email según el P0 (copy en español, voz Valentina/Inmobiliaria Prueba), luego workflow ebe9f258.

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
