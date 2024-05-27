<template>
  <div class="article-img article-img-secondary">
    <div class="img-wrapper">
      <img src="@/assets/news-files/texteis.jpg" />
    </div>
    <div class="article-text">
      <div class="pill-wrapper">
        <div class="img-green-pill">ESPECIAL</div>
      </div>
      <h1>Têxteis de Guimarães puxam os lençóis aos italianos</h1>
      <div class="article-icons">
        <div class="author-profile-card">
          <img
            class="author-profile-img"
            src="../../assets/news-files/pabreu_perfil.avif"
          />
          <span class="author-desc">
            <div class="author-name">John Doe</div>
            <div class="publish-date">19 Maio 2024</div>
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
</style>
