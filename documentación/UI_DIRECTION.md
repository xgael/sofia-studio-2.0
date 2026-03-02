# Sofia Studio 2.0 — Dirección de UI

## Estructura del Sitio Web

### Mapa del Sitio
```
Sofia Studio 2.0
├── Home (Landing principal)
├── Servicios
├── Nosotros
├── Galería
├── Reservar Cita
└── Contacto
```

> El sitio será **one-page scrollable** con navegación por secciones como experiencia principal, pero cada sección podrá funcionar como ruta individual para SEO y enlaces directos.

---

## Navegación

### Navbar (fija, transparente → sólida al scroll)
- **Logo** — lado izquierdo: "Sofia Studio" en Playfair Display 24px bold, `letter-spacing: 1px`
- **Links de navegación** — centro: DM Sans 14px, `letter-spacing: 0.5px`, color secundario (activo en primario con weight 500)
- **CTA principal** — lado derecho: botón pill dorado "Reservar" (DM Sans 13px, 600)
- **Hamburger menu** — en móvil, se despliega como fullscreen overlay
- **Padding horizontal:** 120px (desktop), reducido en móvil
- **Altura:** 90px

### Comportamiento
- Fondo `$bg-base` por defecto, se vuelve sólida con blur al hacer scroll
- Transición suave de 300ms
- Link activo con weight 500 y color primario
- Al abrir el menú móvil: overlay fullscreen con fondo crema, links centrados, animación staggered de entrada

---

## Secciones por Página

### 1. Hero Section (Text-First)
**Objetivo:** Impacto inmediato con tipografía grande y elegante, imagen debajo del texto

| Elemento | Detalle |
|----------|---------|
| Badge | Pill con borde `$bg-sand`: "ESTÉTICA PROFESIONAL EN MILPA ALTA" (11px uppercase, letter-spacing 3px) |
| Título línea 1 | "Tu espacio de" — Playfair Display 80px, weight 400, regular |
| Título línea 2 | "belleza y bienestar" — Playfair Display 80px, weight 400, **italic** |
| Descripción | DM Sans 18px, color secundario, max-width 560px, centrado, line-height 1.7 |
| CTA primario | "Reserva tu Cita" — botón pill dorado |
| CTA secundario | "Conoce más" — botón outline dorado |
| Imagen | Foto de alta calidad debajo del texto, full-width, border-radius 24px solo arriba |
| Fondo | `$bg-base` (claro, sin overlay) |

**Layout:**
```
┌─────────────────────────────────────────────┐
│  [Navbar]                                   │
│                                             │
│     ┌─ ESTÉTICA PROFESIONAL EN MILPA ALTA ─┐│
│                                             │
│           Tu espacio de                     │
│        belleza y bienestar                  │
│                                             │
│   Descubre un ambiente cálido y profesional │
│                                             │
│   [ Reserva tu Cita ]  [ Conoce más ]      │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │                                     │    │
│  │         IMAGEN HERO                 │    │
│  │      (rounded top corners)          │    │
│  │                                     │    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

---

### 2. Servicios (Fondo: `$bg-base`)
**Objetivo:** Mostrar el catálogo de servicios con cards limpias y minimalistas

| Elemento | Detalle |
|----------|---------|
| Header | Sistema estándar: Tag "SERVICIOS" (dorado) + Título "Nuestros Servicios" (Playfair 48px) |
| Cards | Fondo blanco puro `#FFFFFF`, sin borde, sin sombra en reposo |
| Icono por card | Lucide icon (20-24px, color dorado) dentro de contenedor 48px con fondo `$bg-cream` y border-radius 12px |
| Contenido | Alineado a la izquierda: nombre (Playfair 24px, 500), descripción (DM Sans 15px), precio (DM Sans 16px, 600, dorado) |
| CTA en card | "Agendar" — botón pill dorado dentro de cada card |
| Hover | Sin sombra agresiva, elevación sutil |
| Animación | Cards con scroll-reveal staggered (0.15s entre cada una) |

**Layout:**
```
┌─────────────────────────────────────────────┐
│                 SERVICIOS                   │
│           Nuestros Servicios                │
│       ─────────── ✦ ───────────             │
│                                             │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│  │ [□ icono]    │ │ [□ icono]    │ │ [□ icono]    │
│  │              │ │              │ │              │
│  │ Nombre       │ │ Nombre       │ │ Nombre       │
│  │ Descripción  │ │ Descripción  │ │ Descripción  │
│  │ breve del    │ │ breve del    │ │ breve del    │
│  │ servicio     │ │ servicio     │ │ servicio     │
│  │              │ │              │ │              │
│  │ $150 MXN     │ │ $200 MXN     │ │ $180 MXN     │
│  │ [Agendar]    │ │ [Agendar]    │ │ [Agendar]    │
│  └──────────────┘ └──────────────┘ └──────────────┘
└─────────────────────────────────────────────┘
```

**Grid:** 3 columnas en desktop, 2 en tablet, 1 en móvil
**Card padding:** 40px vertical, 36px horizontal
**Gap entre cards:** 28px

---

### 3. Nosotros (Fondo: `$bg-cream`)
**Objetivo:** Generar confianza y conexión emocional con layout editorial horizontal

| Elemento | Detalle |
|----------|---------|
| Header | Tag "NOSOTROS" (dorado) + Título "Nuestra Historia" (Playfair 42px) |
| Imagen | Full-height en el lado izquierdo (~720px de ancho), border-radius 20px |
| Texto | Historia del negocio, DM Sans 17px, `line-height: 1.7`, lado derecho |
| Stats | 3 contadores en fila horizontal: número en Playfair 36px dorado + label DM Sans 14px |
| Layout | Horizontal 50/50 — imagen ocupa mitad izquierda, contenido mitad derecha |
| Animación | Imagen con parallax sutil, texto fade-in, contadores animados (incremento numérico) |

**Layout:**
```
┌─────────────────────────────────────────────┐
│  (Fondo crema $bg-cream)                    │
│                                             │
│  ┌────────────────────┐  NOSOTROS           │
│  │                    │  Nuestra Historia    │
│  │                    │                     │
│  │    Imagen del      │  Sofia Studio 2.0   │
│  │    estudio         │  nació de la pasión │
│  │    (720px width)   │  por realzar la     │
│  │    (full height)   │  belleza natural... │
│  │                    │                     │
│  │    border-radius   │  ┌──────┐┌──────┐┌──────┐
│  │    20px            │  │ 150+ ││  3+  ││ 5.0  │
│  │                    │  │Client││ Años ││Rating│
│  └────────────────────┘  └──────┘└──────┘└──────┘
│                                             │
└─────────────────────────────────────────────┘
```

**Stats:** Números en Playfair Display 36px, weight 600, color `$brand-gold`
**En móvil:** Imagen arriba (full-width), contenido abajo (stacked vertical)

---

### 4. Galería (Fondo: `$bg-base`)
**Objetivo:** Mostrar el trabajo y el espacio con un grid masonry limpio

| Elemento | Detalle |
|----------|---------|
| Header | Tag "GALERÍA" (dorado) + Título "Nuestro Trabajo" (Playfair 48px) |
| Grid | Masonry layout 3 columnas, gap 16px, sin filtros visibles (minimalista) |
| Imágenes | Border-radius 16px, sin bordes |
| Lightbox | Al hacer click, imagen se abre en overlay con blur de fondo |
| Hover | Zoom sutil (scale 1.03) + overlay oscuro con categoría del trabajo |
| Animación | Imágenes con scroll-reveal staggered, hover zoom |

**Layout:**
```
┌─────────────────────────────────────────────┐
│                 GALERÍA                     │
│            Nuestro Trabajo                  │
│       ─────────── ✦ ───────────             │
│                                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│  │          │ │          │ │          │    │
│  │  Img 1   │ │  Img 2   │ │  Img 3   │    │
│  │  (tall)  │ │ (medium) │ │  (tall)  │    │
│  │          │ ├──────────┤ │          │    │
│  │          │ │          │ │          │    │
│  ├──────────┤ │  Img 4   │ ├──────────┤    │
│  │          │ │  (tall)  │ │          │    │
│  │  Img 5   │ │          │ │  Img 6   │    │
│  │ (medium) │ │          │ │ (medium) │    │
│  └──────────┘ └──────────┘ └──────────┘    │
└─────────────────────────────────────────────┘
```

**Grid:** 3 columnas en desktop, 2 en tablet, 1 en móvil
**Alturas variables:** Masonry con alturas intercaladas (350px / 450px) para dinamismo visual
**Sin filtros:** Diseño minimalista — todo el trabajo se muestra junto

---

### 5. Testimonios (Fondo: `$bg-cream`)
**Objetivo:** Prueba social con cards elegantes y limpias

| Elemento | Detalle |
|----------|---------|
| Header | Tag "TESTIMONIOS" (dorado) + Título "Lo que dicen nuestros clientes" (Playfair 48px) |
| Formato | Grid de 3 cards lado a lado (no carrusel) |
| Card | Fondo blanco `#FFFFFF`, padding 40px, border-radius 20px, sin borde |
| Contenido card | Estrellas (doradas) + texto de reseña (DM Sans 15px, line-height 1.7) + línea divisoria fina + nombre (Playfair 18px) + rol (DM Sans 13px, secundario) |
| Animación | Cards con scroll-reveal staggered |

**Layout:**
```
┌─────────────────────────────────────────────┐
│  (Fondo crema $bg-cream)                    │
│                                             │
│              TESTIMONIOS                    │
│     Lo que dicen nuestros clientes          │
│       ─────────── ✦ ───────────             │
│                                             │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│  │ ★★★★★        │ │ ★★★★★        │ │ ★★★★★        │
│  │              │ │              │ │              │
│  │ «Excelente   │ │ «El mejor    │ │ «Muy profe-  │
│  │  servicio,   │ │  lugar para  │ │  sional y    │
│  │  muy profe-  │ │  consentir-  │ │  el resulta- │
│  │  sional...»  │ │  te...»      │ │  do fue...»  │
│  │              │ │              │ │              │
│  │ ────────     │ │ ────────     │ │ ────────     │
│  │ María García │ │ Ana López    │ │ Laura Rdz.   │
│  │ Cliente      │ │ Cliente      │ │ Cliente      │
│  └──────────────┘ └──────────────┘ └──────────────┘
└─────────────────────────────────────────────┘
```

**Grid:** 3 columnas en desktop, 1 en móvil (stacked vertical)
**En móvil:** Cards en scroll horizontal o stacked

---

### 6. CTA / Reservar (Fondo: `$dark-bg` #2C2825)
**Objetivo:** Sección de contraste dramático que impulse la conversión directa

| Elemento | Detalle |
|----------|---------|
| Fondo | Oscuro `#2C2825` — contraste visual fuerte con las secciones claras |
| Tag | "RESERVAR" — DM Sans 12px, uppercase, letter-spacing 4px, color dorado |
| Título | "Reserva tu experiencia de belleza" — Playfair Display 52px, weight 400, **italic completo**, color `$text-inverse` |
| Descripción | DM Sans 17px, color `$text-secondary` sobre fondo oscuro, max-width 520px |
| CTA primario | "Reservar en Fresha" — botón pill dorado, enlace directo a Fresha |
| CTA secundario | "Contactar por WhatsApp" — botón outline dorado con icono WhatsApp |
| Animación | Fade-in del contenido al scroll, glow pulse sutil en CTA |

**Layout:**
```
┌─────────────────────────────────────────────┐
│  ████████ Fondo oscuro #2C2825 ████████████ │
│                                             │
│                RESERVAR                     │
│                                             │
│       Reserva tu experiencia                │
│          de belleza                          │
│                                             │
│   Agenda tu cita y descubre un ambiente     │
│   cálido y profesional dedicado a ti.       │
│                                             │
│   [ Reservar en Fresha ]                    │
│   [ Contactar por WhatsApp ]                │
│                                             │
└─────────────────────────────────────────────┘
```

**Notas:** Sin formulario propio — se usa Fresha como sistema de reservas y WhatsApp como canal alternativo. Esto simplifica la UX y evita duplicar funcionalidad.

---

### 7. Contacto y Ubicación (Fondo: `$bg-base`)
**Objetivo:** Facilitar el contacto con bloques de info limpios e icónicos

| Elemento | Detalle |
|----------|---------|
| Header | Tag "CONTACTO" (dorado) + Título "Encuéntranos" (Playfair 48px) |
| Bloques de info | Cada bloque tiene: icono Lucide en contenedor cream (48px, radius 12px) + título (DM Sans 16px, 600) + detalle (DM Sans 15px, secundario) |
| Bloques | Dirección, Teléfono, Horario, Redes Sociales — grid de 2 columnas |
| Mapa | Google Maps embed placeholder, border-radius 20px, al lado derecho |
| Layout | Dos columnas: info (izquierda) + mapa (derecha) |
| Animación | Bloques con reveal staggered, mapa fade-in |

**Layout:**
```
┌─────────────────────────────────────────────┐
│                CONTACTO                     │
│             Encuéntranos                    │
│       ─────────── ✦ ───────────             │
│                                             │
│  ┌─ Info Blocks ──────┐  ┌──────────────┐   │
│  │                    │  │              │   │
│  │ [□] Dirección      │  │              │   │
│  │     Sonora Sur 51  │  │              │   │
│  │     Villa Milpa A. │  │  Google Maps │   │
│  │                    │  │  Embed       │   │
│  │ [□] Teléfono       │  │              │   │
│  │     +52 55 4717..  │  │  border-     │   │
│  │                    │  │  radius 20px │   │
│  │ [□] Horario        │  │              │   │
│  │     L-V: 11-7pm    │  │              │   │
│  │     Sáb: 10-5pm    │  └──────────────┘   │
│  │                    │                     │
│  │ [□] Redes          │                     │
│  │     IG · FB        │                     │
│  └────────────────────┘                     │
└─────────────────────────────────────────────┘
```

**En móvil:** Info blocks stacked, mapa full-width debajo

---

### 8. Footer (Fondo: `$dark-bg` #2C2825)
**Objetivo:** Cierre profesional y elegante con estructura editorial

| Elemento | Detalle |
|----------|---------|
| Fondo | `#2C2825` — continuación visual de la sección CTA oscura |
| Logo | "Sofia Studio" — Playfair Display 24px, color `$text-inverse` |
| Tagline | "Tu espacio de belleza y bienestar" — DM Sans 14px, color secundario con opacity 0.7 |
| Columnas de links | 2 columnas: "Navegación" (Inicio, Servicios, Galería, Contacto) y "Contacto" (teléfono, dirección, redes) |
| Estilo de links | DM Sans 14px, color `$text-inverse` con opacity 0.7, hover en dorado |
| Títulos de columna | DM Sans 13px, uppercase, `letter-spacing: 2px`, color dorado |
| Divider | Línea horizontal fina (1px, opacity 0.15, color blanco) |
| Copyright | "© 2025 Sofia Studio 2.0" — DM Sans 13px, opacity 0.5 |
| Crédito | "Hecho con amor en Milpa Alta" — DM Sans 13px, opacity 0.5 |

**Layout:**
```
┌─────────────────────────────────────────────┐
│  ████████ Fondo oscuro #2C2825 ████████████ │
│                                             │
│  Sofia Studio                               │
│  Tu espacio de belleza y bienestar          │
│                                             │
│  NAVEGACIÓN         CONTACTO                │
│  Inicio             +52 55 4717 6847        │
│  Servicios          Sonora Sur 51           │
│  Galería            Villa Milpa Alta        │
│  Contacto           Instagram · Facebook    │
│                                             │
│  ─────────────────────────────────────────  │
│                                             │
│  © 2025 Sofia Studio 2.0                    │
│  Hecho con amor en Milpa Alta               │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Flujo de Usuario Principal

```
Landing → Scroll Hero → Ve Servicios → Se interesa →
→ Revisa Galería → Lee Testimonios → Convencido →
→ Reserva Cita (Fresha/WhatsApp/Formulario) → Conversión ✓
```

### Flujos Secundarios
1. **Desde redes sociales:** Link en bio → Landing → Servicios → Reservar
2. **Búsqueda directa:** Google → Landing → Contacto/Ubicación
3. **Referido:** Link compartido → Servicio específico → Reservar

---

## Jerarquía Visual

### Escala Tipográfica (v2)
| Elemento | Tamaño Desktop | Tamaño Móvil | Peso | Fuente | Detalles |
|----------|----------------|--------------|------|--------|----------|
| Hero título | 80px | 40px | 400 | Playfair Display | Italic en segunda línea, `letter-spacing: -1px` |
| Sección título | 48px | 30px | 400 | Playfair Display | Centrado |
| CTA título (oscuro) | 52px | 32px | 400 | Playfair Display | Italic completo, texto invertido |
| Card título | 24px | 20px | 500 | Playfair Display | `line-height: 1.3` |
| About título | 42px | 28px | 400 | Playfair Display | `line-height: 1.2` |
| Stats números | 36px | 28px | 600 | Playfair Display | Color dorado |
| Tag de sección | 12px | 11px | 500 | DM Sans | Uppercase, `letter-spacing: 4px`, dorado |
| Hero badge | 11px | 10px | 500 | DM Sans | Uppercase, `letter-spacing: 3px` |
| Descripción | 17–18px | 15–16px | 400 | DM Sans | `line-height: 1.6–1.7`, centrado |
| Body | 15–16px | 14–15px | 400 | DM Sans | `line-height: 1.5–1.7` |
| Botón | 13–16px | 13–15px | 600 | DM Sans | `letter-spacing: 0.5px` |
| Nav links | 14px | — | 400–500 | DM Sans | `letter-spacing: 0.5px` |
| Caption/label | 13–14px | 12–13px | 500–600 | DM Sans | Labels, footer links |

### Patrón de Header por Sección
Todas las secciones usan el mismo sistema de encabezado:
1. **Tag** — DM Sans 12px, uppercase, `letter-spacing: 4px`, color `$brand-gold`
2. **Título** — Playfair Display 48px, weight 400, color `$text-primary`
3. **Línea decorativa** — Línea fina dorada con rombo decorativo centrado
4. **Descripción** (opcional) — DM Sans 17px, color `$text-secondary`, max-width 520px, centrado

### Espaciado entre Secciones
- **Desktop:** 120px padding vertical por sección
- **Tablet:** 80px–100px
- **Móvil:** 60px–80px

---

## Componentes Clave (v2)

### Botones
| Variante | Estilo |
|----------|--------|
| Primario | Fondo dorado `#C9A96E`, texto blanco, border-radius 24px, padding 16px 40px, hover con glow |
| Secundario | Outline 1.5px dorado, fondo transparente, border-radius 24px, padding 16px 40px |
| WhatsApp | Outline dorado con icono WhatsApp, border-radius 24px |

### Cards de Servicio (v2 — estilo limpio)
- Fondo: `#FFFFFF` (blanco puro, no blanco roto)
- **Sin borde visible**
- **Sin sombra en estado normal**
- Border-radius: 20px
- Padding: 40px vertical, 36px horizontal
- **Contenido alineado a la izquierda** (no centrado)
- Icono en cuadro con fondo `$bg-cream`, border-radius 12px, tamaño 48px

### Cards de Testimonio
- Fondo: `#FFFFFF`
- Sin borde, sin sombra
- Border-radius: 20px
- Padding: 40px
- Divider fino entre texto y nombre del cliente

### Iconos
- **Set:** Lucide icons
- **Contenedor:** Frame de 44–56px, fondo `$bg-cream`, border-radius 12–16px
- **Tamaño del icono:** 20–24px
- **Color:** `$brand-gold`

### Separadores de Sección
- **Dentro del SectionTitle:** Línea fina dorada con rombo decorativo centrado
- **Entre secciones:** Alternancia de fondos (base → cream → base → dark) en lugar de líneas

---

## Responsive Design

### Breakpoints
| Dispositivo | Ancho |
|-------------|-------|
| Móvil | < 768px |
| Tablet | 768px – 1024px |
| Desktop | 1024px – 1440px |
| Wide | > 1440px (max-width contenedor: 1280px) |

### Adaptaciones Clave (v2)
| Sección | Móvil | Desktop |
|---------|-------|---------|
| Navbar | Hamburger menu fullscreen overlay | Links visibles + CTA pill |
| Hero | Título 40px, CTAs stacked, imagen reducida | Título 80px, CTAs en fila, imagen full-width |
| Servicios | Grid 1 columna | Grid 3 columnas |
| Nosotros | Imagen arriba full-width, texto abajo | Horizontal 50/50 (imagen izq + contenido der) |
| Galería | Grid 2 columnas | Masonry 3 columnas |
| Testimonios | Cards stacked vertical | Grid 3 columnas |
| CTA / Reservar | Botones stacked, padding reducido | Layout centrado con whitespace generoso |
| Contacto | Info blocks stacked, mapa full-width abajo | 2 columnas (info + mapa) |
| Footer | Columnas stacked | Logo + 2 columnas de links |

---

## Accesibilidad
- Contraste mínimo WCAG AA en todos los textos
- Focus states visibles en todos los elementos interactivos
- Alt text descriptivo en todas las imágenes
- Navegación por teclado completa
- Aria labels en elementos interactivos
- Reducir animaciones si el usuario tiene `prefers-reduced-motion` activado
