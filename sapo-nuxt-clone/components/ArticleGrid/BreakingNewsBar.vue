<template>
  <div v-if="breakingNews" class="breaking-news-bar">
    <div class="markets-bar">
      <div v-if="liveBreakingNews" class="red-box live-news">Em Direto</div>
      <NuxtLink :to="`/details/${liveBreakingNews.title}`">{{ liveBreakingNews.title }}</NuxtLink>
      <div v-if="liveBreakingNews" class="arrow-square">
        <div class="square-box">
          <div class="skewed-box">
            <NuxtLink :to="`/details/${liveBreakingNews.title}`"><i class="fa-solid fa-arrow-right"></i></NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="line-break-bar"></div>
    <div v-if="pastBreakingNews" class="news-bar">
      <div v-for="news in pastBreakingNews" :key="news.title" class="news-item">
        <i class="fa-regular fa-clock"></i>
        <NuxtLink :to="`/details/${news.title}`">{{ news.title }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const breakingNews = inject("manchetesNews");

const liveBreakingNews = computed(() => {
  return breakingNews.articles.findLast((news) => news.title.length < 70);
});

const pastBreakingNews = computed(() => {
  const newsList = [];

  let counter = 0;
  breakingNews.articles.forEach((news, index) => {
    if (news.title.length < 78 && news.title.length > 30 && counter < 3) {
      newsList.push(...breakingNews.articles.splice(index, 1));
      counter++;
    }
  });
  return newsList;
});
</script>

<style scoped>
.breaking-news-bar {
  display: flex;
  background-color: white;
  flex-direction: column;
  margin-top: 60px;
}

.markets-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  overflow: hidden;
}

.markets-bar .live-news {
  align-self: flex-start;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 40px;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: red;
  color: white;
  border-radius: 5px;
  padding: 8px;
}

.markets-bar a {
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(0, 170, 0);
  text-decoration: none;
}

.markets-bar .arrow-square {
  height: 100%;
  width: 12%;
}

.arrow-square .square-box {
  height: 100%;
  background-color: rgb(255, 255, 255);
}

.arrow-square .skewed-box {
  height: 100%;
  width: 125%;
  transform: skew(-40deg);
  background-color: rgb(0, 170, 0);
}

.skewed-box .fa-arrow-right {
  font-size: 2rem;
  transform: skew(40deg);
  margin-top: calc(40px - 1rem);
  margin-left: 60px;
  color: white;
  cursor: pointer;
}

.news-bar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: white;
  box-shadow: 2px 5px 2px 2px rgba(0, 0, 0, 0.168);
}


.news-bar div:not(:first-child) {
  @media (max-width: 700px) {
    display: none;
  }
}

.news-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.news-item i {
  color: gray;
  font-size: large;
  margin-left: 10px;
  margin-right: 10px;
}

.news-item a {
  text-decoration: none;
  color: inherit;
}

.news-item a:hover {
  cursor: pointer;
  color: rgb(0, 151, 0);
}
</style>
