import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

import BaseButton from "./components/UI/BaseButton.vue";

const app = createApp(App);

app.component("BaseButton", BaseButton);

app.use(router).mount("#app");
