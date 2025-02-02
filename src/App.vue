<script setup lang="ts">
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import CookieBanner from './components/CookieBanner.vue';

const route = useRoute();

const isPrivacyPolicyPage = computed(() => {
  return route?.name === 'PrivacyPolicy'; // Verifique o nome da rota
})

</script>

<template>
  <div>
    <RouterView /> <!-- Onde o conteúdo da página será renderizado -->
    <CookieBanner v-if="!isPrivacyPolicyPage"/>
  </div>
</template>
