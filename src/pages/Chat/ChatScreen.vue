<template>
  <div class="chat-screen">
    <LeftChatScreen />
    <div class="chat">
      <Suspense>
        <template #default>
          <router-view :key="$route.fullPath"></router-view>
        </template>
        <template #fallback>
          <h1>Loading...</h1>
        </template>
      </Suspense>
    </div>
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
.chat {
  width: 75%;
}
</style>
