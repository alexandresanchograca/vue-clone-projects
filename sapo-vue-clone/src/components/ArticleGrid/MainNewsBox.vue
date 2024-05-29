<template>
  <div v-if="news" class="main-news-box">
    <h3>
      {{ news.title }}
    </h3>
    <p v-if="news.authorSignature" class="author-note">
      {{ news.authorSignature.name }}, {{ news.authorSignature.time }}
    </p>
    <img :src="require(`@/assets/news-files/${news.imgName}`)" />
    <div class="news-content">
      <p>
        {{ news.description }}
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
.main-news-box {
  margin: auto;
  margin-bottom: 20px;
  flex-grow: 1;
  width: fit-content;
}

h3 {
  font-weight: bold;
  padding: 20px;
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
