<template>
  <div class="first-main-article-grid">
    <div class="col first-col">
      <MainNewsBox />
      <SmallNewsBox />
    </div>
    <div class="col sec-col">
      <LatestNews />
    </div>
    <div class="col third-col">
      <AdBox />
      <MarketsBox />
    </div>
  </div>
</template>

<script setup>
const headlineNews = inject("manchetesNews");
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 760px;
}
</style>
