<template>
  <div class="message-container" :class="{ sender: message.uid }">
    <div class="user-img">
      {{
        message.uid
          ? authUser.name.charAt(0).toUpperCase()
          : user.name.charAt(0).toUpperCase()
      }}
    </div>
    <div class="message-text">
      <h3>{{ message.text }}</h3>
      <small>{{ message.createdAt }}</small>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  props: { message: Object, user: Object },
  setup() {
    const authUser = inject("user");

    return { authUser };
  },
};
</script>

<style scoped>
.message-container {
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
}
.message-container .user-img {
  width: 50px;
  height: 50px;
  font-size: 20px;
}
.message-text {
  margin-left: 10px;
  position: relative;
  max-width: 400px;
}
.message-text h3 {
  background: var(--primary);
  padding: 10px;
  border-radius: 20px;
  font-weight: normal;
}
.message-text small {
  width: 200px;
  position: absolute;
  bottom: -23px;
  color: var(--input-color);
  font-size: 14px;
}

.sender {
  flex-direction: row-reverse;
}
.message-container.sender .user-img {
  background: #387c6d;
}
.sender .message-text {
  margin-right: 10px;
}
.sender .message-text h3 {
  background: #387c6d;
}
.sender .message-text small {
  right: 10px;
  text-align: right;
}
h3::selection {
  background: #387c6d;
}
.sender h3::selection {
  background: #363636;
}
</style>
