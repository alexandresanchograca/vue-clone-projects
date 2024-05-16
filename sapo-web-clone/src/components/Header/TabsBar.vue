<template>
  <div class="tabs-bar">
    <a>Ultimas</a>
    <a>Mercados</a>
    <a>Opinao</a>
    <a>Advocatus</a>
    <a>Trabalho</a>
    <a>ECOSeguros</a>
    <a>Capital Verde</a>
    <a>Fundos Europeus</a>
    <a>Local Online</a>
    <a>+M</a>
    <a>Loja</a>
  </div>
</template>

<script setup></script>

<style scoped>
.tabs-bar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 25px;
  background-color: #009600;

  @media (max-width: 700px) {
    display: none;
  }
}

.tabs-bar > a {
  color: white;
  font-size: small;
  font-weight: bold;
}

.tabs-bar > a:hover {
  cursor: pointer;
  color: #00d700;
}
</style>
