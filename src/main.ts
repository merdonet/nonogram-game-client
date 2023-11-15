import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import store from "./store";
import { vuetify } from "./plugins/vuetify";

createApp(App).use(vuetify).use(store).mount("#app");
