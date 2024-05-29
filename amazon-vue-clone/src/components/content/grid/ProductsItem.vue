<template>
  <div class="grid-item">
    <h3 class="bold">Descobrir produtos usados</h3>
    <div class="img-grid">
      <div class="img-item">
        <img src="@/assets/grid/informatica.jpg" />
        <p>Informática</p>
      </div>
      <div class="img-item">
        <img src="@/assets/grid/casa.jpg" />
        <p>Casa e cozinha</p>
      </div>
      <div class="img-item">
        <img src="@/assets/grid/fotografia.jpg" />
        <p>Eletrônica e fotografia</p>
      </div>
      <div class="img-item">
        <img src="@/assets/grid/bricolage.jpg" />
        <p>Bricolage e Ferramentas</p>
      </div>
    </div>
    <a href="#top">Veja mais</a>
  </div>
</template>

<script setup></script>

<style scoped>
.img-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 180px));
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  margin-bottom: auto;
}

.img-grid .img-item {
  display: flex;
  margin-bottom: 15px;
  flex-direction: column;
  flex-shrink: 1;
  box-sizing: border-box;
  font-size: 0.72rem;
  overflow: hidden;
}

.img-item img {
  flex-shrink: 1;
  width: 100%;
  align-self: center;
  margin-bottom: 5px;
  cursor: pointer;
}

.img-item p {
  font-weight: 500;
}
</style>
