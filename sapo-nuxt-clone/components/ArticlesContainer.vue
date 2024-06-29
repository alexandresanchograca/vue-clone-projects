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
const data = await useNews();
const newsListData = data.expresso.articles;

const articleImages = computed(() => {
  const newsList = [];

  newsListData.forEach((news, index) => {
    if (news.source.name === "Expresso.pt" && news.title.length < 100) {
      newsList.push(...newsListData.splice(index, 1));
    }
  });
  return newsList;
});
</script>

<style scoped></style>
