<template>
  <div class="main-article-grid">
    <img class="main-img" src="../../assets/news-files/big-img.jpeg" />
    <div class="big-news-card">
      <div class="red-pill"><p>EXCLUSIVO</p></div>
      <h2>Anacom e Governo têm de incentivar consolidação</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quidem
        aspernatur repellendus accusantium voluptatibus sequi placeat ullam esse
        ad minus tenetur.
      </p>
      <div class="icon-bar">
        <i class="fa-solid fa-share icon"></i>
        <i class="fa-regular fa-comment icon"></i>
        <div class="green-pill">Finanças</div>
      </div>
    </div>
    <NewsBox></NewsBox>
    <NewsBox></NewsBox>
    <NewsBox></NewsBox>
    <NewsBox></NewsBox>
  </div>
</template>

<script setup>
import NewsBox from "./NewsBox.vue";
</script>

<style scoped>
.main-article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}
.main-article-grid > * {
  margin: 20px;
}
.main-img {
  height: 350px;
  grid-column: 1;
  grid-row: 1;
}

img {
  cursor: pointer;
}

.big-news-card {
  display: flex;
  flex-direction: column;
  margin-left: 0px;
  padding-left: 20px;
  background-color: white;
}

.big-news-card h2 {
  font-size: 1.3em;
  font-weight: bold;
}
.big-news-card h2:hover {
  cursor: pointer;
  color: rgb(0, 170, 0);
}

.big-news-card p {
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
