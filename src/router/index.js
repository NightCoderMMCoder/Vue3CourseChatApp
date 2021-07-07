import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Auth/Login.vue";
import Register from "../pages/Auth/Register.vue";
import ChatScreen from "../pages/Chat/ChatScreen.vue";
import WelcomeChat from "../pages/Chat/Right/WelcomeChat";
import ChatRoom from "../pages/Chat/Right/ChatRoom";

const routes = [
  {
    path: "/chat",
    name: "ChatScreen",
    component: ChatScreen,
    children: [
      {
        path: "",
        name: "WelcomeChat",
        component: WelcomeChat,
      },
      {
        path: ":userId",
        name: "ChatRoom",
        component: ChatRoom,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
