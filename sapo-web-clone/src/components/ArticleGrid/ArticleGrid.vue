<template>
  <div class="main-article-grid">
    <img src="../../assets/news-files/big-img.jpeg" />
    <div class="big-news-card">
      <div class="red-pill"><p>EXCLUSIVO</p></div>

      <h2>Anacom e Governo têm de incentivar consolidação</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quidem
        aspernatur repellendus accusantium voluptatibus sequi placeat ullam esse
        ad minus tenetur.
      </p>
    </div>
    <NewsBox></NewsBox>
    <NewsBox></NewsBox>
    <NewsBox></NewsBox>
    <NewsBox></NewsBox>
  </div>
</template>

<script>
import NewsBox from "./NewsBox.vue";

export default {
  components: {
    NewsBox,
  },
};
</script>

<style scoped>
.main-article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}
.main-article-grid > * {
  margin: 20px;
}
.main-article-grid img {
  height: 350px;
  grid-column: 1;
  grid-row: 1;
}
.big-news-card h2 {
  font-size: 1.3rem;
  font-weight: bold;
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
</style>
