import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

import BaseButton from "./components/UI/BaseButton.vue";
import { firebaseAuth } from "./firebase/init";
let app;
firebaseAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.component("BaseButton", BaseButton);

    app.use(router).mount("#app");
  }
});
