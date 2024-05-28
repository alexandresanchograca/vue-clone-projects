<template>
  <div v-if="news" class="medium-news-box">
    <img :src="require(`@/assets/news-files/${news.imgName}`)" />
    <div class="news-desc">
      {{ news.title }}
      <p v-if="news.authorSignature" class="author-note">
        {{ news.authorSignature.name }}, {{ news.authorSignature.time }}
      </p>
      <div class="icon-bar">
        <i class="fa-solid fa-share icon"></i>
        <i class="fa-regular fa-comment icon"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["news"]);
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
  max-width: 100%;
  overflow: hidden;
}
.news-desc {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px;
  padding-bottom: 0px;
  font-size: 1.1rem;
  font-weight: bold;
}
.icon-bar {
  display: flex;
  align-items: center;
  color: green;
  margin-top: auto;
}

.icon-bar > * {
  margin-right: 20px;
}

.news-desc .author-note {
  margin-top: 15px;
}
</style>
