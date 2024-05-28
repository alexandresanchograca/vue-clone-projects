<template>
  <div v-if="news">
    <img
      class="main-img"
      :src="require(`@/assets/news-files/${news.imgName}`)"
    />
  </div>
  <div v-if="news" class="big-news-card">
    <div v-if="news.isExclusive" class="red-pill"><p>EXCLUSIVO</p></div>
    <h2>{{ news.title }}</h2>
    <p>
      {{ news.description }}
    </p>
    <div class="icon-bar">
      <i class="fa-solid fa-share icon"></i>
      <i class="fa-regular fa-comment icon"></i>
      <div v-for="tag in news.tags" :key="tag" class="green-pill">
        {{ tag }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["news"]);
</script>

<style scoped>
.main-img {
  height: 350px;
  grid-column: 1;
  grid-row: 1;
}

img {
  cursor: pointer;
}

div.big-news-card {
  display: flex;
  flex-direction: column;
  margin-left: 0px;
  padding-left: 20px;
  background-color: white;
}

h2 {
  font-size: 1.3em;
  font-weight: bold;
}
h2:hover {
  cursor: pointer;
  color: rgb(0, 170, 0);
}

p {
  margin-top: 15px;
}

.red-pill {
  float: left;
}

.red-pill p {
  float: left;
  margin-top: 5px;
  margin-right: 10px;
  padding: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 20px;
  font-size: small;
  color: white;
  background-color: red;
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

.green-pill {
  font-size: small;
  border: 1px solid green;
  border-radius: 20px;
  padding: 5px;
  margin-left: auto;
}

.green-pill:hover {
  color: white;
  background-color: green;
}

.icon {
  font-size: 1.2rem;
  padding: 20px;
  padding-left: 0;
  color: rgb(0, 170, 0);
  cursor: pointer;
}
</style>
