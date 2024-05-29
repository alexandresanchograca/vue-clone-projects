<template>
  <div class="items-carousel-item">
    <div class="carousel-title">
      <h3>Ofertas Inesperadas <a href="">Ver mais</a></h3>
    </div>
    <div class="items-container">
      <CarouselItem></CarouselItem>
      <CarouselItem></CarouselItem>
      <CarouselItem></CarouselItem>
      <CarouselItem></CarouselItem>
      <CarouselItem></CarouselItem>
      <CarouselItem></CarouselItem>
      <CarouselItem></CarouselItem>
      <CarouselItem></CarouselItem>
      <CarouselItem></CarouselItem>
    </div>
  </div>
</template>

<script setup>
import CarouselItem from "@/components/content/grid/carousel/CarouselItem.vue";
</script>

<style scoped>
.items-carousel-item {
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  border: 15px solid white;
  border-bottom: 0px;
  padding-bottom: 10px;
  gap: 10px;
  background-color: white;
}

.items-carousel-item .items-container {
  display: flex;
  gap: 10px;
  box-sizing: border-box;
  overflow-x: scroll;
}

.items-carousel-item .carousel-title {
  padding: 10px 0px;
}

.carousel-title h3 {
  font-size: 1.4rem;
  font-weight: bold;
}

.carousel-title a:hover {
  color: #cc0c39;
  text-decoration: underline;
}

.carousel-title h3 a {
  font-size: 0.8rem;
  text-decoration: none;
  color: rgb(44, 114, 172);
}
</style>
