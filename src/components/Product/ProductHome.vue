<template>
    <ProductLoading v-if="isLoading" />
    <ProductEmpy v-else-if="!products.length" />
    <ProductList v-else :products="products" />
</template>

<script setup>

import { useAsyncState } from '@vueuse/core'
import axios from 'axios'
const { state: products, isLoading } = useAsyncState(
    axios
        .get('http://localhost:8000/products')
        .then(t => t.data),
    { id: null },
)
</script>