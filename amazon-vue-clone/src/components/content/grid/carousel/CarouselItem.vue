<template>
  <div class="carousel-item">
    <div class="img-wrapper">
      <img class="item-image" src="@/assets/grid/item-carousel/keyboard.jpg" />
    </div>
    <div class="item-desc">
      <p class="discount">36% de desconto</p>
      <p class="limited-time-offer">Oferta por tempo limitado</p>
      <div class="item-price">
        <span class="current-price">86.00$</span>
        <span>Preço recomendado:</span>
        <span class="recommended-price">135.00$</span>
      </div>
      <p class="item-full-desc">
        Logitech MX keys Advanced Teclado sem fios com retroiluminação
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.carousel-item {
  display: flex;
  position: relative;
  flex-direction: column;
  width: 240px;
  box-sizing: border-box;
  gap: 20px;
}

.img-wrapper {
  padding: 0px;
  background-color: rgb(0, 0, 0);
  cursor: pointer;
}

.img-wrapper img {
  box-sizing: border-box;
  background-color: white;
  padding: 8px;
  width: 100%;
  height: 100%;
  opacity: 95%;
}

.items-container .item-desc {
  display: flex;
  flex-direction: column;
  text-wrap: nowrap;
  overflow: hidden;
  gap: 5px;
}
</style>
