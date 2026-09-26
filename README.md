# NovaStore - Catálogo de Productos

**NovaStore** es una aplicación frontend completa y funcional construida con **Angular 20**, diseñada como base para demostraciones prácticas de flujos de trabajo **CI/CD** modernos (gestión de ramas, Pull Requests, validaciones automatizadas de calidad, pruebas unitarias continuas, empaquetado de producción y despliegue automatizado en Amazon S3).

> [!NOTE]
> **Demostración de CI/CD**:
> Este repositorio servirá para ilustrar la automatización completa mediante GitHub Actions y despliegue estático en Amazon S3. La carpeta `.github/workflows/` está preparada para albergar el archivo `pipeline.yml`.

---

## 🛠 Requisitos del Sistema

* **Node.js**: v22.0.0 o superior (verificado con Node v24.15.0).
* **Gestor de Paquetes**: [pnpm](https://pnpm.io/) v9.0.0 o superior.

---

## 📦 Instalación

Clona el repositorio e instala las dependencias utilizando `pnpm`:

```bash
pnpm install
```

---

## 🚀 Comandos de Ejecución

### Desarrollo Local
Para iniciar el servidor de desarrollo local con recarga en caliente:

```bash
pnpm dev
# o alternativamente:
pnpm start
```

La aplicación estará accesible en: `http://localhost:4200/`

---

## 🧪 Calidad de Código y Pruebas

### 1. Validación de Estilo y Tipado (Lint)
Ejecuta **ESLint** con las reglas oficiales de `@angular-eslint`:

```bash
pnpm run lint
```

### 2. Pruebas Unitarias Interactivas
Ejecuta las pruebas en modo observador:

```bash
pnpm test
```

### 3. Pruebas Unitarias para CI (Modo Headless)
Diseñado específicamente para pipelines de integración continua sin interfaz gráfica:

```bash
pnpm run test:ci
```

*Las pruebas unitarias validan:*
1. Que el servicio `ProductService` suministra el listado de productos y calcula métricas de stock.
2. Que `CatalogComponent` renderiza la cuadrícula completa de productos recibidos.
3. Que `ProductCardComponent` renderiza correctamente el nombre y precio formateado en bolivianos (`Bs 150,00`).
4. Que un producto agotado muestra la etiqueta correspondiente (`Agotado`).
5. Que `CatalogSummaryComponent` calcula y visualiza las métricas de disponibles y agotados.

---

## 🏗 Build de Producción

Genera el empaquetado optimizado para distribución estática en Amazon S3:

```bash
pnpm run build
```

Los artefactos listos para producción se generan en: `dist/product-catalog/browser/`.

---

## 📂 Estructura Principal del Proyecto

```
product-catalog/
├── .github/
│   └── workflows/                       # Directorio preparado para el pipeline CI/CD (pipeline.yml)
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── models/
│   │   │   │   └── product.model.ts     # Interfaces de Product, ProductCategory y CatalogSummary
│   │   │   └── services/
│   │   │       ├── product.service.ts   # Catálogo de datos locales y Signals reactivas
│   │   │       └── product.service.spec.ts
│   │   ├── features/
│   │   │   └── catalog/
│   │   │       ├── catalog.component.ts # Orquestador: Encabezado, resumen, grid y estado vacío
│   │   │       ├── catalog.component.html
│   │   │       ├── catalog.component.scss
│   │   │       ├── catalog.component.spec.ts
│   │   │       └── components/
│   │   │           ├── catalog-summary/ # Tarjetas de resumen métrico (Total, Disponibles, Agotados)
│   │   │           └── product-card/    # Tarjetas de producto con SVGs locales y precio en Bs
│   │   ├── shared/
│   │   │   └── components/
│   │   │       └── empty-state/         # Componente reutilizable para listado sin datos
│   │   ├── app.ts                       # Componente raíz standalone
│   │   ├── app.html
│   │   └── app.spec.ts
│   ├── index.html                       # HTML base con tipografía Plus Jakarta Sans y metadatos SEO
│   └── styles.scss                      # Variables CSS de diseño, normalización y estilos globales
├── eslint.config.js                     # Configuración modular de ESLint para Angular 20
├── package.json                         # Scripts y dependencias gestionadas con pnpm
└── tsconfig.json                        # TypeScript configurado en modo estricto
```

---

## 📌 Alcance y Futuras Funcionalidades

En esta versión base, las siguientes funcionalidades han sido **excluidas intencionalmente**:
* Filtro por categoría.
* Filtro por disponibilidad (en stock / agotado).
* Barra de búsqueda por texto.
* Ordenamiento por precio o nombre.

Estas características serán desarrolladas en la futura rama de trabajo `feature/product-filters` con el objetivo de demostrar el ciclo de vida de Pull Requests y validaciones automáticas en el pipeline de CI/CD.
# frontend-store-aws-pipeline
