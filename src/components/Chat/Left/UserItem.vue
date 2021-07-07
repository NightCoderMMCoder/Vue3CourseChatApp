<template>
  <div class="user-profile">
    <div class="user-info">
      <div class="user-img">
        A
      </div>
      <div>
        <h3 class="user-name">Aung Myat Oo</h3>
        <small class="status">Online</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
