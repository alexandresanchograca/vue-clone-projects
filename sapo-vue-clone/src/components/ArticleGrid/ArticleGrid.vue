<template>
  <div class="main-article-grid">
    <BigNewsBox :news="xLargeNews"></BigNewsBox>
    <NewsBox v-for="news in dataNews" :key="news.title" :news="news"></NewsBox>
  </div>
</template>

<script setup>
import NewsBox from "./NewsBox.vue";
import BigNewsBox from "./BigNewsBox.vue";
import useData from "@/composables/useData";
import { computed, onBeforeMount } from "vue";

const { getNewsListData } = useData();

const xLargeNews = computed(() => {
  return getNewsListData().splice(0, 1)[0];
});

const dataNews = computed(() => {
  return getNewsListData().splice(0, 4);
});
</script>

<style scoped>
.main-article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}
.main-article-grid > * {
  margin: 20px;
}
</style>
