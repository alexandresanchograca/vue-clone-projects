<template>
  <div v-if="news" class="main-news-box">
    <div class="head-news">
      <h3>
        {{ news.title }}
      </h3>
      <p v-if="news.author" class="author-note">
        {{ news.author }}, {{ news.publishedAt.substring(0, 10) }}
      </p>
    </div>
    <img :src="news.urlToImage" />
    <div class="news-content">
      <p>
        {{ news.description }}
      </p>
      <IconBar />
    </div>
  </div>
</template>

<script setup>
import IconBar from "@/components/ArticleGrid/badges/IconBar.vue";
import { defineProps } from "vue";
const props = defineProps(["news"]);
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

h3 {
  font-weight: bold;
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
