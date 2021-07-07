<template>
  <div class="contact-card">
    <ChatHeader :user="user">
      <base-button @click="logout">Logout</base-button>
    </ChatHeader>
    <SearchUser v-model:search="search" />
    <UsersList :users="searchUsers" />
  </div>
</template>

<script>
import { computed, inject, ref, watch } from "vue";
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

    const search = ref("");
    const activeSearch = ref("");
    watch(search, (val) => {
      setTimeout(() => {
        if (val === search.value) {
          activeSearch.value = val;
        }
      }, 300);
    });

    const searchUsers = computed(() => {
      if (activeSearch.value) {
        return users.value.filter((u) =>
          u.name.toUpperCase().includes(search.value.toUpperCase())
        );
      }
      return usersWithoutAuthUser.value;
    });

    return { logout, searchUsers, search, user };
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
