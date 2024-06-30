<template>
  <div v-for="content in articleContents" :key="content.imageArticle.title">
    <SidebarArticleImage
        v-if="Math.random() * 100 < 25"
        :articleImg="content.imageArticle"
    />
    <ArticleImage v-else :articleImg="content.imageArticle"/>
    <div class="main-content">
      <ArticleGrid :articleContents="content.gridArticles"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const expressoNews: NewsArticles = inject("expressoNews");
const observadorNews: NewsArticles = inject("observadorNews");

const hasImageArticle = (): boolean => (
    expressoNews.articles.length && expressoNews.articles[0].title.length < 100
)

const hasGridContents = (): boolean => (observadorNews.articles.length >= 6);

function* generateGridArticles(limit: number) {
  for (let i = 0; i < limit; i++) {
    yield observadorNews.articles.splice(i, 1)[0];
  }
}

const articleContent = (): ArticleContent => {
  if (hasImageArticle() && hasGridContents()) {
    let imageArticle = null;
    imageArticle = expressoNews.articles.splice(0, 1)[0];

    let gridArticles = [];
    for (let article of generateGridArticles(4)) {
      gridArticles.push(article);
    }

    return {imageArticle, gridArticles}
  }

  return null;
};

const articleContents = computed(() => {

  const articleContents = [];
  while (hasImageArticle() && hasGridContents()) {
    const obj = articleContent();
    articleContents.push(obj);
  }

  return articleContents;
})
</script>

<style scoped></style>
