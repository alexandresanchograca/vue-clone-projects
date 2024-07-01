<template>
  <div v-for="content in articleContents" :key="content?.imageArticle?.title">
    <SidebarArticleImage
        v-if="content?.imageArticle?.relatedNews"
        :articleImg="content.imageArticle"
    />
    <ArticleImage v-else :articleImg="content?.imageArticle"/>
    <div class="main-content">
      <ArticleGrid :articleContents="content?.gridArticles"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const expressoNews: Some<NewsArticles> = inject("expressoNews");
const observadorNews: Some<NewsArticles> = inject("observadorNews");

const hasImageArticle = (): boolean => <boolean>(
    expressoNews?.articles.length && expressoNews?.articles[0].title.length < 100
)

const hasGridContents = (): boolean => <boolean>(observadorNews && observadorNews.articles.length >= 5);

function* generateGridArticles(limit: number) {
  for (let i = 0; i < limit; i++) {
    yield observadorNews?.articles.splice(i, 1)[0];
  }
}

const articleContent = (): Some<ArticleContent> => {
  if (hasImageArticle() && hasGridContents()) {
    let imageArticle = null;
    imageArticle = expressoNews?.articles.splice(0, 1)[0];

    let gridArticles = [];
    for (let article of generateGridArticles(5)) {
      gridArticles.push(article);
    }

    return {imageArticle, gridArticles}
  }
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
