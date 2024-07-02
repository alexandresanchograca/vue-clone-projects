<template>
  <div v-if="headlineNews" class="latest-news-box">
    <h1>
      Últimas
      <i class="fa-solid fa-arrow-right"></i>
    </h1>
    <ul>
      <li v-for="(news,index) in smallNewsList" :key="news.title">
        <span>{{ index + 1 }}</span>
        <div class="headline-content">
          <p>{{ news.time }}</p>
          <NuxtLink :to="`/details/${news.title}`">{{ news.shortTitle }}</NuxtLink>
        </div>
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
  const limit = Math.min(5, headlineNews.articles.length);

  for (let news of generateLatestNews(limit)) {
    if (!news) continue;

    const time = news.publishedAt.substring("YYYY-MM-DDT".length, news.publishedAt.length - 1)
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
  align-items: center;
  justify-content: flex-end;
  width: 300px;
  max-height: 670px;
}

h1 {
  text-align: center;
  font-weight: bold;
  color: #00d700;
  margin-left: 12px;
  margin-right: 12px;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

h3 i {
  color: #00d700;
}

ul {
  list-style-type: none;
  padding: 0px;
}

li {
  display: flex;
  gap: 15px;
  align-items: center;
  font-size: large;
  margin: auto;
  cursor: pointer;
  margin: 10px;
  padding: 5px;
  line-height: 1.4rem;
}

li span {
  font-size: 2.8rem;
  font-weight: bold;
  text-align: center;
  color: #00d700;
  border: 3px solid #00d700;
  border-radius: 50%;
  padding: 1.3rem 1rem 0.9rem 1rem;
  box-sizing: border-box;
}

li div {
  display: flex;
  flex-direction: column;
}

.headline-content a {
  font-weight: bold;
  font-size: 0.95rem;
  text-decoration: none;
  color: inherit;
}

.headline-content > p:first-child {
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
