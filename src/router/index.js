import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Auth/Login.vue";
import Register from "../pages/Auth/Register.vue";
import ChatScreen from "../pages/Chat/ChatScreen.vue";
import WelcomeChat from "../pages/Chat/Right/WelcomeChat";
import ChatRoom from "../pages/Chat/Right/ChatRoom";
import { firebaseAuth } from "../firebase/init";

const routes = [
  {
    path: "/chat",
    name: "ChatScreen",
    component: ChatScreen,
    meta: {
      title: "Chat Screen",
      requiresAuth: true,
    },
    children: [
      {
        path: "",
        name: "WelcomeChat",
        component: WelcomeChat,
        meta: {
          title: "Welcome Chat",
        },
      },
      {
        path: ":userId",
        name: "ChatRoom",
        component: ChatRoom,
        meta: {
          title: "Chat Room",
        },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
      requiresGuest: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "Register",
      requiresGuest: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _, next) => {
  console.log(firebaseAuth.currentUser);
  document.title = to.meta.title;
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (firebaseAuth.currentUser) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (!firebaseAuth.currentUser) {
      next();
    } else {
      next({ name: "WelcomeChat" });
    }
  } else {
    next();
  }
});

export default router;
