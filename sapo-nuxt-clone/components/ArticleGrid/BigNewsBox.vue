<template>
  <div v-if="news">
    <img v-if="news" class="main-img" :src="news.urlToImage" />
    <GreenBadge />
  </div>
  <div v-if="news" class="big-news-card">
    <div v-if="true"><RedPill /></div>
    <h2>{{ news.title }}</h2>
    <p>
      {{ news.description }}
    </p>
    <IconBar :news="news" />
  </div>
</template>

<script setup>
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
  box-sizing: border-box;
  flex-direction: column;
  margin-left: 0px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: white;
  max-height: 350px;
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
  height: 100%;
  margin-top: 15px;
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
</style>
