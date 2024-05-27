<template>
  <div v-if="news" class="main-news-box">
    <h3>
      {{ news.title }}
    </h3>
    <p v-if="news.authorSignature" class="author-note">
      {{ news.authorSignature.name }}, {{ news.authorSignature.time }}
    </p>
    <img :src="require(`@/assets/news-files/${news.imgName}`)" />
    <p>
      {{ news.description }}
    </p>
    <i class="fa-solid fa-share icon"></i>
    <i class="fa-regular fa-comment icon"></i>
  </div>
</template>

<script setup>
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
p {
  padding: 20px;
}
.icon {
  font-size: 1.2rem;
  padding: 20px;
  color: rgb(0, 170, 0);
  cursor: pointer;
}
</style>
