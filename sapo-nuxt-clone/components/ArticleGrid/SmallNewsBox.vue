<template>
  <div v-if="news" class="small-news-box">
    <div class="image-container">
      <img :src="news.urlToImage" />
    </div>
    <div class="small-news-desc">
      <div v-if="true"><RedPill /></div>
      {{ news.title }}
      <p v-if="news.authorSignature" class="author-note">
        {{ news.authorSignature.name }}, {{ news.authorSignature.time }}
      </p>
    </div>
  </div>
</template>

<script setup>
const dataList = inject("observadorNews");

const news = computed(() => {
  const newsIndex = dataList.articles.findIndex((news) => news.title?.length < 56);
  const newsArr = dataList.articles.splice(newsIndex, 1);
  if (newsArr.length) {
    return newsArr[0];
  }
});
</script>

<style scoped>
.small-news-box {
  display: flex;
  height: 150px;
  box-sizing: content-box;
  object-fit: contain;
  border-radius: 2px;
}

.image-container {
  flex-shrink: 0;
  height: 150px;
  width: 150px;
  overflow: hidden;
}

img {
  max-width: none;
  max-height: none;
  transform: translate(-50%, -30%);
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
