<template>
  <div class="home">
    <HeaderBar />
    <HeaderNavbar />
    <HeaderTabsBar />
    <div v-if="loaded">
      <MainArticleImage />
      <div class="main-content">
        <StocksBar />
        <BreakingNewsBar />
        <MainArticleGrid />
      </div>
      <ArticlesContainer />
    </div>
    <div v-else class="loading-placeholder">Loading...</div>
    <FooterDiv />
  </div>
</template>

<script setup>
import MainArticleImage from "@/components/ArticleImages/MainArticleImage.vue";
import ArticlesContainer from "@/components/ArticlesContainer.vue";
import HeaderBar from "@/components/Header/HeaderBar.vue";
import HeaderNavbar from "@/components/Header/HeaderNavbar.vue";
import HeaderTabsBar from "@/components/Header/HeaderTabsBar.vue";
import MainArticleGrid from "@/components/ArticleGrid/MainArticleGrid.vue";
import StocksBar from "./components/ArticleGrid/StocksBar.vue";
import BreakingNewsBar from "@/components/ArticleGrid/BreakingNewsBar.vue";
import FooterDiv from "./components/Footer/FooterDiv.vue";
import useData from "./composables/useData";
import { ref } from "vue";

const { getNewsData } = useData();
const loaded = ref(false);

getNewsData().then((resp) => {
  if (!resp.error) {
    loaded.value = true;
  }
});
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
