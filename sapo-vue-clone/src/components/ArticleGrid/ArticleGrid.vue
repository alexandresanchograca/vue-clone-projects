<template>
  <div class="main-article-grid">
    <BigNewsBox :news="xLargeNews"></BigNewsBox>
    <div v-for="news in mediumNews">
      <NewsBox :news="news"></NewsBox>
    </div>
  </div>
</template>

<script setup>
import NewsBox from "./NewsBox.vue";
import BigNewsBox from "./BigNewsBox.vue";
import getData from "@/composables/getData";
import { computed } from "vue";

const { getStocks, getNewsList, getLatestNews } = getData();

const xLargeNews = computed(() => {
  return getNewsList().findLast((news) => news.size === "XL");
});

const mediumNews = computed(() => {
  return getNewsList()
    .filter((news) => news.size === "M")
    .slice(0, 4);
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
