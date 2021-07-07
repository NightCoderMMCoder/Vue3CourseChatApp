<template>
  <div class="contact-list">
    <UserItem v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script>
import UserItem from "./UserItem.vue";
export default {
  components: { UserItem },
  props: { users: Array },
};
</script>

<style scoped>
.contact-list {
  padding: 5px 0;
  height: 77.5vh;
  overflow-y: auto;
}
</style>
