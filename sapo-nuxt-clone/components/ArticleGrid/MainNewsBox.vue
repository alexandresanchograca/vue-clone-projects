<template>
  <div v-if="news" class="main-news-box">
    <div class="head-news">
      <h3>
        <NuxtLink :to="`/details/${news.title}`">{{ news.title }}</NuxtLink>
      </h3>
      <p v-if="news.author" class="author-note">
        {{ news.author }}, {{ news.publishedAt.substring(0, 10) }}
      </p>
    </div>
    <img :src="news.urlToImage"/>
    <div class="news-content">
      <p>
        {{ news.description }}
      </p>
      <IconBar/>
    </div>
  </div>
</template>

<script setup>
const dataList = inject("observadorNews");


const news = computed(() => {
  const newsArr = dataList.articles.splice(0, 1);

  if (newsArr.length) {
    return newsArr[0];
  }
});
</script>

<style scoped>
.main-news-box {
  margin: auto;
  margin-bottom: 20px;
  flex-grow: 1;
  width: fit-content;
}

.head-news {
  padding: 20px;
}

h3 a {
  font-weight: bold;
  text-decoration: none;
  color: black;
}

h3 a:hover {
  cursor: pointer;
  color: #00d700;
}

img {
  width: 100%;
}

.news-content {
  padding: 20px;
}

p {
  margin-bottom: 20px;
}
</style>
