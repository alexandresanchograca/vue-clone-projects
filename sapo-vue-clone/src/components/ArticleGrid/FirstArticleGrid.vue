<template>
  <div class="first-main-article-grid">
    <div class="col first-col">
      <MainNewsBox></MainNewsBox>
      <SmallNewsBox></SmallNewsBox>
    </div>
    <div class="col sec-col">
      <LatestNews></LatestNews>
    </div>
    <div class="col third-col">
      <Markets></Markets>
    </div>
  </div>
</template>

<script setup>
import MainNewsBox from "@/components/ArticleGrid/MainNewsBox.vue";
import SmallNewsBox from "@/components/ArticleGrid/SmallNewsBox.vue";
import LatestNews from "./LatestNews.vue";
import Markets from "./Markets.vue";
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
.third-col {
  align-self: flex-end;
}
</style>
