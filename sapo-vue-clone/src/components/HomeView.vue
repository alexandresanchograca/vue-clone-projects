<template>
  <div class="home">
    <HeaderBar></HeaderBar>
    <Navbar></Navbar>
    <TabsBar></TabsBar>
    <ArticleImage></ArticleImage>
    <div class="main-content">
      <FirstArticleGrid></FirstArticleGrid>
    </div>
    <ArticleImage></ArticleImage>
    <div class="main-content">
      <ArticleGrid></ArticleGrid>
    </div>
  </div>
</template>

<script setup>
import ArticleImage from "@/components/ArticleImages/MainArticleImage.vue";
import HeaderBar from "@/components/Header/HeaderBar.vue";
import Navbar from "@/components/Header/Navbar.vue";
import TabsBar from "@/components/Header/TabsBar.vue";
import FirstArticleGrid from "@/components/ArticleGrid/FirstArticleGrid.vue";
import ArticleGrid from "@/components/ArticleGrid/ArticleGrid.vue";
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
