# Cómo hacer que la IA analice tus ventas y multipliques resultados

Guion de clase. Estructura: instalar el grabador → sacar el transcript → los 5 prompts.

---

## Parte 1 — Instalar Fathom

**Sitio:** `fathom.ai` (el viejo `fathom.video` redirige aquí)

Pasos en vivo:
1. Entrar a fathom.ai → **Sign up** con la cuenta de Google/Microsoft del correo de trabajo.
2. **Conectar el calendario** — es el paso que hace todo lo demás automático. Fathom lee las juntas del calendario y se mete solo a las que tienen link.
3. Elegir modo de captura: **con bot** (aparece como participante en la llamada) o **bot-free** (beta, graba sin mostrarse). Con bot es lo honesto y lo que evita broncas legales.
4. Probar con una llamada de 2 minutos ahí mismo.

**Plataformas:** Zoom, Google Meet, Microsoft Teams.

**Plan gratis (verificado en fathom.ai/pricing):**
- Grabaciones y transcripciones ilimitadas
- Resúmenes de IA al instante
- Clips, playlists y búsqueda dentro de las llamadas

**Lo que cuesta (Premium $20/mes, $16 anual):** resúmenes personalizables, action items automáticos y el asistente conversacional. Para esta clase **no hace falta pagar**.

> Aviso legal que sí conviene decir en la clase: avisar que se graba. En México, con que una de las partes lo sepa basta, pero avisar es lo que no te quema con el prospecto.

---

## Parte 2 — La llamada de ejemplo

```
https://fathom.video/share/Dwc4C-m1qqeA67ivzrtbFjRG1cxH41tB
```

⚠️ Verificar que abra antes de la clase — al armar este guion devolvía error.

**Cómo sacar el transcript** (esto es lo que se pega en Claude):
- Dentro de la llamada en Fathom, panel derecho → pestaña **Transcript** → botón de copiar / **Copy transcript**.
- Alternativa: seleccionar todo el panel y copiar a mano.
- Alternativa 3 si el share link no da copiar: descargar el `.srt` / `.txt` desde la llamada propia.

El transcript se pega tal cual en Claude. **No se usa MCP en esta clase** — copiar y pegar, a propósito: quien no tiene setup técnico también puede hacerlo hoy mismo.

---

## Parte 3 — Los 5 prompts

Van en escalera: del diagnóstico de una llamada al sistema que multiplica.

### Prompt 1 — Diagnóstico de la llamada

```
Eres un analista de ventas consultivas. Te voy a pasar el transcript
de una llamada de ventas real.

Analízala y dame:

1. QUÉ VENDÍA y a quién (en una línea)
2. LÍNEA DE TIEMPO de la llamada en bloques (apertura, diagnóstico,
   presentación, precio, cierre) con el minuto aproximado donde
   empieza cada uno y cuánto duró
3. RATIO DE HABLA: aproximadamente qué % habló el vendedor y qué %
   el prospecto
4. LAS 3 PREGUNTAS MÁS PODEROSAS que hizo el vendedor, citadas textual
5. LAS 3 PREGUNTAS QUE DEBIÓ HACER Y NO HIZO, y en qué momento exacto
   cabían
6. TEMPERATURA DEL PROSPECTO al inicio y al final (frío/tibio/caliente),
   justificada con una cita

Regla: todo lo que afirmes tiene que estar respaldado con una cita
textual del transcript. Si algo no está en el transcript, di
"no aparece en la llamada". No inventes.

TRANSCRIPT:
[pegar aquí]
```

> Punto de enseñanza: el ratio de habla es el número que más duele. Si el vendedor habló más del 50%, no diagnosticó — presentó.

---

### Prompt 2 — Inventario de objeciones

```
Del mismo transcript, extrae TODAS las objeciones, dudas y frenos
que expresó el prospecto — incluyendo los suaves y disfrazados
("déjame pensarlo", "lo tengo que ver con mi socio", "está
interesante", silencios largos después del precio).

Para cada una, dame en tabla:

| Objeción (cita textual) | Minuto | Qué hay debajo realmente | Cómo respondió el vendedor | Qué tan bien la resolvió (1-5) | Mejor respuesta posible |

En "qué hay debajo": distingue si es dinero, tiempo, confianza,
prioridad o autoridad para decidir. Son cinco cosas distintas y se
responden distinto.

En "mejor respuesta": escríbela como se diría en voz alta, en el
tono de este vendedor. Máximo 3 líneas. Nada de guion robótico.
```

---

### Prompt 3 — La autopsia: dónde se perdió

```
Del mismo transcript, encuentra EL MOMENTO EXACTO donde la llamada
cambió de dirección — el punto donde el prospecto se enfrió, se
cerró o dejó de ser el que empujaba.

Dame:
- El minuto y la cita textual del momento
- Qué venía pasando justo antes
- Qué hizo o dijo el vendedor que lo provocó
- Las señales que el vendedor no vio en ese momento
- Los 3 caminos que tenía disponibles ahí y qué habría pasado
  con cada uno
- Reescribe esos 60 segundos completos: diálogo línea por línea,
  como debió haber sido

Si la llamada nunca se enfrió, dilo y en su lugar señala el momento
donde se ganó, con el mismo nivel de detalle.
```

> Este es el prompt que hace que la sala se calle. Todos reconocen su propio momento.

---

### Prompt 4 — El salto: patrones entre muchas llamadas

Aquí está el "multiplicas resultados". Una llamada te da una lección; veinte te dan un sistema.

```
Te voy a pasar los transcripts de [N] llamadas de ventas. Algunas
cerraron y otras no — te indico cuál es cuál.

No analices una por una. Busca el PATRÓN:

1. ¿Qué hacen DIFERENTE las llamadas que cerraron vs las que no?
   Sé específico y concreto: no me digas "hubo más rapport",
   dime qué se dijo, en qué minuto y con qué palabras.
2. ¿Cuáles son las 5 objeciones que más se repiten, ordenadas por
   frecuencia? ¿En qué minuto suelen aparecer?
3. ¿Hay un patrón de duración, de ratio de habla o de orden de
   los temas que separe a las que cierran?
4. ¿Qué pregunta aparece en las llamadas ganadas y NO aparece en
   las perdidas?
5. ¿Qué frase o momento aparece en las perdidas y NO en las ganadas?
   (esto suele ser oro: es el error sistemático)

Termina con: LAS 3 COSAS que este vendedor debe cambiar mañana,
ordenadas por impacto, cada una con la evidencia que la sostiene.

LLAMADAS:
--- LLAMADA 1 — CERRÓ ---
[transcript]
--- LLAMADA 2 — NO CERRÓ ---
[transcript]
```

> Regla práctica: con 5 llamadas ya salen patrones. Con 15-20 salen patrones en los que puedes apostar dinero.

---

### Prompt 5 — Convertir el análisis en activos

El análisis que no se convierte en material no sirve. Este prompt cierra el ciclo.

```
Con base en todo el análisis anterior, construye estos cuatro
entregables. Usa las palabras reales de los prospectos siempre que
puedas — quiero que suene a cómo hablan ellos, no a cómo hablo yo.

1. GUION DE PREGUNTAS DE DIAGNÓSTICO
   Las 10 preguntas que este vendedor debería hacer siempre, en
   orden, con una nota de para qué sirve cada una.

2. MANUAL DE OBJECIONES
   Las objeciones reales que aparecieron, cada una con: qué
   significa de verdad, la respuesta corta (2 líneas) y la pregunta
   que la devuelve.

3. LISTA DE VERIFICACIÓN PRE-CIERRE
   Las condiciones que deben cumplirse ANTES de decir el precio,
   sacadas de lo que pasó en las llamadas que cerraron.

4. MATERIA PRIMA DE MARKETING
   - Las 10 frases textuales de los prospectos que sirven como copy
   - Los 3 dolores más repetidos, en sus palabras
   - Las 3 objeciones que conviene contestar en el anuncio o la
     landing, para que ya no lleguen a la llamada

Nada inventado: todo debe salir de los transcripts.
```

> El punto 4 es el que casi nadie ve: el transcript de ventas es la mejor fuente de copy que existe. Ahí está tu mercado hablando solo.

---

## Cierre de la clase

La idea de una línea:

> Ya tienes las llamadas. Lo que no tenías era quien las escuchara todas.

El vendedor promedio hace 20 llamadas al mes y no vuelve a oír ninguna. El que las hace analizar aprende de las 20 — y de las 20 del mes pasado.

**Tarea para la sala:** instalar Fathom hoy, grabar las próximas 5 llamadas, y el lunes correr el Prompt 4.
