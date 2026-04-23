# Flujo: Implementar un ticket de Jira

Runbook para resolver un ticket del tablero VIVAL NES DEMO de punta a punta.

## Requisitos previos
- MCPs conectados: `atlassian`, `github`, `vercel`.
- Estar sobre la branch `main` con el working tree limpio.

## Pasos

### 1. Leer el ticket
Traer el ticket de Jira por su key (ej: NES-01) y mostrar:
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

### 4. Implementar
- Crear una branch `feat/<ticket-key>-<slug-corto>` desde `main`.
- Aplicar los cambios respetando el plan.
- No modificar archivos fuera del scope del plan sin avisar.

### 5. Commit y push
- Un solo commit con mensaje: `feat(<TICKET-KEY>): <descripción corta>`.
- Push de la branch al remoto.

### 6. Abrir PR
Usando GitHub MCP:
- Título: `feat(<TICKET-KEY>): <descripción corta>`
- Descripción: incluir link al ticket de Jira y resumen de cambios.
- Target: `main`.
- Dar el link del PR al finalizar.

## Criterios de éxito
- El diff del PR es mínimo y coherente.
- El código respeta las convenciones del `CLAUDE.md`.
- El PR está abierto y listo para review.