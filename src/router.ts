// src/router.js
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// Importe seus componentes de páginas aqui
import HomePage from './views/HomePage.vue';
import PrivacyPolicy from './views/PrivacyPolicy.vue';
// import NotFoundPage from './views/NotFoundPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',  // Rota catch-all para redirecionar para a página de erro 404
    name: 'NotFound',
    component: HomePage,  // Ou pode redirecionar para uma página específica como HomePage
  },
  {
    path: '/:url',
    name: 'Home',
    component: HomePage, // Componente da página inicial
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy, // Componente da página de política de privacidade
  },
  // Adicione outras rotas aqui conforme necessário
];

const router = createRouter({
  history: createWebHistory(), // Histório do navegador
  routes,
});

export default router;
