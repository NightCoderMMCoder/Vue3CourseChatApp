<template>
  <ChatHeader :user="user" />
  <MessagesList :messages="messages" :user="user" />
  <MessageBox />
</template>

<script>
import { inject, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import ChatHeader from "../../../components/Chat/Shared/ChatHeader.vue";
import MessageBox from "../../../components/Chat/Right/MessageBox.vue";
import MessagesList from "../../../components/Chat/Right/MessagesList.vue";
import { db } from "../../../firebase/init";
import moment from "moment";

export default {
  components: { ChatHeader, MessageBox, MessagesList },
  async setup() {
    const route = useRoute();
    const router = useRouter();

    const authUser = inject("user");

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

    const messages = ref([]);
    const chatsRef = db
      .collection("chats")
      .doc(`${authUser.uid}+${userId}`)
      .collection("messages")
      .orderBy("createdAt");
    chatsRef.onSnapshot((snapshot) => {
      messages.value = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        createdAt: moment(new Date(doc.data().createdAt)).format("MM/DD/YYYY"),
      }));
    });

    return { user, messages };
  },
};
</script>

<style></style>
