import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createRouter, createWebHistory } from "vue-router";
import Messages from './components/MessagesComponent.vue'

loadFonts()

const routes = [{ path: "/", component: Messages}];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(store)
  .use(vuetify)
  .use(router)
  .mount('#app')
