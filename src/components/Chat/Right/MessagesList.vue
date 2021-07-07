<template>
  <div class="chats-list" ref="chatsList">
    <MessageItem
      v-for="message in messages"
      :key="message.id"
      :message="message"
      :user="user"
    />
  </div>
</template>

<script>
import { nextTick, ref, watch } from "vue";
import MessageItem from "./MessageItem.vue";
export default {
  components: { MessageItem },
  props: { messages: Array, user: Object },
  setup(props) {
    const chatsList = ref(null);

    watch(
      () => props.messages,
      () => {
        nextTick(() => {
          // chatsList.value.scrollTo(0, chatsList.value.scrollHeight);
          chatsList.value.scroll({
            top: chatsList.value.scrollHeight,
            behavior: "smooth",
          });
        });
      }
    );

    return { chatsList };
  },
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
