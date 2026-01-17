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
- JSON Server for mock API

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

## API Setup

This application uses **JSON Server** as a mock REST API. The database is stored in the `database.json` file.

### Starting the API Server

Install JSON Server globally (if not already installed):

```bash
npm install -g json-server
```

Start the JSON Server:

```bash
json-server --watch database.json --port 8000
```

The API will be available at `http://localhost:8000/products`

### Database Structure

The `database.json` file should contain a products array with the following structure:

```json
{
  "products": [
    {
      "id": 1,
      "name": "Product Name",
      "price": 99.99,
      "image": "image-url",
      "description": "Product description"
    }
  ]
}
```

## License

Private project - not licensed for public use.
