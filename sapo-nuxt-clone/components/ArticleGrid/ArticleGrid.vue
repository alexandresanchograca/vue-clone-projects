<template>
  <div class="main-article-grid">
    <BigNewsBox :news="articleContents[0]"></BigNewsBox>
    <NewsBox v-for="news in articleContents.slice(0)" :key="news.title" :news="news"></NewsBox>
  </div>
</template>


<script setup>
const props = defineProps(["articleContents"]);
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
