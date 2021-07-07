<template>
  <div class="user-profile">
    <div class="user-info">
      <div class="user-img" v-if="user.name">
        {{ user.name.charAt(0).toUpperCase() }}
      </div>
      <div>
        <h3 class="user-name">{{ user.name }}</h3>
        <small class="status">Online</small>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const user = inject("user");
    return { user };
  },
};
</script>

<style></style>
