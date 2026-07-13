# Notas rápidas de grabación — Módulo AI Service
*(para tener abiertas en segunda pantalla; complemento de tutorial-ghl.html)*

## ANTES DE APRETAR REC

**Lo que ya está listo (no montar nada en vivo):**
- Bot chat **"Coordinadora Visitas Inmobiliarias"** en Prueba Llamada — probado, en Off
- Voz **"Valentina Visitas Inmobiliarias"** en **+1 (641) 614-5030** — V3, Veda Sky, anti-cuelgue ajustado (30s silencio, 2 recordatorios)
- Workflows **"Confirmacion Visita Inmobiliaria"** y **"Seguimiento de citas lead-visita"** en Draft
- Calendario **"Visitas a Propiedades"** (30 min, lun-sab) conectado a la acción **Appointment Booking** del bot de chat Y del agente de voz — el bot ya propone horarios REALES y al agendar crea el contacto + la cita en el CRM
- Meta-prompt del alumno → sección 5 del tutorial

**Setup de pantalla:**
- Grabar a 1920×1080; browser en pantalla completa
- Cerrar el banner naranja "Summer of AI" (o mejor: usarlo como gancho y LUEGO cerrarlo)
- Mac en No Molestar; cerrar Slack/WhatsApp desktop
- ⚠️ **NUNCA en cámara:** la lista de Sub-Accounts de la agencia (nombres de clientes reales), el Affiliate Portal con ganancias, Settings de agencia con SIDs de Twilio. Trabajar siempre DENTRO de la subcuenta Prueba Llamada.

**Calentamiento (10 min antes):**
- Llamar a Valentina una vez completa (el primer arranque a veces tarda más)
- Probar el simulador del bot de chat con 1 mensaje
- Micrófono del navegador ya autorizado (para Web Call)
- Si vas a hacer muchas tomas de llamada: activar el trial de 30 días de AI en la subcuenta (V3 en pay-per-use = ~$0.27/min por toma)

## MOMENTOS WOW — CÓMO EJECUTARLOS

**Clase 1 (simulador):**
- Mensaje trampa: *"me agendaron visita mañana a las 5 pero ya no puedo ir"*
- Al responder, NARRAR la trazabilidad: "ofreció dos horarios → esa es MI regla línea 3; no dio precios → regla 5; máximo 25 palabras → regla 1". Ese desglose ES la clase.
- El ciclo completo brief→Claude→pegar→probar debe verse en menos de 10 minutos de video.

**Clase 3 (llamada en vivo):**
- Llamar en altavoz, meter UNA objeción real ("¿y cuánto cuesta el depa?") → Valentina la esquiva hacia el asesor = regla cumplida en vivo.
- Si Valentina tarda una fracción en responder: narrar "está pensando con el modelo de máxima calidad" — el silencio se vuelve feature.
- Pro-tip en cámara: abrir Call Settings y mostrar el ajuste anti-cuelgue (defaults: colgaba a los 15s de silencio). Historia real: "a mí me colgó la primera vez".
- Cerrar la objeción "no quiero un robot" con el modo **Use as Backup** en Deploy.

**Clase 4 (Workflow AI):**
- Escribir la descripción en español en "Build using AI" en cámara... y CORTAR la edición (puede pensar 1-5 min). Retomar con el canvas ya generado.
- Mostrar el aviso "Complete these steps before executing" como guía de GHL: te dice qué falta antes de publicar.

## SI ALGO FALLA EN VIVO

| Falla | Salvada |
|---|---|
| Bot del simulador tarda 5-10s | Narrar qué está pasando ("consulta el prompt + knowledge base") |
| Bot inventa horarios de cita | Ya no debería pasar: el calendario "Visitas a Propiedades" está conectado a Appointment Booking — si pasa, revisar que la acción siga activa en Bot Goals |
| Llamada se corta | Ya mitigado (30s) — si pasa, es material: "esto se configura en Call Settings" |
| Workflow AI se atora | Cortar toma; el borrador se guarda solo |
| Nombre de bot rechazado | Caracteres especiales (guion largo, comillas curvas) — mencionarlo como tip |

## CIFRAS VERIFICADAS PARA DECIR EN CÁMARA

- 62% de llamadas after-hours se pierden; 80% de leads se pierden en los primeros 5 min (pantalla Getting Started de GHL)
- Bot de chat responde en <3 segundos, 24/7
- Voz con IA: desde $0.035/min (Turbo) hasta $0.17/min (V3) de síntesis — visible EN PANTALLA en el builder. JustCall: $0.99/min
- Planes: pay-per-use (centavos) → AI Employee Growth $50 (1,000 respuestas + 100 min) → Unlimited $97 (chat ilimitado + voz entrante ilimitada; salientes aparte)
- Summer of AI: 30 días de agentes gratis + 5 herramientas gratis hasta 31 ago 2026
- 186 voces en español, 1,000+ en total

## PENDIENTES ANTES DE GRABAR CLASE 2
- [ ] IG demo conectado (cuenta profesional + página FB)
- [ ] WhatsApp: verificación de Meta (¿ya corrió el trámite?) + $10/mes
- [x] Calendario con disponibilidad conectado a la acción Appointment Booking (bot de chat + agente de voz, verificado con horarios reales)
- [ ] Copy de los mensajes de los 2 workflows (David no usará SMS — decidir canal: ¿Email ahora o WhatsApp cuando esté conectado?) + due date de la tarea
- [ ] Snapshot final + Permanent Link (después de grabar, con todo pulido)
