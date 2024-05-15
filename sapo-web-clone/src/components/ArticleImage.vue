<template>
  <div class="article-img">
    <img src="../assets/news-files/cropped-resultados-bcp-2023_15.jpg" />
    <h1 class="article-text">
      Lucro do BCP sobe 8% para 234,3 milhões no 1.º trimestre
    </h1>
    <p class="article-text">
      Escalada dos juros continua a impulsionar resultados do banco liderado por
      Miguel Maya. Margem financeira disparou mais de 30%. Custos também
      aceleraram quase 15%.
    </p>
  </div>
</template>

<script setup></script>

<style scoped>
.article-img {
  display: grid;
  grid-template-columns: 1fr 9fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  background-color: black;
}

.article-img > img {
  opacity: 45%;
  grid-column: 1 / 4;
  grid-row: 1 / 5;
  width: 100%;
}

.article-img h1 {
  grid-column: 2 / 3;
  grid-row: 2 / 4;
  font-weight: bold;
  font-size: 3.2rem;
}

.article-img p {
  grid-column: 2/3;
  grid-row: 3/4;
  font-size: 1em;
}

.article-text {
  position: relative;
  box-sizing: content-box;
  color: white;
}

.article-text h1 {
  font-size: 100%;
}
</style>
