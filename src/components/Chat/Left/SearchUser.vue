<template>
  <div class="search">
    <input
      type="text"
      placeholder="Search..."
      :value="search"
      @input="(e) => $emit('update:search', e.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: { search: String },
  emits: ["update:search"],
};
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
