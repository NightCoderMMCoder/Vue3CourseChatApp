<template>
  <div class="user-profile" v-if="user.name">
    <div class="user-info">
      <div class="user-img" v-if="user.name" :style="userImg">
        {{ user.name.charAt(0).toUpperCase() }}
      </div>
      <div>
        <h3 class="user-name">{{ user.name }}</h3>
        <small class="status">{{ user.online ? "Online" : "Offline" }}</small>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: { userImg: Object, user: Object },
};
</script>

<style></style>
