# Explicación Técnica del Proyecto

## 3. Desarrollo del Proyecto (Actualizado)

### 3.1. Diseño Responsivo
- **Viewport:** Se mantiene la meta etiqueta para asegurar la correcta escala en dispositivos móviles.
- **Media Queries:** Se añadieron y mejoraron media queries en el CSS para adaptar la estructura de grids y flexbox en diferentes anchos de pantalla (`@media` para 1200px, 900px y 600px).
- **Evidencia:** 
  - La barra de beneficios, el header, las áreas de categorías, productos y footer se reorganizan automáticamente en columnas o filas según el dispositivo.
  - Los textos y las imágenes de productos y banners se ajustan fluidamente.
- **Ejemplo de código:**
  ```css
  @media (max-width: 900px) {
    .categories-area { grid-template-columns: 1fr 1fr; }
    .products-carousel { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 600px) {
    .categories-area, .products-carousel, .benefits-area { grid-template-columns: 1fr; }
  }

  1200px → laptops pequeñas y tablets grandes.

900px → tablets medianas y celulares grandes.

600px → celulares comunes y pequeños.
  ``` 
- **Capturas:** (Agregar capturas de pantalla de móvil, tablet y escritorio).

### 3.2. Flexbox
- **Uso:** 
  - En `.top-benefits`, `.header-content`, `.footer-top`, `.footer-links`, `.footer-social`, `.newsletter-form` y `.quick-access` para alineación y distribución flexible.
- **Justificación:** Permite que los elementos se distribuyan y alineen de forma adaptable, facilitando la responsividad.
- **Fragmento de código:**
  ```css
  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  .footer-top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
  }
  ```
- **Capturas:** (Agregar capturas mostrando menú, footer y formularios en diferentes dispositivos).

### 3.3. Grid Layout
- **Uso:** 
  - `.main-grid` define el layout principal con `grid-template-areas` para header, main y footer.
  - `.categories-area`, `.products-carousel`, `.benefits-area` usan grid para distribuir tarjetas y productos.
- **Descripción:**
  - El layout principal se estructura así:
    ```
    +----------------------+
    |   header-area        |
    +----------------------+
    |   main-area          |
    +----------------------+
    |   footer-area        |
    +----------------------+
    ```
  - Las áreas de productos y categorías usan grids adaptativos.
- **Ejemplo de código:**
  ```css
  .main-grid {
    display: grid;
    grid-template-areas:
      "header-area"
      "main-area"
      "footer-area";
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }
  .categories-area {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
  }
  ```
- **Framework CSS:** Se sigue usando **Bootstrap** para componentes como el carrusel, botones y formularios, combinando con CSS propio para mayor personalización.

## Frameworks CSS
Se utilizó **Bootstrap** para el menú, botones y formularios, acelerando el desarrollo y asegurando compatibilidad cross-browser.

- **Más útil en:** Menú responsivo y estilos de formularios.
- **¿Qué se hubiera hecho a mano?** Sin Bootstrap, habría que crear media queries, estilos de botones y formularios desde cero.

## Información clave sobre Men’s Fashion Box
- **Historia:** Fundada en 2015 como "caja de moda" con accesorios. Evolucionó a joyería masculina moderna (acero, plata, cuero).
- **Productos:** Relojes, anillos, aretes, collares, pulseras, gafas de sol, dijes, piercings, etc.
- **Presencia física:** Tiendas en Lima: Miraflores, Galería Norte, Mall del Sur, Real Plaza Centro Cívico.
- **Expansión online:** Durante la pandemia, la tienda online creció de 5–8 a 30 pedidos diarios.
- **Ingresos:** Crecimiento del 20% en 2020, llegando a S/ 1 millón.
 
### 3.5. Animaciones CSS (implementación adicional)

Se añadieron transiciones, transformaciones, animaciones y microinteracciones solicitadas en la interfaz:

- Transiciones suaves al pasar el cursor sobre las tarjetas de producto, que las elevan y amplían ligeramente para destacarlas.
- Botón "MENÚ": transformaciones suaves al pasar el cursor y al hacer click para aportar retroalimentación.
- "Mi Carrito": al pasar el cursor se muestra un círculo celeste (pseudo-elemento ::before) que envuelve el enlace; desaparece al retirar el cursor. El elemento tiene transición para entrada y salida suave.
- Tabs (Vestuarios / Calzado / Accesorios): al pulsar un botón `.tab` se generan partículas (bolitas) que salen radialmente desde el centro del botón y se desvanecen.

Cambios realizados:

- `css/estilos.css` — estilos para el botón de menú (`#menuBtn`), pseudo-elemento `.cart-link::before`, keyframes `particle-move` y reglas para `.particle`.
- `html/index.html` — añadido `class="cart-link"` al enlace del carrito para poder aplicar la animación del círculo.
- `js/main.js` — función `spawnParticles(targetEl, count)` que crea las bolitas al hacer click en una `.tab` y las limpia tras la animación.

Accesibilidad y compatibilidad:

- Se respeta `prefers-reduced-motion`: si el usuario lo indica, las partículas no se generan y las transiciones se vuelven instantáneas.
- Se incluyeron transiciones y estilos sencillos que funcionan en navegadores modernos (Chrome, Edge, Firefox). Para Safari antiguo se añadió soporte genérico en CSS; si detectas algún comportamiento distinto en Safari lo ajustamos con prefijos adicionales.

### 3.6. Compatibilidad entre navegadores (actualizado)

Pruebas recomendadas y observaciones específicas para estas interacciones:

1. Chrome (Chromium) — Las transformaciones y partículas funcionan correctamente; es el entorno donde se ha verificado visualmente.
2. Edge (Chromium) — Comportamiento igual a Chrome (mismo motor).
3. Firefox — Soporta las animaciones y keyframes; las partículas funcionan pero la composición puede variar ligeramente (suavidad/aliasing). Probar y capturar pantalla.
4. Safari — Soporta transform/opacity; el pseudo-elemento del carrito funciona, pero en versiones antiguas podría necesitar `-webkit-` prefijos para keyframes. Se incluyeron prefijos básicos en el CSS donde procedía.


