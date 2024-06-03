<template>
  <div class="main-article-grid">
    <BigNewsBox :news="xLargeNews"></BigNewsBox>
    <div v-for="news in dataNews" :key="news.title">
      <NewsBox :news="news"></NewsBox>
    </div>
  </div>
</template>

<script setup>
import NewsBox from "./NewsBox.vue";
import BigNewsBox from "./BigNewsBox.vue";
import getData from "@/composables/getData";
import { computed, onBeforeMount } from "vue";

const { getNewsList, getNewsListData } = getData();

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
