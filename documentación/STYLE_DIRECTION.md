# Sofia Studio 2.0 — Dirección de Estilo Visual

## Visión del Cliente
El dueño quiere que su página web se vea:
- **Limpia** — diseño minimalista sin ruido visual
- **Elegante** — sensación premium y sofisticada
- **Con microinteracciones** — movimientos sutiles que hagan destacar la web
- **Con movimiento** — animaciones fluidas que den vida a la experiencia
- **Colores fríos y cálidos** — balance entre tonos neutros cálidos y acentos fríos
- **Ligeramente futurista** — formas orgánicas modernas con toques tecnológicos

---

## Análisis de Referencias Visuales

### Referencia 1 — Sala de Tratamiento
- Estética minimalista y clínica de lujo
- Paredes con textura de mármol en tonos crema/beige
- Mueblería en blanco y nude/tan
- Acentos dorados/brass en grifería
- Iluminación LED lineal empotrada (luz cálida)
- Arte lineal (line art) de rostro femenino con retroiluminación neón
- Sensación: **limpieza, profesionalismo, lujo accesible**

### Referencia 2 — Recepción / Lobby
- Formas orgánicas y escultóricas (paredes curvas, fluidas)
- Colores tierra: arena, beige, madera natural
- Pisos de madera clara
- Paredes con textura de estuco/yeso
- Iluminación ambiental LED en contornos y base de estructuras
- Elementos decorativos: pampas, colgantes metálicos
- Mostrador de recepción cilíndrico minimalista
- Sensación: **futurista orgánico, acogedor, sofisticado**

### Referencia 3 — Espacio Wellness
- Arquitectura orgánica con formas fluidas en techo
- Arcos suaves como elementos arquitectónicos
- Plantas naturales (olivos) en macetas rústicas de barro
- Retroiluminación LED en arcos y formas del techo
- Cortinas ligeras, materiales naturales
- Pisos de madera clara
- Sensación: **serenidad, naturaleza elevada, spa de lujo**

---

## Paleta de Colores Definida

### Fondos
| Nombre | Hex | Uso |
|--------|-----|-----|
| Base | `#FAF7F2` | Fondo principal de la web |
| Crema | `#F0E6D8` | Fondos de cards, secciones alternas |
| Arena | `#D4C5B0` | Fondos de secciones destacadas, separadores visuales |

### Marca / Acentos
| Nombre | Hex | Uso |
|--------|-----|-----|
| Dorado | `#C9A96E` | CTAs primarios, botones, enlaces activos, hover states |
| Brass | `#D4A853` | Iconos, líneas decorativas, detalles premium |
| Nude | `#C4A882` | Elementos secundarios destacados, bordes activos |
| Madera | `#B8956A` | Bordes, separadores finos, acentos terciarios |

### Textos
| Nombre | Hex | Uso |
|--------|-----|-----|
| Primario | `#2C2825` | Títulos, textos principales, máximo contraste |
| Secundario | `#9B9590` | Subtítulos, descripciones, placeholders |
| Invertido | `#FAF7F2` | Texto sobre fondos oscuros (footer, overlays) |

### Efectos
| Nombre | Hex | Uso |
|--------|-----|-----|
| Glow | `#FFD5A0` | Hover glow en botones/cards, microinteracciones |
| Overlay oscuro | `rgba(44, 40, 37, 0.6)` | Overlay del hero, lightbox, menú móvil |
| Overlay claro | `rgba(240, 230, 216, 0.8)` | Glass effect en navbar al scroll |

### Dark Mode
| Token | Light | Dark |
|-------|-------|------|
| Base | `#FAF7F2` | `#1E1B18` |
| Crema | `#F0E6D8` | `#2C2825` |
| Arena | `#D4C5B0` | `#3A3530` |
| Texto primario | `#2C2825` | `#F0E6D8` |
| Texto secundario | `#9B9590` | `#8A8580` |
| Dorado | `#C9A96E` | `#D4B476` |
| Glow | `#FFD5A0` | `#FFD5A0` |

---

## Tipografía Definida

### Fuentes
- **Playfair Display** — Títulos, headings, números destacados (serif elegante)
- **DM Sans** — Body, labels, botones, navegación (sans-serif limpia)

### Escala Tipográfica v2
| Elemento | Tamaño | Peso | Fuente | Detalles |
|----------|--------|------|--------|----------|
| Hero título | 80px | 400 (regular) | Playfair Display | Italic en la segunda línea, `letter-spacing: -1px` |
| Sección título | 48px | 400 | Playfair Display | Una línea, centrado |
| CTA título (oscuro) | 52px | 400 | Playfair Display | Italic completo, texto invertido |
| Card título | 24px | 500 | Playfair Display | `line-height: 1.3` |
| About título | 42px | 400 | Playfair Display | `line-height: 1.2` |
| Stats números | 36px | 600 | Playfair Display | Color dorado |
| Tag de sección | 12px | 500 | DM Sans | Uppercase, `letter-spacing: 4px`, color dorado |
| Hero badge | 11px | 500 | DM Sans | Uppercase, `letter-spacing: 3px` |
| Descripción | 17–18px | 400 | DM Sans | `line-height: 1.6–1.7`, centrado |
| Body | 15–16px | 400 | DM Sans | `line-height: 1.5–1.7` |
| Botón | 13–16px | 600 | DM Sans | `letter-spacing: 0.5px` |
| Nav links | 14px | 400–500 | DM Sans | `letter-spacing: 0.5px` |
| Caption/label | 13–14px | 500–600 | DM Sans | Labels, footer links |

### Patrón de Header por Sección
Todas las secciones usan el mismo sistema de encabezado:
1. **Tag** — DM Sans 12px, uppercase, `letter-spacing: 4px`, color `$brand-gold`
2. **Título** — Playfair Display 48px, weight 400, color `$text-primary`
3. **Descripción** (opcional) — DM Sans 17px, color `$text-secondary`, max-width 520px, centrado

---

## Sistema de Diseño v2

### Filosofía Visual (inspirada en yucca.co.za)
- **Text-first layout** — El contenido tipográfico domina, las imágenes acompañan
- **Whitespace generoso** — Padding de 120px en secciones, gaps amplios
- **Jerarquía clara** — Tag → Título → Descripción como sistema repetible
- **Alternancia de fondos** — Base (#FAF7F2) → Cream (#F0E6D8) → Dark (#2C2825)
- **Minimalismo extremo** — Sin bordes innecesarios, sin sombras agresivas

### Espaciado
| Elemento | Valor |
|----------|-------|
| Padding de sección | 120px vertical, 120px horizontal |
| Gap entre header y contenido | 60–72px |
| Gap interno en cards | 24–28px |
| Padding de cards | 40–48px |
| Gap entre cards en grid | 28px |
| Gap entre columnas | 48–60px |
| Nav padding horizontal | 120px |

### Formas y Radios
| Elemento | Border Radius |
|----------|---------------|
| Botones (pill) | 24px |
| Cards de servicio | 20px |
| Cards de testimonio | 20px |
| Imágenes en galería | 16px |
| Inputs de formulario | 12px |
| Contenedores de iconos | 12–16px |
| Hero image (top corners) | 24px top, 0 bottom |
| Mapa placeholder | 20px |
| Badge/pill del hero | 100px (full round) |

### Cards (v2 — estilo limpio)
- Fondo: `#FFFFFF` (blanco puro, no blanco roto)
- Sin borde visible
- Sin sombra en estado normal
- Padding: 40px vertical, 36px horizontal
- Contenido alineado a la izquierda (no centrado)
- Icono en cuadro con fondo cream y border-radius 16px

### Iconos
- **Set:** Lucide icons
- **Contenedor:** Frame de 44–56px, fondo `$bg-cream`, border-radius 12–16px
- **Tamaño del icono:** 20–24px
- **Color:** `$brand-gold`

### Fondos por Sección
| Sección | Fondo |
|---------|-------|
| Navbar | `$bg-base` (transparente al inicio) |
| Hero | `$bg-base` |
| Servicios | `$bg-base` |
| About | `$bg-cream` |
| Galería | `$bg-base` |
| Testimonios | `$bg-cream` |
| CTA | `$dark-bg` (#2C2825) |
| Contacto | `$bg-base` |
| Footer | `$dark-bg` (#2C2825) |

---

## Microinteracciones y Movimiento

### Principios de Animación
- Movimientos **suaves y fluidos** (ease-out, cubic-bezier)
- Duraciones entre **300ms–600ms** (ni muy rápido ni lento)
- Transiciones que transmitan **calma y elegancia**

### Interacciones Sugeridas
1. **Scroll reveal** — Elementos que aparecen suavemente al hacer scroll (fade-in + translate)
2. **Hover glow** — Botones y cards con efecto de brillo cálido al pasar el cursor
3. **Parallax sutil** — Capas de fondo que se mueven a diferente velocidad
4. **Cursor personalizado** — Cursor con halo suave o forma orgánica
5. **Text reveal** — Títulos que se revelan letra por letra o palabra por palabra
6. **Image zoom suave** — Imágenes que hacen zoom sutil al hacer hover
7. **Line art animado** — Ilustraciones de línea que se dibujan al entrar en viewport
8. **Smooth page transitions** — Transiciones suaves entre secciones o páginas
9. **Floating elements** — Elementos decorativos con movimiento flotante sutil
10. **Loading animation** — Pantalla de carga con el logo y animación orgánica

---

## Mood Board Keywords
`minimal luxe` · `organic modern` · `warm futurism` · `soft glow` · `beauty clinic aesthetic` · `earth tones` · `curved forms` · `serene elegance` · `text-first` · `editorial beauty`

---

## Inspiración Web
- **yucca.co.za** — Referencia principal para la v2. Text-first hero, whitespace generoso, tipografía large, pill buttons, alternancia de secciones claras/oscuras, estilo editorial limpio.
- **Espacios físicos del estudio** → Traducidos al digital: mármol/estuco como fondos crema sutiles, iluminación LED como glow effects, formas orgánicas como border-radius generosos.

### Principios de la v2
1. La **tipografía** es el elemento protagonista, no las imágenes
2. El **whitespace** transmite lujo y calma
3. Las **secciones oscuras** (CTA, footer) crean contraste dramático
4. Los **italic** en Playfair Display añaden elegancia editorial
5. Los **tags uppercase** con letter-spacing crean ritmo visual
6. Las **imágenes** acompañan al texto, nunca lo dominan
