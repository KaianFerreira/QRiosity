<script setup lang="ts">
import { ref, onMounted } from 'vue';

const cookiesAceitos = ref(false)

const aceitarCookies = () => {
  cookiesAceitos.value = true;
  localStorage.setItem("cookiesAceitos", "true"); // Armazena a aceitação em localStorage
}

onMounted(() => {
  if (localStorage.getItem("cookiesAceitos")) {
    cookiesAceitos.value = true;
  }
})
</script>

<template>
  <div v-if="!cookiesAceitos" class="cookie-banner">
    <p>
      Esta aplicação utiliza cookies para melhorar sua experiência. Ao continuar, você concorda com nossa
      <a target="_blank" href="/privacy-policy">Política de Privacidade</a> e o uso de cookies.
    </p>
    <button
      class="py-2 px-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
      @click="aceitarCookies">Aceitar</button>
  </div>
</template>

<style scoped>
a {
  color: rgb(197, 110, 255);
}

.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
  z-index: 1000;
}

.cookie-banner button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
