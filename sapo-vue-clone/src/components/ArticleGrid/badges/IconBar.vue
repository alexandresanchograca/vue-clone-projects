<template>
  <div class="icon-bar">
    <i class="fa-solid fa-share icon"></i>
    <i class="fa-regular fa-comment icon"></i>
    <div v-if="news" v-for="tag in news.tags" :key="tag" class="green-pill">
      {{ tag }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["news"]);
</script>

<style scoped>
.icon {
  font-size: 1.2rem;
  color: rgb(0, 170, 0);
  cursor: pointer;
}

.icon-bar {
  display: flex;
  align-items: center;
  color: green;
  padding-top: 20px;
  margin-top: 20px;
  width: 100%;
}

.icon-bar > * {
  margin-right: 40px;
}

.green-pill {
  align-self: flex-end;
  font-size: small;
  border: 1px solid green;
  border-radius: 20px;
  padding: 5px;
  margin-left: auto;
}

.green-pill:hover {
  color: white;
  background-color: green;
}
</style>
