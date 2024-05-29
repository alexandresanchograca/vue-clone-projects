<template>
  <span class="tabs-bar">
    <div id="all-menu">
      <i class="fa-solid fa-bars"></i>
      <p class="bold">Tudo</p>
    </div>
    <div class="tab-item"><p class="bold">Mais Vendidos</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
    <div class="tab-item"><p class="bold">Amazon Basics</p></div>
  </span>
</template>

<script setup></script>

<style scoped>
.tabs-bar {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  color: white;
  background-color: #232f3e;
  height: 40px;
  box-sizing: border-box;
  overflow: hidden;
}

.tabs-bar > * {
  cursor: pointer;
  padding: 0 10px;
}

.tabs-bar > *:hover {
  border: 1px solid white;
}

#all-menu {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-left: 10px;
}

#all-menu .fa-bars {
  font-size: 1.25rem;
  margin-right: 5px;
}

#all-menu p {
  font-size: 0.85rem;
}

.tab-item {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  font-size: 0.85rem;
  align-items: center;
}

.tab-item p {
  text-wrap: nowrap;
}
</style>
