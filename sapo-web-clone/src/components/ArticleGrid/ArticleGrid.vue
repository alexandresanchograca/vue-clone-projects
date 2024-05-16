<template>
  <div class="main-article-grid">
    <div class="col first-col">
      <MainNewsBox class="main-news-box"></MainNewsBox>
      <NewsBox></NewsBox>
    </div>
    <div class="col first-col">
      <MainNewsBox class="main-news-box"></MainNewsBox>
      <NewsBox></NewsBox>
    </div>
    <div class="col first-col">
      <NewsBox></NewsBox>
      <NewsBox></NewsBox>
    </div>
  </div>
</template>

<script>
import MainNewsBox from "@/components/ArticleGrid/MainNewsBox.vue";
import SmallNewsBox from "@/components/ArticleGrid/SmallNewsBox.vue";
import NewsBox from "./NewsBox.vue";
import LatestNews from "./LatestNews.vue";
import Markets from "./Markets.vue";

export default {
  components: {
    MainNewsBox,
    SmallNewsBox,
    NewsBox,
    LatestNews,
    Markets,
  },
};
</script>

<style scoped>
.main-article-grid {
  margin: 15px;
  margin-top: 40px;
  display: flex;
  align-items: start;
  max-height: 650px;
  gap: 20px;
}
.col > * {
  background-color: white;
}
.first-col {
  display: flex;
  flex-direction: column;
}
.main-news-box {
  margin: auto;
  margin-bottom: 20px;
  flex-grow: 1;
  width: fit-content;
}
.latest-news-box {
  width: 240px;
}
.markets-box {
  width: 340px;
}
</style>
