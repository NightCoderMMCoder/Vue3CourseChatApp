<template>
  <div class="chat-screen">
    <LeftChatScreen />
  </div>
</template>

<script>
import LeftChatScreen from "../../components/Chat/Left/LeftChatScreen.vue";
export default {
  components: { LeftChatScreen },
};
</script>

<style scoped>
.chat-screen {
  display: flex;
}
</style>
