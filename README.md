# Oliva & Brasa — Sitio web de restaurante

Landing page profesional para un restaurante de cocina de autor, con diseño oscuro elegante, imágenes de alta calidad y animaciones fluidas.

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (paleta personalizada: tinta, dorado, crema)
- **Framer Motion** (parallax, reveals al hacer scroll, carrusel, contadores)
- **Lucide React** (iconografía)

## Secciones

| Sección | Destacado |
|---|---|
| Inicio (Hero) | Imagen a pantalla completa con zoom lento y parallax, entrada escalonada del titular |
| Servicios | Retícula tipo *bento* con 6 tarjetas animadas y tile de llamada a la acción |
| Sobre Nosotros | Composición de imágenes con parallax y contadores animados |
| Testimonios | Carrusel con auto-avance y transiciones direccionales |
| Contacto | Formulario de reservas con estado de éxito animado |

Extras: navbar translúcido con blur al hacer scroll, menú móvil a pantalla completa, cinta *marquee* infinita, banda parallax con cita del chef y botón "volver arriba".

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:5173
npm run build    # build de producción en dist/
npm run preview  # previsualizar el build
```
