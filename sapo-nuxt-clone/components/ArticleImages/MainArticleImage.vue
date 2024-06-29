<template>
  <div v-if="articleImg" class="article-img">
    <div class="img-wrapper">
      <img :src="articleImg.urlToImage" />
    </div>
    <div class="article-text">
      <h1>{{ articleImg.title }}</h1>
      <p v-if="articleImg.description">
        {{ articleImg.description }}
      </p>
    </div>
    <div v-if="articleImg.barItems" class="bottom-bar">
      <div v-if="articleImg.barItems.length" class="bar-items">
        <div v-for="item in articleImg.barItems" :key="item.title" class="item">
          <img :src="require(`@/assets/news-files/${item.imgName}`)" />
          <p>{{ item.title }}</p>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = await useNews();
const newsListData = data.expresso.articles;

const articleImg = computed(() => {
  const articleIndex = newsListData.findLastIndex(
    (article) => article.source.name === "Expresso.pt"
  );
  return newsListData.splice(articleIndex, articleIndex + 1)[0];
});
</script>

<style>
.article-img {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  justify-items: center;
  align-items: center;
}

.img-wrapper {
  background-color: black;
  overflow: hidden;
  max-height: 580px;
  width: 100vw;
}

.article-img > * {
  grid-column: 1;
  grid-row: 1 / 6;
}

.article-text {
  position: relative;
  margin-top: 30px;
  color: white;
}

.article-text h1:hover {
  cursor: pointer;
  color: #00d700;
}

.img-wrapper {
  display: flex;
  align-items: center;
}

.img-wrapper > img {
  object-position: center;
  opacity: 45%;
  width: 100%;
  height: 100%;
}

.article-img h1 {
  font-weight: bold;
  font-size: clamp(1.2rem, 4vw, 3.2rem);
  width: 75%;
  margin: auto;
}

.article-img p {
  font-size: 1rem;
  width: 75%;
  margin: auto;
}

.bottom-bar {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.4);
  grid-row: 5 / 6;

  @media (max-width: 900px) {
    display: none;
  }
}

.bar-items {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  height: 100%;
  max-width: 1140px;
  margin: auto;
}

.bar-items .item {
  display: flex;
  color: white;
  font-size: small;
  overflow: hidden;
  border-right: 1px solid rgba(128, 128, 128, 0.55);
  height: 100%;
  width: 320px;
}

.bar-items .item:hover {
  background-color: hsla(0, 0%, 0%, 0.45);
  cursor: pointer;
}

.item img {
  margin: auto;
  margin-left: 20px;
  margin-right: 5px;
  border-radius: 10px;
  height: 50px;
  width: 50px;
  flex-shrink: 0;
  overflow: hidden;
}

.item i {
  margin: auto;
  color: rgb(0, 174, 0);
  margin-right: 20px;
  font-size: x-large;
}

.article-icons {
  display: flex;
  width: 75%;
  margin: auto;

  @media (max-width: 800px) {
    display: none;
  }
}

.article-icons > * {
  margin: 20px;
  margin-left: 0px;
  color: #00d700;
  font-size: 1.4rem;
  cursor: pointer;
}

.author-profile-card {
  display: flex;
  height: 50px;
}

.author-profile-img {
  height: 50px;
  border-radius: 200px;
  background-color: #00d700;
}

.author-desc {
  padding: 10px;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  text-wrap: nowrap;
}

.author-desc .author-name {
  font-weight: 500;
  color: white;
}
</style>
