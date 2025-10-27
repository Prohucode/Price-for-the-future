import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import persistedState from "pinia-plugin-persistedstate";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App);
const pinia = createPinia();
pinia.use(persistedState);

app.use(vuetify);
app.use(MotionPlugin);
app.use(pinia);
app.use(router);
app.mount("#app");
