<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted, defineOptions } from 'vue';

defineOptions({
  name: 'NotFoundPage'
})

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push('/');  // Redireciona automaticamente para a página inicial
  }, 3000);  // Após 3 segundos
})
</script>

<template>
  <div>
    <h1>404 - Página não encontrada!</h1>
    <p>O link que você tentou acessar não existe. Você será redirecionado para a página inicial.</p>
  </div>
</template>

