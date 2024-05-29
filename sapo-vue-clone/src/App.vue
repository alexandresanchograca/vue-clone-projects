<template>
  <div class="home">
    <HeaderBar></HeaderBar>
    <Navbar></Navbar>
    <TabsBar></TabsBar>
    <MainArticleImage :articleImg="mainArticleImg"></MainArticleImage>
    <div class="main-content">
      <StocksBar :stockItems="stockItems"></StocksBar>
      <BreakingNewsBar :breakingNews="breakingNews"></BreakingNewsBar>
      <FirstArticleGrid></FirstArticleGrid>
    </div>
    <div v-for="articleImg in articleImages" :key="articleImg.title">
      <ArticleImage :articleImg="articleImg"></ArticleImage>
      <div class="main-content">
        <ArticleGrid></ArticleGrid>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import MainArticleImage from "@/components/ArticleImages/MainArticleImage.vue";
import ArticleImage from "./components/ArticleImages/ArticleImage.vue";
import HeaderBar from "@/components/Header/HeaderBar.vue";
import Navbar from "@/components/Header/Navbar.vue";
import TabsBar from "@/components/Header/TabsBar.vue";
import FirstArticleGrid from "@/components/ArticleGrid/FirstArticleGrid.vue";
import ArticleGrid from "@/components/ArticleGrid/ArticleGrid.vue";
import StocksBar from "./components/ArticleGrid/StocksBar.vue";
import BreakingNewsBar from "@/components/ArticleGrid/BreakingNewsBar.vue";
import Footer from "./components/Footer/Footer.vue";
import getData from "./composables/getData";
import { computed } from "vue";

const { getArticleImages, getStocks, getBreakingNews } = getData();

const mainArticleImg = computed(() => {
  return getArticleImages().findLast((img) => img.mainArticle);
});

const articleImages = computed(() => {
  return getArticleImages().filter((img) => !img.mainArticle);
});

const stockItems = getStocks();
const breakingNews = getBreakingNews();
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");

:root {
  background-color: rgb(244, 244, 244);
}

* {
  margin: 0px;
  font-family: "Jersey Kanit", sans-serif;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.home {
  display: flex;
  flex-direction: column;
}
.main-content {
  display: block;
  margin: auto;
  max-width: 1120px;
}

.line-break-bar {
  align-self: flex-start;
  justify-content: center;
  width: 80%;
  margin-left: 20px;
  height: 2px;
  background-color: rgba(128, 128, 128, 0.176);
}

.author-note {
  font-size: 0.8rem;
  font-weight: 500;
  color: gray;
  margin-top: 1.2rem;
}
</style>
