<template>
  <div class="medium-news-box">
    <img src="../../assets/news-files/mediumbox.avif" />
    <div class="news-desc">
      35 consorcios do PRR pediram para alterar composicao
      <p class="author-note">John Doe, 10:43</p>
      <div class="icon-bar">
        <i class="fa-solid fa-share icon"></i>
        <i class="fa-regular fa-comment icon"></i>
      </div>
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
