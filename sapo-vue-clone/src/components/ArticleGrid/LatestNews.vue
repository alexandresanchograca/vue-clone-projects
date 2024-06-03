<template>
  <div v-if="smallNewsList" class="latest-news-box">
    <h3>
      Últimas
      <i class="fa-solid fa-arrow-right"></i>
    </h3>
    <ul>
      <li v-for="news in smallNewsList" :key="news.title">
        <p>{{ news.time }}</p>
        {{ news.title }}
      </li>
    </ul>
    <a>+</a>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";
const props = defineProps(["newsList"]);

const smallNewsList = computed(() => {
  const newsList = [];

  let counter = 0;
  props.newsList.forEach((news, index) => {
    if (news.title.length < 75 && counter < 5) {
      newsList.push(...props.newsList.splice(index, 1));
      counter++;
    }
  });
  return newsList;
});
</script>

<style scoped>
.latest-news-box {
  display: flex;
  flex-direction: column;
  width: 240px;
}

h3 {
  text-align: center;
  font-weight: bold;
  margin-left: 12px;
  margin-right: 12px;
  padding: 10px;
  color: rgb(0, 0, 0);
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
h3 i {
  color: #00d700;
}
ul {
  overflow-y: scroll;
  list-style-type: none;
  padding: 0px;
}
li {
  font-size: large;
  margin: auto;
  font-weight: bold;
  color: #00b100;
  cursor: pointer;
  margin: 10px;
  padding: 5px;
  line-height: 1.4rem;
}

li p {
  color: gray;
  font-size: 0.8rem;
}

a {
  display: block;
  text-align: center;
  font-size: x-large;
  font-weight: bold;
  cursor: pointer;
  color: #009d00;
  padding: 20px;
}
</style>
