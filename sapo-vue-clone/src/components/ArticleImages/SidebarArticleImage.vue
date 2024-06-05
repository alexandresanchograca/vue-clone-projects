<template>
  <div class="article-img">
    <div class="img-wrapper">
      <img :src="articleImg.urlToImage" />
    </div>
    <div class="article-description">
      <div class="article-text">
        <div v-if="true" class="pill-wrapper">
          <div class="img-green-pill">ESPECIAL</div>
        </div>
        <h1>{{ articleImg.title }}</h1>
        <p v-if="articleImg.description">
          {{ articleImg.author }}, {{ articleImg.publishedAt.substring(0, 10) }}
        </p>
        <IconBar></IconBar>
      </div>
      <div v-if="sideBarItems" class="side-bar">
        <div class="bar-items">
          <div
            v-for="(item, index) in sideBarItems"
            :key="item.title"
            class="item"
            :class="{ 'bottom-border': index < sideBarItems.length - 1 }"
          >
            <div class="item-news-desc">
              <p>{{ item.title }}</p>
              <p class="author-note">{{ item.author }}, {{ item.time }}</p>
            </div>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, onBeforeMount } from "vue";
import IconBar from "@/components/ArticleGrid/badges/IconBar.vue";
const props = defineProps(["articleImg"]);

const sideBarItems = ref(null);

onBeforeMount(() => {
  sideBarItems.value = [
    {
      title: "Estas são 41 medidas do governo para as migrações.",
      imgName: "small-crop.jpg",
      author: "José mendes",
      time: "06-06-2024",
    },
    {
      title: "O governo vai deportar todos os cidadãos portugueses.",
      imgName: "small-crop.jpg",
      author: "José mendes",
      time: "06-06-2024",
    },
  ];
});
</script>

<style scoped>
.article-img {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
}

.article-description {
  margin: 0 20%;
  display: flex;
  gap: 60px;
}

.article-text {
  margin-top: 0;
}

.article-description h1 {
  margin: 0;
}
.article-description p {
  margin: 0;
}
.article-text p {
  margin-top: 25px;
}

.article-img h1 {
  width: 100%;
}

.article-img p {
  line-height: 1.4rem;
}

.side-bar {
  position: relative;
  margin-top: 56px;
  width: 320px;
  height: 100%;
  @media (max-width: 900px) {
    display: none;
  }
}

.bar-items {
  flex-direction: column;
  max-width: 320px;
}

.bar-items .item {
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.bottom-border {
  border-bottom: 1px solid rgba(185, 185, 185, 0.5);
}

.bar-items .item i {
  float: right;
  margin-right: 10px;
  color: rgb(0, 174, 0);
  font-size: x-large;
}

.item p {
  font-weight: 550;
}

.article-icons > * {
  margin: 20px;
  margin-left: 0px;
  color: #00d700;
  font-size: 1.4rem;
  cursor: pointer;
}

p.author-note {
  color: rgb(200, 200, 200);
}

div.pill-wrapper {
  padding-left: 0;
  padding-top: 0;
  margin-left: 0;
}

.img-green-pill {
  color: #00d700;
  border: 1px solid #00d700;
  background-color: rgba(0, 0, 0, 0);
  margin: 0;
}
</style>
