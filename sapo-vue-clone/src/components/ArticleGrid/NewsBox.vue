<template>
  <div v-if="news" class="medium-news-box">
    <img :src="require(`@/assets/news-files/${news.imgName}`)" />
    <div class="news-desc">
      {{ news.title }}
      <p v-if="news.authorSignature" class="author-note">
        {{ news.authorSignature.name }}, {{ news.authorSignature.time }}
      </p>
      <IconBar></IconBar>
    </div>
  </div>
</template>

<script setup>
import IconBar from "@/components/ArticleGrid/badges/IconBar.vue";

import { defineProps } from "vue";
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
