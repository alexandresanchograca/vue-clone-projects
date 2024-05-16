<template>
  <div class="home">
    <HeaderBar></HeaderBar>
    <Navbar></Navbar>
    <TabsBar></TabsBar>
    <ArticleImage></ArticleImage>
    <div class="main-content">
      <NewsBar></NewsBar>
      <FirstArticleGrid></FirstArticleGrid>
    </div>
    <ArticleImage></ArticleImage>
    <div class="main-content">
      <ArticleGrid></ArticleGrid>
    </div>
  </div>
</template>

<script>
import ArticleImage from "@/components/ArticleImage.vue";
import HeaderBar from "@/components/Header/HeaderBar.vue";
import Navbar from "@/components/Header/Navbar.vue";
import TabsBar from "@/components/Header/TabsBar.vue";
import NewsBar from "@/components/NewsBar.vue";
import FirstArticleGrid from "@/components/ArticleGrid/FirstArticleGrid.vue";
import ArticleGrid from "@/components/ArticleGrid/ArticleGrid.vue";

export default {
  name: "HomeView",
  components: {
    HeaderBar,
    Navbar,
    TabsBar,
    ArticleImage,
    NewsBar,
    FirstArticleGrid,
    ArticleGrid,
  },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
}
.main-content {
  display: block;
  margin: auto;
  max-width: 1120px;
}
</style>
