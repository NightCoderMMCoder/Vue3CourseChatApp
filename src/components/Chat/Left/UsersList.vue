<template>
  <div class="contact-list">
    <UserItem />
    <UserItem />
    <UserItem />
    <UserItem />
    <UserItem />
  </div>
</template>

<script>
import UserItem from "./UserItem.vue";
export default {
  components: { UserItem },
};
</script>

<style scoped>
.contact-list {
  padding: 5px 0;
  height: 77.5vh;
  overflow-y: auto;
}
</style>
