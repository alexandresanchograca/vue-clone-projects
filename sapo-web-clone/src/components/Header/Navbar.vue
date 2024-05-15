<template>
  <div class="main-bar">
    <i class="fa-solid fa-bars"></i>
    <i class="fa-solid fa-magnifying-glass"></i>
    <img src="../../assets/eco-logo.svg" />
    <div class="main-bar-links">
      <a>Entrar</a>
      <a class="btn">Assinatura premimum</a>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.main-bar {
  display: grid;
  grid-template-columns: 50px 50px 1fr 220px;
  grid-template-rows: 1fr;
  height: 70px;
  color: white;
  background-color: #00af00;
  border: 1px solid rgba(0, 0, 0, 0.199);
}
.main-bar i {
  margin: auto;
  font-size: x-large;
}
.main-bar img {
  box-sizing: content-box;
  max-height: 50px;
  margin: auto;
  margin-left: 50%;
}

.main-bar-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.9em;
}
.main-bar-links > a {
  margin-right: 5px;
  padding: 8px;
  text-wrap: nowrap;
}
.main-bar-links > a:hover {
  color: green;
  cursor: pointer;
}

.btn {
  font-size: smaller;
  font-weight: bold;
  color: #00af00;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
}

@keyframes fadeBackgroud {
  from {
    background-color: rgb(255, 255, 255);
  }
  to {
    background-color: #00af00;
  }
}

.main-bar-links > .btn:hover {
  background-color: #00af00;
  transition: 0.25s ease-out;
  color: white;
}
</style>
