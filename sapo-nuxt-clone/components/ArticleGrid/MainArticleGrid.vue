<template>
  <div class="first-main-article-grid">
    <div class="col first-col">
      <MainNewsBox :news="mainNews" />
      <SmallNewsBox :news="smallNews" />
    </div>
    <div class="col sec-col">
      <LatestNews :newsList="headlineNews" />
    </div>
    <div class="col third-col">
      <AdBox />
      <MarketsBox :stocks="stocks" />
    </div>
  </div>
</template>

<script setup>
const { getStocks, getNewsList, getNewsListData, getHeadNewsListData } =
  useData();

const stocks = getStocks();
const dataList = getNewsListData();
const headlineNews = getHeadNewsListData();

const mainNews = computed(() => {
  const newsArr = dataList.splice(0, 1);

  if (newsArr.length) {
    return newsArr[0];
  }
});

const smallNews = computed(() => {
  const newsIndex = dataList.findIndex((news) => news.title.length < 56);
  const newsArr = dataList.splice(newsIndex, 1);
  if (newsArr.length) {
    return newsArr[0];
  }
});
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
