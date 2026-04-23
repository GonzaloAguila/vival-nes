# Flujo: Commit y push de cambios locales

Runbook para commitear cambios en el working tree y subirlos al remoto.

## Pasos

### 1. Revisar cambios
Correr `git status` y mostrar qué archivos se van a incluir.
Si hay archivos que no deberían commitearse (ej: `.env`, `node_modules`), avisar antes de seguir.

### 2. Stagear
Agregar los archivos relevantes con `git add`.
No uses `git add .` a ciegas — listar explícitamente qué se agrega.

### 3. Commit
Mensaje siguiendo Conventional Commits:
- `feat:` para features nuevas
- `fix:` para bugs
- `docs:` para documentación
- `chore:` para tareas de mantenimiento
- `refactor:` para reestructuración sin cambio funcional

### 4. Push
`git push` a la branch actual.

## Criterios de éxito
- `git status` limpio después del push.
- Commit visible en GitHub.