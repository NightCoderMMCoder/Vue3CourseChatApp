<template>
  <router-view />
</template>

<script>
import { provide, reactive } from "vue";
import { firebaseAuth } from "./firebase/init";
export default {
  setup() {
    const user = reactive({});
    firebaseAuth.onAuthStateChanged((_user) => {
      if (_user) {
        user.name = _user.displayName;
        user.email = _user.email;
        user.uid = _user.uid;
        user.online = true;
      } else {
        user.name = "";
        user.email = "";
        user.uid = "";
        user.online = false;
      }
    });
    provide("user", user);

    const updateUser = (name) => {
      user.name = name;
    };
    provide("updateUser", updateUser);
  },
};
</script>
