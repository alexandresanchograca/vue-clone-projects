<template>
  <div v-if="news" class="medium-news-box">
    <img :src="news.urlToImage" :class="{'large-image' : largeImage}"/>
    <div class="news-desc">
      <NuxtLink :to="`/details/${news.titleUri}`">{{ news.title }}</NuxtLink>
      <p v-if="news.author" class="author-note">
        {{ news.author }}, {{ news.publishedAt.substring(0, 10) }}
      </p>
      <IconBar/>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["news", "largeImage"]);
</script>

<style scoped>
.medium-news-box {
  display: flex;
  flex-direction: column;
}

.medium-news-box:hover {
  color: rgb(0, 170, 0);
}

.medium-news-box img {
  flex-shrink: 0;
  max-height: 175px;
  overflow: hidden;
}

.medium-news-box .large-image {
  max-height: 320px;
}

.news-desc {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px;
  font-size: 1.1rem;
  font-weight: bold;
}

.news-desc a {
  color: inherit;
  font-weight: bold;
  text-decoration: none;
}

.news-desc .author-note {
  margin-top: 15px;
}
</style>
