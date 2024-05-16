<template>
  <div class="article-img">
    <div class="img-wrapper">
      <img src="../assets/news-files/cropped-resultados-bcp-2023_15.jpg" />
    </div>
    <div class="article-text">
      <h1>Lucro do BCP sobe 8% para 234,3 milhões no 1.º trimestre</h1>
      <p>
        Escalada dos juros continua a impulsionar resultados do banco liderado
        por Miguel Maya. Margem financeira disparou mais de 30%. Custos também
        aceleraram quase 15%.
      </p>
    </div>
    <div class="bottom-bar">
      <div class="bar-items">
        <div class="item">
          <img src="../assets/news-files/cropped-bcp.avif" />
          <p>BCP quer financiar "oportunidades" do novo aeroporto</p>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
        <div class="item">
          <img src="../assets/news-files/cropped-bcp.avif" />
          <p>BCP quer financiar "oportunidades" do novo aeroporto</p>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
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
  max-height: 670px;
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

.article-text:hover {
  cursor: pointer;
  color: #00d700;
}

.img-wrapper > img {
  opacity: 45%;
  width: 100%;
  height: 100%;
}

.article-img h1 {
  font-weight: bold;
  font-size: 3.2rem;
  width: 75%;
  margin: auto;

  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
}

.article-img p {
  font-size: 1em;
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
</style>
