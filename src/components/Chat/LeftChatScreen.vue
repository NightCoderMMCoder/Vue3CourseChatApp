<template>
  <div class="contact-card">
    <ChatHeader>
      <base-button @click="logout">Logout</base-button>
    </ChatHeader>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { firebaseAuth } from "../../firebase/init";
import ChatHeader from "./Shared/ChatHeader.vue";
export default {
  components: {
    ChatHeader,
  },
  setup() {
    const router = useRouter();
    const logout = async () => {
      await firebaseAuth.signOut();
      router.push({ name: "Login" });
    };
    return { logout };
  },
};
</script>

<style scoped>
.contact-card {
  width: 25%;
  border-right: 2px solid rgba(0, 0, 0, 0.116);
  min-height: 100vh;
}
</style>
