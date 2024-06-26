<template>
  <div v-if="news" class="medium-news-box">
    <img :src="news.urlToImage" />
    <div class="news-desc">
      {{ news.title }}
      <p v-if="news.author" class="author-note">
        {{ news.author }}, {{ news.publishedAt.substring(0, 10) }}
      </p>
      <IconBar />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["news"]);
</script>

<style scoped>
.medium-news-box {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.medium-news-box:hover {
  color: rgb(0, 170, 0);
}

.medium-news-box img {
  flex-shrink: 0;
  max-width: 100%;
  max-height: 175px;
  overflow: hidden;
}
.news-desc {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px;
  font-size: 1.1rem;
  font-weight: bold;
}
.news-desc .author-note {
  margin-top: 15px;
}
</style>
