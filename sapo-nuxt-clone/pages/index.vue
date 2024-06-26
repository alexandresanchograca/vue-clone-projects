<template>
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
</template>

<script setup>
import MainArticleImage from "@/components/ArticleImages/MainArticleImage.vue";
import ArticlesContainer from "@/components/ArticlesContainer.vue";
import HeaderBar from "@/components/Header/HeaderBar.vue";
import HeaderNavbar from "@/components/Header/HeaderNavbar.vue";
import HeaderTabsBar from "@/components/Header/HeaderTabsBar.vue";
import MainArticleGrid from "@/components/ArticleGrid/MainArticleGrid.vue";
import StocksBar from "@/components/ArticleGrid/StocksBar.vue";
import BreakingNewsBar from "@/components/ArticleGrid/BreakingNewsBar.vue";
import FooterDiv from "@/components/Footer/FooterDiv.vue";
import useData from "@/composables/useData";
import { ref } from "vue";

const { getNewsData } = useData();
const loaded = ref(false);

getNewsData().then((resp) => {
  if (!resp.error) {
    loaded.value = true;
  }
});
</script>
