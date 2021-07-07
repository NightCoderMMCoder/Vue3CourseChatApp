<template>
  <div class="chats-list">
    <MessageItem
      v-for="message in messages"
      :key="message.id"
      :message="message"
    />
  </div>
</template>

<script>
import MessageItem from "./MessageItem.vue";
export default {
  components: { MessageItem },
  props: { messages: Array },
};
</script>

<style scoped>
.chats-list {
  padding: 15px 10px;
  height: 77.52vh;
  overflow-y: auto;
  width: 100%;
}
</style>
