<template>
  <div v-for="articleImg in articleImages" :key="articleImg.title">
    <SidebarArticleImage
      v-if="Math.random() * 100 < 25"
      :articleImg="articleImg"
    ></SidebarArticleImage>
    <ArticleImage v-else :articleImg="articleImg"></ArticleImage>
    <div class="main-content">
      <ArticleGrid></ArticleGrid>
    </div>
  </div>
</template>

<script setup>
import ArticleImage from "@/components/ArticleImages/ArticleImage.vue";
import SidebarArticleImage from "@/components/ArticleImages/SidebarArticleImage.vue";
import ArticleGrid from "@/components/ArticleGrid/ArticleGrid.vue";
import getData from "@/composables/getData";
import { computed } from "vue";

const { getNewsListData } = getData();

const newsListData = getNewsListData();

const articleImages = computed(() => {
  const newsList = [];

  newsListData.forEach((news, index) => {
    if (news.source.name === "Expresso.pt" && news.title.length < 100) {
      newsList.push(...newsListData.splice(index, 1));
    }
  });
  return newsList;
});
</script>

<style scoped></style>
