<template>
  <v-app theme="light">
    <v-layout>
      <v-app-bar flat density="comfortable" class="text-center border-b">
        <v-app-bar-title>Vuetify Cart</v-app-bar-title>

        <template #append>
          <v-badge color="info" dot>
            <v-icon icon="mdi-cart" />
          </v-badge>
        </template>
      </v-app-bar>

      <v-main>
        <HelloWorld />
      </v-main>

      <AppFooter />
    </v-layout>
  </v-app>
</template>

<script setup>
  //
</script>
