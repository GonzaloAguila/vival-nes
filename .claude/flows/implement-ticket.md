# Flujo: Implementar un ticket de Jira

Runbook para resolver un ticket del tablero VIVAL NES DEMO de punta a punta.

## Requisitos previos
- MCPs conectados: `atlassian`, `github`, `vercel`.
- Estar sobre la branch `main` con el working tree limpio.
- El proyecto en Jira se llama "VIVAL NES DEMO" y su key es `KAN` (los tickets son KAN-1, KAN-2, KAN-3, etc).

## Pasos

### 1. Leer el ticket
Traer el ticket de Jira por su key (ej: KAN-2) y mostrar:
- Resumen
- Descripción completa
- Criterios de aceptación

### 2. Entender el proyecto
Antes de tocar código, leer:
- `CLAUDE.md` del repo (convenciones y reglas).
- Los archivos que se van a modificar (lectura completa, no parcial).

### 3. Proponer un plan
Escribir un plan breve (3-6 pasos) que:
- Liste los archivos a crear o modificar.
- Mencione qué convenciones del `CLAUDE.md` aplican.
- Identifique riesgos o dudas.
**No ejecutar hasta tener confirmación del usuario.**

### 4. Implementar en branch local
- Crear una branch `feat/<ticket-key>-<slug-corto>` desde `main`.
- Aplicar los cambios respetando el plan.
- No modificar archivos fuera del scope del plan sin avisar.
- Correr `pnpm astro check` para validar que no hay errores de tipos.
- **No commitear todavía.**

### 5. Pedir review visual del usuario
- Avisar al usuario que los cambios están aplicados en el working tree.
- Sugerir correr `pnpm dev` para verificar visualmente el resultado en `localhost:4321`.
- **Esperar confirmación explícita del usuario antes de seguir.** Si el usuario pide ajustes, volver al paso 4 y re-validar.

### 6. Commit y push
Una vez que el usuario confirmó el resultado visual:
- Un solo commit con mensaje: `feat(<TICKET-KEY>): <descripción corta>`.
- Push de la branch al remoto.

### 7. Abrir PR
Usando GitHub MCP:
- Título: `feat(<TICKET-KEY>): <descripción corta>`
- Descripción: incluir link al ticket de Jira y resumen de cambios.
- Target: `main`.
- Dar el link del PR al finalizar.

## Criterios de éxito
- El diff del PR es mínimo y coherente.
- El código respeta las convenciones del `CLAUDE.md`.
- El usuario confirmó visualmente el resultado antes del commit.
- El PR está abierto y listo para review.