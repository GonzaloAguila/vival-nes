# Flujo: Cerrar el loop en Jira

Runbook para actualizar un ticket de Jira con el resultado del trabajo.

## Requisitos previos
- MCP `atlassian` conectado.
- PR abierto y URL disponible.
- (Opcional) URL de preview deploy disponible.

## Pasos

### 1. Armar el comentario
Formato sugerido:   
PR abierto: <url-del-pr>
Preview: <url-del-preview>
Estado: listo para review.

### 2. Agregar el comentario al ticket
Usando Atlassian MCP, agregar el comentario al ticket indicado (ej: NES-01).

### 3. Mover el ticket de estado
Si es posible, mover el ticket a "En curso" (o el estado equivalente del tablero).

## Criterios de éxito
- Comentario visible en el ticket de Jira.
- Estado actualizado.
- El autor del comentario es el usuario autenticado vía MCP.

Paso 3 — Commitear

git add .gitignore .claude/flows/
git commit -m "docs: add flow runbooks for Claude Code agent"
git push