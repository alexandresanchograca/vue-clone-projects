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

.news-desc .author-note {
  margin-top: 15px;
}

.icon {
  font-size: 1.2rem;
  padding: 20px;
  padding-left: 0;
  color: rgb(0, 170, 0);
  cursor: pointer;
}
</style>
