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
import useStocks from "~/composables/useStocks.ts";
import useNews from "~/composables/useNews.ts";

const { getNewsData } = useData();
const loaded = ref(false);

const data = await useNews();

useNews().then((resp) => {
  if (!resp.error) {
    loaded.value = true;
  }
});

getNewsData().then((resp) => {
  if (!resp.error) {
    loaded.value = true;
  }
});
</script>
