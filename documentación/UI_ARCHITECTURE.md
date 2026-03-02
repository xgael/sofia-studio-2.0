# Sofia Studio 2.0 — Arquitectura UI

## Tech Stack

| Categoría | Tecnología | Justificación |
|-----------|-----------|---------------|
| Framework | **React 18+** (via Vite) | Componentes reutilizables, ecosistema maduro, excelente DX |
| Bundler | **Vite** | Build ultrarrápido, HMR instantáneo, configuración mínima |
| Animaciones | **GSAP** (GreenSock) | Librería de animación profesional, ScrollTrigger, timeline control, rendimiento GPU |
| Estilos | **CSS Modules** + **Variables CSS** | Scoped styles por componente, variables globales para la paleta y tipografía |
| Routing | **React Router v6** | Navegación SPA con scroll suave entre secciones |
| Hosting | **Vercel** | Deploy automático desde Git, CDN global, SSL gratis, preview deploys |
| Package Manager | **npm** o **pnpm** | Gestión de dependencias |

---

## Dependencias Principales

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "react-router-dom": "^6.x",
    "gsap": "^3.x"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.x",
    "vite": "^5.x"
  }
}
```

### Plugins GSAP a Utilizar
| Plugin | Uso |
|--------|-----|
| **ScrollTrigger** | Animaciones activadas por scroll (reveal, parallax, pin) |
| **TextPlugin** | Animaciones de texto (typewriter, text-reveal) |
| **ScrollSmoother** | Smooth scrolling nativo con GSAP (opcional) |
| **SplitText** | Separar texto en chars/words/lines para animar individualmente (Club GreenSock) |

> **Nota:** ScrollTrigger y TextPlugin son gratuitos. SplitText y ScrollSmoother requieren licencia GreenSock Club. Evaluar si son necesarios o si se pueden replicar con soluciones custom.

---

## Estructura de Carpetas

```
sofia-studio-2.0/
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg              # Open Graph para redes sociales
│   └── assets/
│       ├── images/               # Imágenes optimizadas del negocio
│       │   ├── hero/
│       │   ├── gallery/
│       │   ├── team/
│       │   └── services/
│       ├── videos/               # Video hero loop (si aplica)
│       ├── svg/                  # Ilustraciones line-art, decoraciones
│       └── fonts/                # Fuentes locales (si no se usa Google Fonts)
│
├── src/
│   ├── main.jsx                  # Entry point
│   ├── App.jsx                   # Layout principal + Router
│   ├── App.css                   # Estilos globales mínimos
│   │
│   ├── styles/
│   │   ├── variables.css         # Variables CSS globales (colores, tipografía, spacing)
│   │   ├── reset.css             # Reset/normalize
│   │   ├── typography.css        # Clases tipográficas globales
│   │   └── animations.css        # Keyframes reutilizables
│   │
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.module.css
│   │   │   └── MobileMenu.jsx
│   │   │
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.module.css
│   │   │
│   │   ├── Services/
│   │   │   ├── Services.jsx
│   │   │   ├── Services.module.css
│   │   │   └── ServiceCard.jsx
│   │   │
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   ├── About.module.css
│   │   │   └── Counter.jsx
│   │   │
│   │   ├── Gallery/
│   │   │   ├── Gallery.jsx
│   │   │   ├── Gallery.module.css
│   │   │   └── Lightbox.jsx
│   │   │
│   │   ├── Testimonials/
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Testimonials.module.css
│   │   │   └── TestimonialCard.jsx
│   │   │
│   │   ├── CTA/
│   │   │   ├── CTA.jsx
│   │   │   └── CTA.module.css
│   │   │
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.module.css
│   │   │
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.css
│   │   │
│   │   └── ui/                   # Componentes reutilizables
│   │       ├── Button.jsx
│   │       ├── Button.module.css
│   │       ├── SectionTitle.jsx
│   │       ├── SectionDivider.jsx
│   │       ├── ScrollIndicator.jsx
│   │       └── ThemeToggle.jsx    # Botón switch dark/light mode
│   │
│   ├── hooks/
│   │   ├── useGSAP.js            # Hook custom para inicializar GSAP en componentes
│   │   ├── useScrollTrigger.js   # Hook para ScrollTrigger reutilizable
│   │   ├── useInView.js          # Detectar si un elemento está en viewport
│   │   ├── useMediaQuery.js      # Breakpoints reactivos
│   │   └── useTheme.js           # Toggle dark/light mode + persistencia en localStorage
│   │
│   ├── animations/
│   │   ├── gsapConfig.js         # Configuración global de GSAP + registro de plugins
│   │   ├── scrollAnimations.js   # Funciones de animación por scroll reutilizables
│   │   ├── textAnimations.js     # Animaciones de texto (reveal, split, typewriter)
│   │   ├── hoverAnimations.js    # Efectos hover (glow, elevación, zoom)
│   │   └── pageTransitions.js    # Transiciones entre secciones
│   │
│   ├── data/                     # Datos dummy JSON (simulan respuesta de Supabase)
│   │   ├── services.json         # Servicios: nombre, descripción, precio, icono, categoría
│   │   ├── testimonials.json     # Testimonios: nombre, texto, rating, foto
│   │   ├── gallery.json          # Galería: url imagen, categoría, alt text
│   │   ├── contact.json          # Datos de contacto, horarios, redes sociales
│   │   ├── hero.json             # Contenido del hero: título, subtítulo, CTAs
│   │   └── about.json            # Sobre nosotros: historia, stats, equipo
│   │
│   ├── services/                 # Capa de acceso a datos (abstracción Supabase-ready)
│   │   ├── dataService.js        # Funciones que leen los JSON (futuro: queries a Supabase)
│   │   └── supabaseClient.js     # Placeholder del cliente Supabase (futuro)
│   │
│   └── utils/
│       ├── smoothScroll.js       # Scroll suave a secciones por ID
│       └── lazyLoad.js           # Lazy loading de imágenes
│
├── documentación/                # Documentación del proyecto
│   ├── BUSINESS.md
│   ├── STYLE_DIRECTION.md
│   ├── UI_DIRECTION.md
│   └── UI_ARCHITECTURE.md
│
├── index.html                    # HTML base de Vite
├── vite.config.js                # Configuración de Vite
├── package.json
├── .gitignore
├── vercel.json                   # Configuración de deploy en Vercel
└── README.md
```

---

## Arquitectura de Componentes

### Árbol de Componentes
```
<App>
├── <Navbar />
│   └── <MobileMenu />
├── <main>
│   ├── <Hero />
│   ├── <Services />
│   │   └── <ServiceCard /> × N
│   ├── <About />
│   │   └── <Counter /> × 3
│   ├── <Gallery />
│   │   └── <Lightbox />
│   ├── <Testimonials />
│   │   └── <TestimonialCard /> × 3
│   ├── <CTA />
│   └── <Contact />
└── <Footer />
```

### Principios de Componentes
- **Cada sección = 1 componente** con su propio archivo CSS Module
- **Componentes ui/** son genéricos y reutilizables (Button, SectionTitle, etc.)
- **Props para datos**, los datos se consumen a través de `src/services/dataService.js`
- **Datos en JSON** simulando respuestas de Supabase — migración futura sin tocar componentes
- **Animaciones separadas** del componente — se invocan via hooks o funciones del directorio `animations/`
- **Sin estado global** — no se necesita Context ni Redux para una landing page

---

## Estrategia de Animaciones con GSAP

### Filosofía de Animación
- **Elegancia y calma** — Movimientos suaves que transmitan sofisticación
- **Propósito** — Cada animación debe guiar la atención, nunca distraer
- **Performance** — Solo animar `transform` y `opacity` (GPU-accelerated)
- **Accesibilidad** — Respetar `prefers-reduced-motion`: desactivar animaciones o reducirlas a fade simple
- **Timing** — Curvas ease-out y cubic-bezier para sensación orgánica

### Configuración Global

```javascript
// src/animations/gsapConfig.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Registrar plugins una sola vez
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Defaults globales
gsap.defaults({
  ease: 'power3.out',
  duration: 0.8,
});

// Respetar prefers-reduced-motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  gsap.globalTimeline.timeScale(20); // Acelera todo para que sea instantáneo
  ScrollTrigger.config({ limitCallbacks: true });
}

export { gsap, ScrollTrigger, prefersReducedMotion };
```

### Hook useGSAP

```javascript
// src/hooks/useGSAP.js
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../animations/gsapConfig';

export function useGSAP(animationFn, containerRef, deps = []) {
  const ctx = useRef(null);

  useEffect(() => {
    // Crear contexto GSAP scoped al contenedor
    ctx.current = gsap.context(() => {
      animationFn(gsap, ScrollTrigger);
    }, containerRef.current);

    // Cleanup: matar todas las animaciones del contexto
    return () => ctx.current?.revert();
  }, deps);

  return ctx;
}
```

---

### Animaciones de Texto

#### Text Reveal (Palabra por Palabra)
Usado en títulos de sección y hero. Las palabras se envuelven en `<span>` y se animan secuencialmente.

```javascript
// src/animations/textAnimations.js

/**
 * Reveal de texto palabra por palabra
 * Cada palabra aparece con translateY + opacity
 */
export function textRevealByWord(selector, options = {}) {
  const {
    y = 40,
    duration = 0.6,
    stagger = 0.08,
    delay = 0,
    ease = 'power3.out',
    scrollTrigger = null,
  } = options;

  return gsap.from(selector, {
    y,
    opacity: 0,
    duration,
    stagger,
    delay,
    ease,
    scrollTrigger,
  });
}

/**
 * Reveal de texto línea por línea
 * Para subtítulos y descripciones
 */
export function textRevealByLine(selector, options = {}) {
  const {
    y = 30,
    duration = 0.7,
    stagger = 0.12,
    delay = 0,
    scrollTrigger = null,
  } = options;

  return gsap.from(selector, {
    y,
    opacity: 0,
    duration,
    stagger,
    delay,
    ease: 'power2.out',
    scrollTrigger,
  });
}

/**
 * SplitText manual (sin plugin de pago)
 * Envuelve cada palabra en un span para animar individualmente
 */
export function splitTextIntoWords(element) {
  const text = element.textContent;
  const words = text.split(' ');
  element.innerHTML = words
    .map(word => `<span class="word" style="display:inline-block;overflow:hidden;">
      <span class="word-inner" style="display:inline-block;">${word}</span>
    </span>`)
    .join(' ');
  return element.querySelectorAll('.word-inner');
}
```

#### Aplicación en Hero
```javascript
// Dentro de Hero.jsx con useGSAP
useGSAP((gsap) => {
  const tl = gsap.timeline({ delay: 0.3 });

  // 1. Badge pill fade-in desde arriba
  tl.from('.hero-badge', {
    y: -20,
    opacity: 0,
    duration: 0.5,
  })

  // 2. Título línea 1 — slide up
  .from('.hero-title-line1', {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  }, '-=0.2')

  // 3. Título línea 2 (italic) — slide up con delay
  .from('.hero-title-line2', {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  }, '-=0.5')

  // 4. Descripción — fade in
  .from('.hero-description', {
    y: 30,
    opacity: 0,
    duration: 0.6,
  }, '-=0.4')

  // 5. CTAs — staggered desde abajo
  .from('.hero-cta', {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.15,
  }, '-=0.3')

  // 6. Imagen hero — fade in + scale sutil
  .from('.hero-image', {
    y: 40,
    opacity: 0,
    scale: 0.98,
    duration: 1,
    ease: 'power2.out',
  }, '-=0.4');
}, containerRef);
```

---

### Animaciones de Imágenes

#### Scroll Reveal para Imágenes
```javascript
// src/animations/scrollAnimations.js

/**
 * Reveal de imagen al entrar en viewport
 * Efecto: fade-in + slide-up + scale sutil
 */
export function imageScrollReveal(selector, options = {}) {
  const {
    y = 60,
    scale = 0.95,
    duration = 1,
    stagger = 0.15,
    start = 'top 85%',
    end = 'top 20%',
  } = options;

  return gsap.from(selector, {
    y,
    opacity: 0,
    scale,
    duration,
    stagger,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: selector,
      start,
      end,
      toggleActions: 'play none none none', // play on enter, don't reverse
    },
  });
}

/**
 * Parallax sutil en imágenes
 * La imagen se mueve más lento que el scroll
 */
export function imageParallax(selector, options = {}) {
  const {
    yPercent = -15,
    ease = 'none',
  } = options;

  return gsap.to(selector, {
    yPercent,
    ease,
    scrollTrigger: {
      trigger: selector,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1, // Vinculado al scroll (1 = suavizado de 1s)
    },
  });
}
```

#### Hover Zoom en Imágenes (Galería)
```javascript
/**
 * Zoom suave al hover sobre imágenes
 * Se aplica via CSS + GSAP para mayor control
 */
export function imageHoverZoom(container, imageSelector) {
  const images = container.querySelectorAll(imageSelector);

  images.forEach(img => {
    const tl = gsap.timeline({ paused: true });
    tl.to(img, {
      scale: 1.05,
      duration: 0.4,
      ease: 'power2.out',
    });

    img.parentElement.addEventListener('mouseenter', () => tl.play());
    img.parentElement.addEventListener('mouseleave', () => tl.reverse());
  });
}
```

---

### Animaciones por Scroll (ScrollTrigger)

#### Reveal Staggered de Cards
Usado en Servicios, Testimonios, Contacto.

```javascript
/**
 * Cards que aparecen una por una al hacer scroll
 */
export function cardsStaggerReveal(containerSelector, cardSelector, options = {}) {
  const {
    y = 50,
    duration = 0.7,
    stagger = 0.15,
    start = 'top 80%',
  } = options;

  return gsap.from(cardSelector, {
    y,
    opacity: 0,
    duration,
    stagger,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: containerSelector,
      start,
      toggleActions: 'play none none none',
    },
  });
}
```

#### Section Header Reveal
Usado en el componente SectionTitle (Tag + Título + Línea decorativa).

```javascript
/**
 * Animación del header de sección
 * Tag → Título → Línea decorativa (secuencial)
 */
export function sectionHeaderReveal(sectionSelector) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionSelector,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });

  tl.from(`${sectionSelector} .section-tag`, {
    y: 20,
    opacity: 0,
    duration: 0.5,
  })
  .from(`${sectionSelector} .section-title`, {
    y: 40,
    opacity: 0,
    duration: 0.7,
  }, '-=0.3')
  .from(`${sectionSelector} .section-line`, {
    scaleX: 0,
    opacity: 0,
    duration: 0.6,
    transformOrigin: 'center',
  }, '-=0.3');

  return tl;
}
```

---

### Contadores Animados (About Section)

```javascript
/**
 * Contador que incrementa de 0 al valor final
 * Usado en la sección About para stats (150+, 3+, 5.0)
 */
export function animateCounter(element, endValue, options = {}) {
  const {
    duration = 2,
    suffix = '',
    decimals = 0,
    start = 'top 80%',
  } = options;

  const obj = { value: 0 };

  return gsap.to(obj, {
    value: endValue,
    duration,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start,
      toggleActions: 'play none none none',
    },
    onUpdate: () => {
      element.textContent = obj.value.toFixed(decimals) + suffix;
    },
  });
}

// Uso en About.jsx:
// animateCounter(clientsRef.current, 150, { suffix: '+' });
// animateCounter(yearsRef.current, 3, { suffix: '+' });
// animateCounter(ratingRef.current, 5.0, { suffix: '', decimals: 1 });
```

---

### Navbar Scroll Effect

```javascript
/**
 * Navbar: transparente → sólida con blur al scroll
 */
export function navbarScrollEffect(navbarSelector) {
  return ScrollTrigger.create({
    start: 'top -80', // Después de scrollear 80px
    onEnter: () => {
      gsap.to(navbarSelector, {
        backgroundColor: 'rgba(250, 247, 242, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 20px rgba(44, 40, 37, 0.08)',
        duration: 0.3,
      });
    },
    onLeaveBack: () => {
      gsap.to(navbarSelector, {
        backgroundColor: 'transparent',
        backdropFilter: 'none',
        boxShadow: 'none',
        duration: 0.3,
      });
    },
  });
}
```

---

### CTA Glow Pulse

```javascript
/**
 * Efecto glow pulsante sutil en botones CTA de la sección oscura
 */
export function glowPulse(selector) {
  return gsap.to(selector, {
    boxShadow: '0 0 30px rgba(255, 213, 160, 0.4)',
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
}
```

---

### Mapa de Animaciones por Sección (v2)

| Sección | Tipo de Animación | Trigger | Detalles |
|---------|-------------------|---------|----------|
| **Navbar** | Background transition | Scroll > 80px | Transparente → blur sólido, 300ms |
| **Hero** | Timeline secuencial | On load (delay 0.3s) | Badge → Título L1 → Título L2 (italic) → Descripción → CTAs → Imagen |
| **Servicios** | Header reveal + cards stagger | ScrollTrigger (top 80%) | Header: tag → título → línea. Cards: y:50, stagger 0.15s |
| **About** | Parallax + fade + counters | ScrollTrigger (top 80%) | Imagen parallax yPercent:-15, texto fade-in, contadores incrementales |
| **Galería** | Image reveal staggered + hover | ScrollTrigger + mouseenter | Imágenes: y:60, scale:0.95, stagger 0.15s. Hover: scale 1.05 |
| **Testimonios** | Header reveal + cards stagger | ScrollTrigger (top 80%) | Cards: y:50, stagger 0.15s |
| **CTA (oscuro)** | Fade-in + glow pulse | ScrollTrigger (top 85%) | Contenido fade-in, CTA con glow pulse infinito |
| **Contacto** | Header reveal + blocks stagger | ScrollTrigger (top 80%) | Info blocks: y:30, stagger 0.12s. Mapa: fade-in |
| **Footer** | Fade-in suave | ScrollTrigger (top 90%) | Contenido completo fade-in, opacity 0→1, duration 0.8 |

### Configuración de Easing

| Uso | Easing | Razón |
|-----|--------|-------|
| Entrada de elementos | `power3.out` | Rápido al inicio, desacelera suavemente |
| Parallax | `none` (lineal) | Movimiento constante vinculado al scroll |
| Hover | `power2.out` | Respuesta rápida, natural |
| Glow pulse | `sine.inOut` | Pulsación orgánica y calmada |
| Contadores | `power2.out` | Incremento rápido que desacelera |
| Navbar transition | `power1.out` | Cambio sutil y rápido |

### Duración por Tipo de Animación

| Tipo | Duración | Notas |
|------|----------|-------|
| Scroll reveal | 0.6–0.8s | Elementos entrando al viewport |
| Hero timeline | 0.5–1.0s por paso | Total ~2.5s para toda la secuencia |
| Hover effects | 0.3–0.4s | Respuesta inmediata al usuario |
| Contadores | 2.0s | Lo suficiente para que se note el incremento |
| Parallax | Vinculado a scroll | scrub: 1 (1s de suavizado) |
| Navbar | 0.3s | Transición rápida y limpia |

### Respetar `prefers-reduced-motion`

```javascript
// En cada componente, verificar antes de animar:
import { prefersReducedMotion } from '../animations/gsapConfig';

useGSAP((gsap) => {
  if (prefersReducedMotion) {
    // Solo hacer un fade simple sin movimiento
    gsap.from('.element', { opacity: 0, duration: 0.3 });
    return;
  }

  // Animaciones completas
  gsap.from('.element', { y: 50, opacity: 0, duration: 0.8 });
}, containerRef);
```

### Performance de Animaciones

- **Solo animar `transform` y `opacity`** — Nunca animar `width`, `height`, `top`, `left`, `margin`, `padding`
- **`will-change`** — Agregar `will-change: transform` solo a elementos que se van a animar, y removerlo después
- **Cleanup** — Siempre revertir el contexto GSAP en `useEffect` cleanup para evitar memory leaks
- **Stagger vs muchos ScrollTriggers** — Preferir un solo ScrollTrigger con stagger en lugar de un ScrollTrigger por cada card
- **`toggleActions: 'play none none none'`** — Las animaciones se ejecutan una vez y no se revierten (mejor performance)

---

## Variables CSS Globales

```css
/* src/styles/variables.css */

:root {
  /* Paleta - Cálidos */
  --color-beige:        #D4C5B0;
  --color-cream:        #F0E6D8;
  --color-nude:         #C4A882;
  --color-gold:         #C9A96E;
  --color-wood:         #B8956A;

  /* Paleta - Fríos / Neutros */
  --color-white:        #FAF7F2;
  --color-gray:         #9B9590;
  --color-dark:         #2C2825;

  /* Acentos */
  --color-glow:         #FFD5A0;
  --color-brass:        #D4A853;

  /* Tipografía */
  --font-serif:         'Playfair Display', Georgia, serif;
  --font-sans:          'DM Sans', -apple-system, sans-serif;

  /* Tamaños tipográficos */
  --text-h1:            clamp(2.25rem, 5vw, 5rem);
  --text-h2:            clamp(1.75rem, 3.5vw, 3rem);
  --text-h3:            clamp(1.25rem, 2vw, 1.75rem);
  --text-body:          clamp(0.938rem, 1.2vw, 1.125rem);
  --text-caption:       clamp(0.75rem, 1vw, 0.875rem);

  /* Spacing */
  --section-gap:        clamp(3.75rem, 10vw, 10rem);
  --container-max:      1280px;
  --container-padding:  clamp(1rem, 3vw, 2rem);

  /* Bordes */
  --radius-sm:          8px;
  --radius-md:          16px;
  --radius-lg:          24px;
  --radius-xl:          32px;

  /* Sombras */
  --shadow-card:        0 4px 24px rgba(44, 40, 37, 0.06);
  --shadow-hover:       0 8px 32px rgba(201, 169, 110, 0.15);
  --shadow-glow:        0 0 20px rgba(255, 213, 160, 0.3);

  /* Transiciones */
  --ease-smooth:        cubic-bezier(0.25, 0.1, 0.25, 1);
  --duration-fast:      200ms;
  --duration-normal:    400ms;
  --duration-slow:      600ms;
}

/* Dark Mode */
[data-theme="dark"] {
  --color-beige:        #3A3530;
  --color-cream:        #2C2825;
  --color-nude:         #8B7355;
  --color-gold:         #D4B476;
  --color-wood:         #9A7B5A;

  --color-white:        #1E1B18;
  --color-gray:         #8A8580;
  --color-dark:         #F0E6D8;

  --color-glow:         #FFD5A0;
  --color-brass:        #D4A853;

  --shadow-card:        0 4px 24px rgba(0, 0, 0, 0.2);
  --shadow-hover:       0 8px 32px rgba(201, 169, 110, 0.2);
  --shadow-glow:        0 0 20px rgba(255, 213, 160, 0.15);
}
```

---

## Routing

### Estrategia: SPA con Hash/Scroll Navigation
```
/                → Landing completa (todas las secciones)
/#servicios      → Scroll a sección Servicios
/#nosotros       → Scroll a sección Nosotros
/#galeria        → Scroll a sección Galería
/#reservar       → Scroll a sección Reservar
/#contacto       → Scroll a sección Contacto
```

- React Router maneja la ruta base `/`
- La navegación interna usa `scrollIntoView()` con behavior smooth o GSAP ScrollTo
- Cada sección tiene un `id` correspondiente para navegación directa por URL

---

## Responsive Design (Mobile-First)

La UI debe ser completamente responsive para garantizar una experiencia óptima en teléfonos móviles, tablets y desktops.

### Estrategia: Mobile-First
- Los estilos base se escriben para **móvil** y se escalan hacia arriba con `min-width` media queries
- Cada componente en su CSS Module incluye sus propias reglas responsive

### Breakpoints
| Dispositivo | Ancho | Media Query |
|-------------|-------|-------------|
| Móvil (base) | < 768px | Estilos por defecto |
| Tablet | 768px – 1024px | `@media (min-width: 768px)` |
| Desktop | 1024px – 1440px | `@media (min-width: 1024px)` |
| Wide | > 1440px | `@media (min-width: 1440px)` — contenedor max `1280px` |

### Adaptaciones Responsive por Componente
| Componente | Móvil | Desktop |
|------------|-------|---------|
| **Navbar** | Menú hamburger fullscreen | Links visibles + CTA |
| **Hero** | Título reducido, CTAs en stack vertical | Layout completo |
| **Servicios** | Grid 1 columna | Grid 3 columnas |
| **Nosotros** | Imagen arriba, texto abajo (stacked) | 2 columnas lado a lado |
| **Galería** | Grid 2 columnas | Masonry 3–4 columnas |
| **Testimonios** | Carrusel swipeable (touch) | Carrusel con flechas |
| **Reservar** | Formulario full-width | Formulario centrado 60% |
| **Contacto** | Mapa arriba, info abajo | 2 columnas |

### Consideraciones Móviles
- **Touch targets:** Botones y elementos interactivos con mínimo `44px × 44px`
- **Tipografía fluida:** Tamaños con `clamp()` (ya definidos en variables CSS)
- **Imágenes responsive:** `srcset` + `sizes` para servir el tamaño adecuado por dispositivo
- **Animaciones reducidas:** Respetar `prefers-reduced-motion` y simplificar animaciones pesadas en móvil
- **Viewport meta:** `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- **Scroll suave nativo:** En móvil se usa `-webkit-overflow-scrolling: touch` donde sea necesario
- **Orientación:** Layout funcional en portrait y landscape

### Hook de Soporte
```javascript
// src/hooks/useMediaQuery.js
// Detecta breakpoints reactivamente para adaptar lógica en componentes
// Ejemplo: const isMobile = useMediaQuery('(max-width: 767px)');
```

---

## Performance

### Optimización de Imágenes
- Formatos **WebP** con fallback a JPG
- Lazy loading nativo (`loading="lazy"`) + Intersection Observer
- Imágenes responsive con `srcset` y `sizes`
- Hero image/video: preload en `<head>`

### Optimización de GSAP
- Registrar plugins una sola vez en `gsapConfig.js`
- Limpiar ScrollTriggers en `useEffect` cleanup
- Usar `will-change` solo en elementos animados activos
- Animaciones GPU-accelerated (`transform`, `opacity`) — evitar animar `width`, `height`, `top`, `left`

### Optimización General
- Code splitting por ruta si se agregan páginas adicionales
- Tree shaking de GSAP (importar solo plugins necesarios)
- Minificación automática con Vite build
- Compresión gzip/brotli en Vercel

### Métricas Objetivo
| Métrica | Target |
|---------|--------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Lighthouse Performance | > 90 |

---

## SEO

### Meta Tags Esenciales
```html
<title>Sofia Studio 2.0 | Estética Profesional en Milpa Alta, CDMX</title>
<meta name="description" content="Estética profesional en Villa Milpa Alta. Servicios de maquillaje, diseño de cejas y depilación. Reserva tu cita hoy.">
<meta property="og:title" content="Sofia Studio 2.0">
<meta property="og:description" content="Tu espacio de belleza y bienestar en Milpa Alta">
<meta property="og:image" content="/og-image.jpg">
<meta property="og:type" content="website">
```

### SEO Local
- Datos estructurados JSON-LD (`LocalBusiness`)
- Google My Business vinculado
- Keywords: estética milpa alta, salón de belleza cdmx, maquillaje profesional milpa alta

---

## Deploy en Vercel

### Configuración
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Flujo de Deploy
```
Git Push → Vercel detecta cambios → Build automático →
→ Preview URL (PRs) → Producción (main branch)
```

### Dominio
- Vercel asigna dominio gratuito: `sofia-studio-2-0.vercel.app`
- Opción de dominio personalizado (ej: `sofiastudio2.com`) conectado en Vercel

---

## Estrategia de Datos: JSON Dummy → Supabase

### Fase Actual: Datos Dummy en JSON
Todos los datos del sitio viven en archivos `.json` dentro de `src/data/`. La estructura de cada JSON imita el schema que tendría una tabla de Supabase, para que la migración futura sea directa.

Los componentes **nunca importan los JSON directamente**. Siempre consumen datos a través de `src/services/dataService.js`, que actúa como capa de abstracción.

#### Flujo Actual
```
Componente → dataService.getServices() → lee services.json → retorna datos
```

#### Flujo Futuro (con Supabase)
```
Componente → dataService.getServices() → supabaseClient.from('services').select() → retorna datos
```

> Al migrar, solo se modifica `dataService.js` y `supabaseClient.js`. Los componentes no se tocan.

### Estructura de los JSON Dummy

**services.json**
```json
[
  {
    "id": 1,
    "name": "Diseño de Cejas con Hilo",
    "description": "Moldeado y diseño profesional de cejas con técnica de hilo.",
    "price": 150,
    "currency": "MXN",
    "duration_minutes": 30,
    "category": "cejas",
    "icon": "eyebrow",
    "image": "/assets/images/services/cejas.webp",
    "is_active": true
  }
]
```

**testimonials.json**
```json
[
  {
    "id": 1,
    "client_name": "María García",
    "text": "Excelente servicio, muy profesional y el resultado fue increíble.",
    "rating": 5,
    "avatar": "/assets/images/testimonials/maria.webp",
    "date": "2025-01-15",
    "is_visible": true
  }
]
```

**gallery.json**
```json
[
  {
    "id": 1,
    "src": "/assets/images/gallery/trabajo-01.webp",
    "alt": "Maquillaje profesional para evento",
    "category": "maquillaje",
    "order": 1,
    "is_visible": true
  }
]
```

**hero.json**
```json
{
  "title": "Sofia Studio 2.0",
  "subtitle": "Tu espacio de belleza y bienestar",
  "cta_primary": { "text": "Reserva tu Cita", "link": "#reservar" },
  "cta_secondary": { "text": "Ver Servicios", "link": "#servicios" },
  "background_image": "/assets/images/hero/hero-bg.webp",
  "background_video": null
}
```

**about.json**
```json
{
  "title": "Nuestra Historia",
  "description": "Sofia Studio 2.0 nació de la pasión por realzar la belleza natural...",
  "image": "/assets/images/team/equipo.webp",
  "stats": [
    { "label": "Clientes", "value": 150, "suffix": "+" },
    { "label": "Años", "value": 3, "suffix": "+" },
    { "label": "Rating", "value": 5.0, "suffix": "⭐" }
  ]
}
```

**contact.json**
```json
{
  "phone": "+52 55 4717 6847",
  "whatsapp": "5554717847",
  "address": "Sonora Sur 51, Villa Milpa Alta, Los Ángeles, Milpa Alta, 12500, CDMX",
  "email": null,
  "google_maps_embed": "https://maps.google.com/...",
  "social": {
    "instagram": "https://www.instagram.com/sofiastudio2.0/",
    "facebook": "https://www.facebook.com/p/Sofia-Studio-61556962012180/"
  },
  "hours": [
    { "days": "Lunes a Viernes", "time": "11:00 AM – 7:00 PM" },
    { "days": "Sábado", "time": "10:00 AM – 5:00 PM" },
    { "days": "Domingo", "time": "Cerrado" }
  ],
  "fresha_url": "https://www.fresha.com/es/lvp/sofia-studio-2-0-sonora-sur-villa-milpa-alta-Rv5rBA"
}
```

### Capa de Abstracción: dataService.js

```javascript
// src/services/dataService.js
// Fase actual: lee archivos JSON locales
// Fase futura: reemplazar imports por queries a Supabase

import services from '../data/services.json';
import testimonials from '../data/testimonials.json';
import gallery from '../data/gallery.json';
import hero from '../data/hero.json';
import about from '../data/about.json';
import contact from '../data/contact.json';

export const getServices = () => services.filter(s => s.is_active);
export const getTestimonials = () => testimonials.filter(t => t.is_visible);
export const getGallery = (category) => {
  const items = gallery.filter(g => g.is_visible);
  return category ? items.filter(g => g.category === category) : items;
};
export const getHero = () => hero;
export const getAbout = () => about;
export const getContact = () => contact;
```

### Fase Futura: Migración a Supabase + Panel Admin

#### Supabase
```
supabaseClient.js → inicializa createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
dataService.js    → cambia imports por supabase.from('tabla').select()
```

#### Panel de Administración (futuro)
El dueño podrá gestionar su contenido desde un panel web separado:
- CRUD de servicios (agregar, editar precios, activar/desactivar)
- Subir fotos a la galería
- Gestionar testimonios
- Editar textos del hero y about
- Actualizar datos de contacto y horarios

#### Tablas Supabase Previstas
| Tabla | Campos Clave |
|-------|-------------|
| `services` | id, name, description, price, category, icon, image, is_active, order |
| `testimonials` | id, client_name, text, rating, avatar, date, is_visible |
| `gallery` | id, src, alt, category, order, is_visible |
| `site_content` | id, section, key, value (hero, about, contact como key-value) |
| `admin_users` | id, email, role (para el panel de admin) |

---

## Dark Mode

### Implementación
- Se usa el atributo `data-theme="dark"` en el `<html>` para alternar entre temas
- Todas las variables CSS se sobreescriben en `[data-theme="dark"]` — los componentes no necesitan lógica especial
- El hook `useTheme.js` gestiona el toggle y persiste la preferencia en `localStorage`
- Al cargar la página se respeta `prefers-color-scheme` del sistema como default, pero la elección del usuario tiene prioridad

### Componente ThemeToggle
- Ubicado en la **Navbar**, al lado del CTA de reservar
- Icono de sol/luna con transición animada (GSAP rotate + morph)
- En móvil aparece también en el menú hamburger

### Paleta Dark Mode
| Token | Light | Dark |
|-------|-------|------|
| Fondo base | `#FAF7F2` | `#1E1B18` |
| Fondo cards | `#F0E6D8` | `#2C2825` |
| Fondo secciones | `#D4C5B0` | `#3A3530` |
| Texto principal | `#2C2825` | `#F0E6D8` |
| Texto secundario | `#9B9590` | `#8A8580` |
| Dorado (se mantiene) | `#C9A96E` | `#D4B476` (ligeramente más claro) |
| Glow (se mantiene) | `#FFD5A0` | `#FFD5A0` |

> Los dorados y glows se mantienen casi iguales en ambos temas para conservar la identidad premium. El dark mode invierte fondos y textos pero respeta los acentos de marca.

---

## Consideraciones Futuras
- **Panel de Administración:** App React separada o ruta protegida (`/admin`) con auth de Supabase
- **Supabase Storage:** Para subir imágenes desde el panel admin sin tocar código
- **Analytics:** Google Analytics 4 o Vercel Analytics para métricas de visitas
- **WhatsApp API:** Botón flotante de WhatsApp con mensaje preconfigurado
- **Blog:** Si se desea crear contenido SEO, agregar sección de blog con MDX o CMS
- **Multiidioma:** Si se necesita versión en inglés, implementar i18n con react-intl
- **Notificaciones:** Email/WhatsApp automático al recibir reserva (Supabase Edge Functions)
