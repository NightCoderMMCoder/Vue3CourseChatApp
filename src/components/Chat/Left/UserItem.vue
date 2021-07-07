<template>
  <ChatHeader :user-img="userImg" :user="user" />
</template>

<script>
import { computed } from "vue";
import ChatHeader from "../Shared/ChatHeader.vue";
export default {
  components: { ChatHeader },
  props: { user: Object },
  setup() {
    const userImg = computed(() => ({
      width: "60px",
      height: "60px",
      "font-size": "25px",
    }));
    return { userImg };
  },
};
</script>

<style scoped>
.user-profile {
  background: none;
}
.router-link-exact-active .user-profile {
  background: #66666646;
}
</style>
