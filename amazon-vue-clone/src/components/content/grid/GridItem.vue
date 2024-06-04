<template>
  <div v-if="category" class="grid-item">
    <h3 class="bold">
      {{
        category.category.charAt(0).toUpperCase() + category.category.slice(1)
      }}
    </h3>
    <img v-if="category.thumbnail" :src="category.thumbnail" />
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
