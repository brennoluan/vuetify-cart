# Vuetify Cart

A modern shopping cart application built with Vue 3, Vuetify 3, and the Composition API.

## Features

- Product listing with loading states
- Add products to cart
- Remove products from cart
- Responsive navigation drawer for cart display
- Empty cart state handling
- Dark theme interface
- Asynchronous data fetching with loading indicators

## Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vuetify 3** - Material Design component framework
- **Vite** - Fast build tool and development server
- **Axios** - HTTP client for API requests
- **VueUse** - Collection of Vue Composition utilities
- **Sass** - CSS preprocessor

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- Backend API running on `http://localhost:8000/products`

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Cart/
│   │   ├── Cart.vue          # Main cart component
│   │   ├── CartProducts.vue  # Cart items display
│   │   └── CartEmpty.vue     # Empty cart state
│   ├── Product/
│   │   ├── ProductHome.vue   # Product container with data fetching
│   │   ├── ProductList.vue   # Product grid display
│   │   ├── ProductLoading.vue # Loading state
│   │   └── ProductEmpy.vue   # Empty products state
│   └── TheHeader.vue         # Application header
├── composables/
│   └── useCart.js            # Cart state management
├── plugins/
│   ├── index.js              # Plugin registration
│   └── vuetify.js            # Vuetify configuration
├── App.vue                   # Root component
└── main.js                   # Application entry point
```

## API Requirements

The application expects a backend API endpoint at:

```
GET http://localhost:8000/products
```

The API should return an array of product objects with the following structure:

```json
[
  {
    "id": 1,
    "name": "Product Name",
    "price": 99.99,
    "image": "image-url",
    "description": "Product description"
  }
]
```

## License

Private project - not licensed for public use.
