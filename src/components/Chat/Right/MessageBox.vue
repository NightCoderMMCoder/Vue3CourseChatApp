<template>
  <form @submit.prevent="sendMessage">
    <div class="message-box">
      <input type="text" placeholder="Send message..." v-model.trim="text" />
      <i class="fas fa-paper-plane" @click="sendMessage"></i>
    </div>
  </form>
</template>

<script>
import { inject, ref } from "vue";
import { useRoute } from "vue-router";
import { db } from "../../../firebase/init";
export default {
  setup() {
    const user = inject("user");
    const route = useRoute();
    const otherUid = route.params.userId;

    const text = ref("");
    const sendMessage = async () => {
      if (!text.value) return;
      const newMessage = {
        text: text.value,
        createdAt: new Date().toString(),
        uid: user.uid,
      };
      const collectionRef = db.collection("chats");
      await collectionRef
        .doc(`${user.uid}+${otherUid}`)
        .collection("messages")
        .add(newMessage);
      text.value = "";

      delete newMessage.uid;

      await collectionRef
        .doc(`${otherUid}+${user.uid}`)
        .collection("messages")
        .add(newMessage);
    };
    return { text, sendMessage };
  },
};
</script>

<style scoped>
.message-box {
  position: fixed;
  bottom: 0;
  width: 75%;
  background: var(--primary);
  padding: 15px 10px;
  display: flex;
  align-items: center;
}
input {
  width: 100%;
  background: var(--input-background);
  outline: none;
  border: none;
  outline: none;
  padding: 12px 20px;
  border-radius: 50px;
  color: var(--input-color);
}
input::placeholder {
  color: var(--input-color);
}
.message-box .fas {
  padding: 12px;
  cursor: pointer;
  background: var(--input-background);
  border-radius: 50%;
  margin-left: 10px;
}
</style>
