<template>
  <div class="main-bar-wrapper">
    <div class="main-bar">
      <i class="fa-solid fa-bars"></i>
      <i class="fa-solid fa-magnifying-glass"></i>
      <NuxtLink to="/"><img src="../../assets/eco-logo.svg"/></NuxtLink>
      <div class="main-bar-links">
        <a>Entrar</a>
        <a class="btn">Assinatura premimum</a>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.main-bar-wrapper {
  background-color: #00af00;
  position: sticky;
  top: 0;
  z-index: 3;
}

.main-bar {
  display: grid;
  grid-template-columns: 50px 50px 1fr 220px;
  grid-template-rows: 1fr;
  height: 70px;
  color: white;
  max-width: 1140px;
  margin: auto;
}

.main-bar i {
  margin: auto;
  font-size: x-large;
}

.main-bar i:hover {
  cursor: pointer;
}

.main-bar img {
  box-sizing: content-box;
  max-height: 50px;
  margin: auto;
  margin-left: 50%;

  @media (max-width: 700px) {
    display: none;
  }
}

.main-bar a {
  margin: auto 0;
}

.main-bar a:hover {
  cursor: pointer;
}

.main-bar-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.9rem;
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
