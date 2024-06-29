<template>
  <div class="main-article-grid">
    <BigNewsBox :news="xLargeNews"></BigNewsBox>
    <NewsBox v-for="news in dataNews" :key="news.title" :news="news"></NewsBox>
  </div>
</template>

<script setup>
const data = await useNews();

const xLargeNews = computed(() => {
  return  data.observador.articles.splice(0, 1)[0];
});

const dataNews = computed(() => {
  return data.observador.articles.splice(0, 4);
});
</script>

<style scoped>
.main-article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}
.main-article-grid > * {
  margin: 20px;
}
</style>
