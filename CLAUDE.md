# VIVAL-NES

Tienda online de productos NES y Super Nintendo: consolas, juegos y accesorios.

## Stack
- Astro `^6.1.8` (sin integraciones; `astro.config.mjs` exporta `defineConfig({})` vacío — salida estática por defecto)
- TypeScript `^5.9.3` con `astro/tsconfigs/strict`
- `@astrojs/check` `^0.9.8`
- Node `>=22.12.0` (campo `engines` en `package.json`)
- pnpm como package manager (hay `pnpm-lock.yaml`)
- Deploy: Vercel (build estático; proyecto linkeado en `.vercel/project.json`)

## Estructura
```
vival-nes/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   └── products/
│       ├── nes.png
│       ├── supernes.png
│       ├── super-mario-bros-3-cartucho-nes.jpg
│       ├── zelda.jpg
│       ├── metroid.webp
│       └── donkeykong.webp
└── src/
    ├── components/
    │   ├── Header.astro
    │   ├── Footer.astro
    │   └── ProductCard.astro
    ├── data/
    │   └── products.ts
    ├── layouts/
    │   └── Layout.astro
    ├── pages/
    │   └── index.astro
    └── styles/
        └── global.css
```

## Convenciones
- **Nombres de archivo**: componentes y layouts en `PascalCase.astro` (`Header.astro`, `ProductCard.astro`, `Layout.astro`). Páginas en `kebab-case.astro` siguiendo el routing de Astro (hoy sólo `index.astro`). Datos y utilidades en `camelCase.ts`.
- **Idioma**: identificadores, variables, clases CSS y comentarios en **español** (`enlaces`, `formatoARS`, `precioFormateado`, `catalogo`, `.btn-carrito`, `.card-img-wrapper`). Los nombres de tipos TS quedan en inglés (`Product`, `Category`, `Props`).
- **Estructura de un `.astro`**:
  1. Frontmatter con imports, `interface Props` (cuando recibe props), destructuring de `Astro.props` y helpers puntuales.
  2. Markup semántico (`<article>`, `<section>`, `<header>`, `<footer>`).
  3. Bloque `<style>` **scoped** (sin atributo `is:global`).
- **Props tipadas**: siempre con `interface Props { ... }` en el frontmatter (ver `ProductCard.astro:4-6`, `Layout.astro:6-8`).
- **Estilos**: cada componente trae su propio `<style>` scoped. Lo único global vive en `src/styles/global.css`, importado una sola vez desde `Layout.astro`. No se importa `global.css` en ningún otro archivo.
- **Tokens**: colores, tipografías y decoradores (borde, sombra) siempre vía CSS custom properties (`var(--color-primario)`, `var(--borde-grueso)`, `var(--sombra-dura)`). Nunca se hardcodean valores hex ni pixeles de sombra en los componentes.
- **Convención BEM-lite** para modificadores: `badge--consola`, `badge--juego`, `badge--accesorio` (ver `ProductCard.astro:82-95`).
- **Data layer**: `src/data/products.ts` exporta el tipo `Product`, la unión `Category` y el array `products`. Los componentes importan el tipo con `import type` y el array por nombre.
- **Precios**: formateados a ARS con `Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 })` (el formatting vive en el componente que renderiza, no en el dato).
- **Imágenes**: assets estáticos en `public/products/` referenciados con path absoluto (`/products/nes.png`). Para productos sin foto real se usa el helper `placeholder(label)` de `products.ts`, que genera un `placehold.co` con los colores de la marca.
- **Imágenes en el DOM**: `<img>` con `alt`, `loading="lazy"`, `width` y `height` explícitos (ver `ProductCard.astro:22`).

## Paleta y tipografía
Definidas en `src/styles/global.css`:

**Colores**
- `--color-primario`: `#D62828` (rojo Nintendo)
- `--color-fondo`: `#2B2B2B`
- `--color-texto`: `#E5E5E5`
- `--color-acento`: `#FFFFFF`
- `--color-borde`: `#000000`

**Tipografía** (cargada desde Google Fonts)
- `--font-titulo`: `'Press Start 2P', system-ui, sans-serif` → usado en `h1-h6`, botones, logo, badges.
- `--font-cuerpo`: `'VT323', ui-monospace, monospace` → usado en body y precios.

**Decoradores pixel**
- `--sombra-dura`: `4px 4px 0 var(--color-borde)`
- `--borde-grueso`: `3px solid var(--color-borde)`

**Reglas base**
- `html` con `font-size: 20px`, `image-rendering: pixelated`, suavizado de fuente desactivado (`-webkit-font-smoothing: none`).
- Reset básico con `box-sizing: border-box` y `margin/padding: 0`.

## Comandos
- `pnpm dev` — dev server
- `pnpm build` — build producción
- `pnpm preview` — preview del build

## Cómo agregar un producto nuevo
1. Si tenés imagen real, ponela en `public/products/` (formatos usados: `.png`, `.jpg`, `.webp`). El path público queda `/products/<archivo>`.
2. Abrí `src/data/products.ts` y agregá un objeto al array `products` respetando el tipo `Product`:
   ```ts
   {
     id: 'kebab-case-unico',          // string, no se repite con otros
     name: 'Nombre visible',          // string, cómo aparece en la card
     category: 'consola',             // 'consola' | 'juego' | 'accesorio' (unión estricta)
     price: 42000,                    // number, en pesos argentinos, entero (sin decimales)
     stock: 5,                        // number, unidades
     image: '/products/mi-foto.png',  // path absoluto dentro de public/
   }
   ```
3. Si todavía no hay foto, usá el helper ya importado en el archivo:
   ```ts
   image: placeholder('Etiqueta corta'),
   ```
4. No hace falta tocar nada más: `src/pages/index.astro` itera `products` y renderiza un `<ProductCard>` por cada uno. El badge de categoría se estila solo a partir de `product.category`.
5. Si agregás un nuevo valor de `category`, actualizá también la unión `Category` en `products.ts` **y** agregá la regla `.badge--<nueva-categoria>` en `ProductCard.astro` para que tenga color propio.

## Reglas para el agente
- No uses `any` en TypeScript.
- No agregues Tailwind ni librerías de componentes UI.
- CSS scoped en cada componente `.astro`; globales solo en `src/styles/global.css`.
- Mantené la estética pixel: bordes duros, sin border-radius > 2px, sombras sólidas estilo `4px 4px 0 #000`.
- Todos los textos de UI en español.
- Antes de modificar un componente existente, leelo completo para respetar las convenciones aplicadas.
