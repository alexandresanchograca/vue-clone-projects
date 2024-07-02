<template>
  <div v-if="headlineNews" class="latest-news-box">
    <h3>
      Últimas
      <i class="fa-solid fa-arrow-right"></i>
    </h3>
    <ul>
      <li v-for="news in smallNewsList" :key="news.title">
        <p>{{ news.time }}</p>
        <NuxtLink :to="`/details/${news.titleUri}`">{{ news.shortTitle }}</NuxtLink>
      </li>
    </ul>
    <a class="more-news">+</a>
  </div>
</template>

<script setup>
const headlineNews = inject("manchetesNews");

function* generateLatestNews(limit) {
  for (let i = 0; i < limit; i++) {
    yield headlineNews.articles.splice(i, 1)[0];
  }
}

const smallNewsList = computed(() => {
  const newsList = [];
  const limit = Math.min(20, headlineNews.articles.length);

  for (let news of generateLatestNews(limit)) {
    if (!news) continue;

    const time = news.publishedAt.substring("YYYY-MM-DDT".length, news.publishedAt.length - 4)
    let shortTitle = news.title;

    if (shortTitle?.length > 70) {
      shortTitle = shortTitle.substring(0, 40) + "...";
    } else if (shortTitle?.length < 30 && news.description.length > 70) {
      shortTitle = news.description.substring(0, 40) + "...";
    }
    newsList.push({...news, time, shortTitle});
  }
  return newsList;
});
</script>

<style scoped>
.latest-news-box {
  display: flex;
  flex-direction: column;
  width: 240px;
  max-height: 760px;
}

h3 {
  text-align: center;
  font-weight: bold;
  margin-left: 12px;
  margin-right: 12px;
  padding: 10px;
  color: rgb(0, 0, 0);
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

h3 i {
  color: #00d700;
}

ul {
  overflow-y: scroll;
  list-style-type: none;
  padding: 0px;
}

li {
  font-size: large;
  margin: auto;
  margin: 10px;
  padding: 5px;
  line-height: 1.4rem;
}

li a {
  font-weight: bold;
  text-decoration: none;
  color: #00b100;
  cursor: pointer;
}

li p {
  color: gray;
  font-size: 0.8rem;
}

.more-news {
  display: block;
  text-align: center;
  font-size: x-large;
  font-weight: bold;
  cursor: pointer;
  color: #009d00;
  padding: 20px;
}
</style>
