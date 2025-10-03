<script setup>
import axios from 'axios';
import api from './plugins/axios';

import HeaderComponent from './components/HeaderComponent.vue';

</script>

<template>

<HeaderComponent />
<main>
  <RouterView />
</main>

</template>

<style scoped></style>
