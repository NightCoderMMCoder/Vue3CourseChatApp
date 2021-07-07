<template>
  <div class="user-profile">
    <div class="user-info">
      <div class="user-img" v-if="user.name">
        {{ user.name.charAt(0).toUpperCase() }}
      </div>
      <div>
        <h3 class="user-name">{{ user.name }}</h3>
        <small class="status">{{ user.online ? "Online" : "Offline" }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { user: Object },
};
</script>

<style scoped>
.user-profile {
  background: none;
  color: white;
}
.router-link-exact-active .user-profile {
  background: #66666646;
}
.user-img {
  width: 60px;
  height: 60px;
  font-size: 25px;
}
</style>
