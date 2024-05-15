<template>
  <div class="article-img">
    <img src="../assets/news-files/cropped-resultados-bcp-2023_15.jpg" />
    <div class="article-text">
      <h1>Lucro do BCP sobe 8% para 234,3 milhões no 1.º trimestre</h1>
      <p>
        Escalada dos juros continua a impulsionar resultados do banco liderado
        por Miguel Maya. Margem financeira disparou mais de 30%. Custos também
        aceleraram quase 15%.
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.article-img {
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: repeat(5, minmax(100px, 120px));
  background-color: black;
}

.article-text {
  position: relative;
  margin-top: 30px;
  color: white;
  grid-column: 2 / 3;
  grid-row: 2 / 4;
}

.article-img > img {
  opacity: 45%;
  grid-column: 1 / 4;
  grid-row: 1 / 6;
  width: 100%;
  overflow: hidden;
}

.article-img h1 {
  grid-column: 2 / 3;
  grid-row: 2 / 4;
  font-weight: bold;
  font-size: 3.2rem;
}

.article-img p {
  grid-column: 2/3;
  grid-row: 4 / 4;
  font-size: 1em;
}
</style>
