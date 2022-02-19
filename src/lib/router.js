import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import Pokedex from '../pages/Pokedex.vue';
import CardGame from '../pages/CardGame.vue';
import Calculator from '../pages/Calculator.vue';
import Rules from '../pages/Rules.vue';

const routes = [
  { path: '/', component: Home},
  { path: '/pokedex', component: Pokedex },
  { path: '/home', component: Home },
  { path: '/cardgame', component: CardGame },
  { path: '/calculator', component: Calculator },
  { path: '/rules', component: Rules },
];

// Here we create our own Vue Router Instance
// and define the paths we can then use.
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
