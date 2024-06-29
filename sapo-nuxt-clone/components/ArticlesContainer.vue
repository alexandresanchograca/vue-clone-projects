<template>
  <div v-for="articleImg in articleImages" :key="articleImg.title">
    <SidebarArticleImage
      v-if="Math.random() * 100 < 25"
      :articleImg="articleImg"
    />
    <ArticleImage v-else :articleImg="articleImg" />
    <div class="main-content">
      <ArticleGrid />
    </div>
  </div>
</template>

<script setup>
const newsListData = inject("expressoNews");

const articleImages = computed(() => {
  const newsList = [];

  newsListData.articles.forEach((news, index) => {
    if (news.source.name === "Expresso.pt" && news.title.length < 100) {
      newsList.push(...newsListData.articles.splice(index, 1));
    }
  });
  return newsList;
});
</script>

<style scoped></style>
