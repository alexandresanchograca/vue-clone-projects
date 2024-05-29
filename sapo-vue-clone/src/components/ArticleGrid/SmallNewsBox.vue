<template>
  <div v-if="news" class="small-news-box">
    <img :src="require(`@/assets/news-files/${news.imgName}`)" />
    <div class="small-news-desc">
      <div v-if="news.isExclusive"><RedPill></RedPill></div>
      {{ news.title }}
      <p v-if="news.authorSignature" class="author-note">
        {{ news.authorSignature.name }}, {{ news.authorSignature.time }}
      </p>
    </div>
  </div>
</template>

<script setup>
import RedPill from "@/components/ArticleGrid/badges/RedPill.vue";
import { defineProps } from "vue";
const props = defineProps(["news"]);
</script>

<style scoped>
.small-news-box {
  display: flex;
  height: 150px;
  box-sizing: content-box;
  object-fit: contain;
  border-radius: 2px;
}

img {
  flex-shrink: 0;
  max-width: 100%;
  overflow: hidden;
}
h3 {
  float: right;
  font-size: 1.3rem;
  font-weight: bold;
}
.small-news-desc {
  display: block;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0.8rem;
}

.author-note {
  margin-top: 10px;
}
</style>
