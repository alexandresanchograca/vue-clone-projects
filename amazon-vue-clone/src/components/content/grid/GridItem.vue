<template>
  <div v-if="category" class="grid-item">
    <h3 class="bold">{{ category.title }}</h3>
    <img :src="require(`@/assets/grid/${category.imageName}`)" />
    <a href="#top">Ver mais</a>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["category"]);
</script>

<style scoped>
img {
  cursor: pointer;
  flex-shrink: 0;
  margin-bottom: auto;
}
</style>
