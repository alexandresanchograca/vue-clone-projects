<template>
  <div v-if="mainNews" class="main-news-box">
    <h3>
      Garantia aos jovens para crédito da casa não é "dinheiro a fundo perdido"
    </h3>
    <p class="author-note">John Doe, 10:43</p>
    <img src="../../assets/news-files/main-box-img.avif" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corporis
      eveniet optio rem nobis doloribus amet ut nisi, ducimus sed totam.
    </p>
    <i class="fa-solid fa-share icon"></i>
    <i class="fa-regular fa-comment icon"></i>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["mainNews"]);
</script>

<style scoped>
.main-news-box {
  margin: auto;
  margin-bottom: 20px;
  flex-grow: 1;
  width: fit-content;
}

h3 {
  font-weight: bold;
  padding: 20px;
}
img {
  width: 100%;
}
p {
  padding: 20px;
}
.icon {
  font-size: 1.2rem;
  padding: 20px;
  color: rgb(0, 170, 0);
  cursor: pointer;
}
</style>
