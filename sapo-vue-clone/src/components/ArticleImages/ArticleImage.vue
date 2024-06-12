<template>
  <div class="article-img article-img-secondary">
    <div class="img-wrapper">
      <img :src="articleImg.urlToImage" />
    </div>
    <div class="article-text">
      <div v-if="true" class="my-pill">
        <GreenPill />
      </div>
      <h1>{{ articleImg.title }}</h1>
      <div v-if="articleImg.author" class="article-icons">
        <div class="author-profile-card">
          <img
            class="author-profile-img"
            :src="require(`@/assets/news-files/pabreu_perfil.avif`)"
          />
          <span class="author-desc">
            <div class="author-name">{{ articleImg.author }}</div>
            <div class="publish-date">
              {{ articleImg.publishedAt.substring(0, 10) }}
            </div>
          </span>
        </div>
        <i class="fa-solid fa-share"></i>
        <i class="fa-regular fa-comment"></i>
      </div>
    </div>
    <div class="bottom-bar-placeholder"></div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import GreenPill from "../ArticleGrid/badges/GreenPill.vue";
const props = defineProps(["articleImg"]);
</script>

<style scoped>
.article-img-secondary {
  grid-template-columns: 1fr 50vw 1fr;
  grid-template-rows: repeat(5, 1fr);
}

.article-img-secondary > * {
  grid-column: 2;
  grid-row: 1 / 6;
}

.article-img-secondary .img-wrapper {
  max-height: 480px;
}

.my-pill {
  width: 75%;
  margin: auto;
}
</style>
