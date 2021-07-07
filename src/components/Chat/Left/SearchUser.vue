<template>
  <div class="search">
    <input type="text" placeholder="Search..." />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.search {
  background: var(--primary);
  padding: 15px 10px;
}
.search input {
  width: 100%;
  background: var(--input-background);
  outline: none;
  border: none;
  outline: none;
  padding: 12px 20px;
  border-radius: 50px;
  color: var(--input-color);
}
.search input::placeholder {
  color: var(--input-color);
}
</style>
