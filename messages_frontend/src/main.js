import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createRouter, createWebHistory } from "vue-router";
import Messages from './components/MessagesComponent.vue'
import NewMessage from './components/NewMessage.vue'
import SingleMessage from './components/SingleMessage.vue'
import Register from './components/RegisterComponent.vue'
import Login from './components/LoginComponent.vue'

loadFonts()

const routes = [
  { path: "/", component: Messages},
  { path: "/NewMessage", component: NewMessage},
  { path: "/Message/:id", component: SingleMessage},
  { path: "/Register", component: Register},
  { path: "/Login", component: Login}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(store)
  .use(vuetify)
  .use(router)
  .mount('#app')
