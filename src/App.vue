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
      } else {
        user.name = "";
        user.email = "";
        user.uid = "";
      }
    });
    provide("user", user);
  },
};
</script>
