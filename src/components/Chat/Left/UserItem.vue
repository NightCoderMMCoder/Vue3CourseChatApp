<template>
  <router-link :to="{ name: 'ChatRoom', params: { userId: user.id } }">
    <ChatHeader :user-img="userImg" :user="user" />
  </router-link>
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
  color: white;
}
.router-link-exact-active .user-profile {
  background: #66666646;
}
</style>
