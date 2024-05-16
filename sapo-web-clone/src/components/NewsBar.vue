<template>
  <div class="news-bar">
    <div class="news-item">
      <i class="fa-regular fa-clock"></i>
      <p>PM eslovaco "estável” após cirurgia, mas em estado “muito grave"</p>
    </div>
    <div class="news-item">
      <i class="fa-regular fa-clock"></i>
      <p>PM eslovaco "estável” após cirurgia, mas em estado “muito grave"</p>
    </div>
    <div class="news-item">
      <i class="fa-regular fa-clock"></i>
      <p>PM eslovaco "estável” após cirurgia, mas em estado “muito grave"</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.news-bar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: white;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.168);
}

div div:not(:first-child) {
  @media (max-width: 700px) {
    display: none;
  }
}

.news-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.news-item i {
  color: gray;
  font-size: large;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
