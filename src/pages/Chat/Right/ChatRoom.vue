<template>
  <ChatHeader :user="user" />
  <MessageBox />
</template>

<script>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import ChatHeader from "../../../components/Chat/Shared/ChatHeader.vue";
import MessageBox from "../../../components/Chat/Right/MessageBox.vue";
import { db } from "../../../firebase/init";

export default {
  components: { ChatHeader, MessageBox },
  async setup() {
    const route = useRoute();
    const router = useRouter();

    const user = reactive({});

    const userId = route.params.userId;
    const docRef = db.collection("users").doc(userId);
    const doc = await docRef.get();
    if (!doc.exists) {
      router.replace({ name: "WelcomeChat" });
    } else {
      user.name = doc.data().name;
      user.email = doc.data().email;
      user.online = doc.data().online;
      user.id = doc.id;
    }
    return { user };
  },
};
</script>

<style></style>
