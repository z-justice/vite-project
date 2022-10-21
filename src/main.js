import "./style.css";
import "element-plus/dist/index.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from "./api";

const app = createApp(App);
app.provide('API',api)
app.use(router).use(store).use(api).mount("#app");
