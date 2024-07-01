<template>
  <div class="icon-bar">
    <slot class="icon"/>
  </div>
</template>

<script setup>
const props = defineProps(["news"]);
</script>

<style scoped>
.icon-bar {
  display: flex;
  align-items: center;
  color: green;
}

.icon-bar > * {
  margin-right: 10px;
  font-size: 0.8rem;
  color: rgb(0, 170, 0);
  padding: 10px;
  border-radius: 100px;
  cursor: pointer;
  border: 1px solid green;
}

.icon-bar > *:hover {
  color: white;
  background-color: green;
}
</style>
