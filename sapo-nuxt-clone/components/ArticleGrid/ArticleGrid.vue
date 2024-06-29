<template>
  <div class="main-article-grid" >
    <div v-for="(article, index) in articleContents" :key="article?.title">
      <BigNewsBox v-if="index === 1" :news="article"></BigNewsBox>
      <NewsBox v-else :news="article"></NewsBox>
    </div>
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
