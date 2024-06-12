<template>
  <div class="first-main-article-grid">
    <div class="col first-col">
      <MainNewsBox :news="mainNews" />
      <SmallNewsBox :news="smallNews" />
    </div>
    <div class="col sec-col">
      <LatestNews :newsList="headlineNews" />
    </div>
    <div class="col third-col">
      <Markets :stocks="stocks" />
    </div>
  </div>
</template>

<script setup>
import MainNewsBox from "@/components/ArticleGrid/MainNewsBox.vue";
import SmallNewsBox from "@/components/ArticleGrid/SmallNewsBox.vue";
import LatestNews from "./LatestNews.vue";
import Markets from "./Markets.vue";
import useData from "@/composables/useData";
import { computed } from "vue";

const { getStocks, getNewsList, getNewsListData, getHeadNewsListData } =
  useData();

const stocks = getStocks();
const dataList = getNewsListData();
const headlineNews = getHeadNewsListData();

const mainNews = computed(() => {
  const newsArr = dataList.splice(0, 1);

  if (newsArr.length) {
    return newsArr[0];
  }
});

const smallNews = computed(() => {
  const newsIndex = dataList.findIndex((news) => news.title.length < 56);
  const newsArr = dataList.splice(newsIndex, 1);
  if (newsArr.length) {
    return newsArr[0];
  }
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
