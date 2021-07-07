<template>
  <div class="contact-card">
    <ChatHeader>
      <base-button @click="logout">Logout</base-button>
    </ChatHeader>
    <SearchUser />
    <UsersList :users="usersWithoutAuthUser" />
  </div>
</template>

<script>
import { computed, inject, ref } from "vue";
import { useRouter } from "vue-router";
import { firebaseAuth, db } from "../../../firebase/init";
import ChatHeader from "../Shared/ChatHeader.vue";
import SearchUser from "./SearchUser.vue";
import UsersList from "./UsersList.vue";
export default {
  components: {
    ChatHeader,
    SearchUser,
    UsersList,
  },
  setup() {
    const user = inject("user");
    const router = useRouter();
    const logout = async () => {
      await db
        .collection("users")
        .doc(firebaseAuth.currentUser.uid)
        .update({
          online: false,
        });
      await firebaseAuth.signOut();
      router.push({ name: "Login" });
    };

    const users = ref([]);

    const collectionRef = db.collection("users").orderBy("createdAt", "desc");
    collectionRef.onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      users.value = data;
    });

    const usersWithoutAuthUser = computed(() =>
      users.value.filter((u) => u.id !== user.uid)
    );

    return { logout, usersWithoutAuthUser };
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
