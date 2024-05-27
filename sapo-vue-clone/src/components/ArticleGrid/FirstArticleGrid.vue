<template>
  <div class="first-main-article-grid">
    <div class="col first-col">
      <MainNewsBox :news="mainNews"></MainNewsBox>
      <SmallNewsBox :news="smallNews"></SmallNewsBox>
    </div>
    <div class="col sec-col">
      <LatestNews></LatestNews>
    </div>
    <div class="col third-col">
      <Markets :stocks="stocks"></Markets>
    </div>
  </div>
</template>

<script setup>
import MainNewsBox from "@/components/ArticleGrid/MainNewsBox.vue";
import SmallNewsBox from "@/components/ArticleGrid/SmallNewsBox.vue";
import LatestNews from "./LatestNews.vue";
import Markets from "./Markets.vue";
import getData from "@/composables/getData";
import { computed } from "vue";

const { getStocks, getNews } = getData();

const stocks = getStocks();
const news = getNews();

const mainNews = computed(() => {
  return news.findLast((news) => news.size === "M");
});

const smallNews = computed(() => {
  return news.findLast((news) => news.size === "S");
});
</script>

<style scoped>
.first-main-article-grid {
  display: flex;
  margin: 15px;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  gap: 20px;
}
.col > * {
  background-color: white;
}
.first-col {
  display: flex;
  flex-direction: column;
  max-width: 400px;
}
.sec-col {
  align-self: flex-end;
}
.third-col {
  align-self: flex-end;
}
</style>
