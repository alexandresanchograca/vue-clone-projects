<template>
  <div class="medium-news-box">
    <img src="../../assets/news-files/mediumbox.avif" />
    <div class="news-desc">
      35 consorcios do PRR pediram para alterar composicao
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.medium-news-box {
  display: flex;
  flex-direction: column;
}
img {
  flex-shrink: 0;
  max-width: 100%;
  overflow: hidden;
}
.news-desc {
  display: block;
  padding: 20px;
  font-size: 1.1rem;
  font-weight: bold;
}
</style>
