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
const loaded = ref(false);

const stockItems = await useStocks();
provide("stockItems", stockItems);

const {observador, expresso, manchetes } = await useNews();

if(observador && expresso && manchetes) {
  provide("expressoNews", expresso);
  provide("observadorNews", observador);
  provide("manchetesNews", manchetes);
 loaded.value = true;
}

</script>
