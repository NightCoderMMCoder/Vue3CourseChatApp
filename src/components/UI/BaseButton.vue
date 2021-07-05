<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  display: flex;
  background: var(--primary);
  color: white;
  border: 1px solid var(--primary);
  padding: 10px 10px;
  border-radius: 5px;
  font-family: inherit;
  cursor: pointer;
  font-size: 16px;
  transition: 0.2s linear;
}
button:active {
  transform: scale(0.9);
}
</style>
