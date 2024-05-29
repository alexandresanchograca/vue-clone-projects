<template>
  <div class="amazon-services-wrapper">
    <div class="other-services">
      <div class="item-service">
        <h4 class="bold">Amazon Music</h4>
        <p>Transmissão de milhões de músicas</p>
      </div>
      <div class="item-service">
        <h4 class="bold">AbeBooks</h4>
        <p>Livros, arte e colecionáveis</p>
      </div>
      <div class="item-service">
        <h4 class="bold">Amazon Web Services</h4>
        <p>Cloud dimensionável</p>
        <p>Serviços de computação</p>
      </div>
      <div class="item-service">
        <h4 class="bold">Kindle Direct Publishing</h4>
        <p>Publicação digital independente fácil</p>
      </div>
      <div class="item-service">
        <h4 class="bold">Amazon Music</h4>
        <p>Transmissão de milhões de músicas</p>
      </div>
      <div class="item-service">
        <h4 class="bold">Amazon Music</h4>
        <p>Transmissão de milhões de músicas</p>
      </div>
      <div class="item-service">
        <h4 class="bold">Amazon Music</h4>
        <p>Transmissão de milhões de músicas</p>
      </div>
      <div class="item-service">
        <h4 class="bold">Amazon Music</h4>
        <p>Transmissão de milhões de músicas</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.amazon-services-wrapper {
  background-color: #131a22;
  padding: 20px 0px;
  padding-bottom: 30px;
}

.other-services {
  display: grid;
  max-width: 1500px;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 10px;
  gap: 20px;
  color: white;
  font-size: 0.7rem;
  max-width: 980px;
}

.other-services .item-service:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
