<template>
  <div class="welcome-chat">
    <div class="user-img">{{ user.name.charAt(0).toUpperCase() }}</div>
    <h3>Hi, {{ user.name }}</h3>
    <p>Please select a chat to start messaging.</p>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const user = inject("user");
    return { user };
  },
};
</script>

<style scoped>
.welcome-chat {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
}
h3 {
  margin: 10px 0;
}
</style>
