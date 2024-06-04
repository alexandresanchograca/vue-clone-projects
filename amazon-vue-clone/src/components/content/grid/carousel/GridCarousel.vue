<template>
  <div class="items-carousel-item">
    <div class="carousel-title">
      <h3>Ofertas Inesperadas <a href="">Ver mais</a></h3>
    </div>
    <div class="items-container">
      <button class="scroll-button left-btn" @click="scrollLeft"><</button>
      <div class="items-wrapper" ref="itemsWrapper">
        <CarouselItem
          v-for="product in products"
          :key="product.title"
          :product="product"
        ></CarouselItem>
      </div>
      <button class="scroll-button right-btn" @click="scrollRight">></button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CarouselItem from "@/components/content/grid/carousel/CarouselItem.vue";
const props = defineProps(["products"]);

const itemsWrapper = ref(null);

const scrollLeft = () => {
  if (itemsWrapper.value) {
    itemsWrapper.value.scrollBy({
      left: -800,
      behavior: "smooth",
    });
  }
};

const scrollRight = () => {
  if (itemsWrapper.value) {
    itemsWrapper.value.scrollBy({
      left: 800,
      behavior: "smooth",
    });
  }
};
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
  position: relative;
  align-items: center;
  overflow: hidden;
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

.items-wrapper {
  display: flex;
  gap: 10px;
  overflow-x: scroll;
}

.scroll-button {
  position: absolute;
  height: 100px;
  width: 45px;
  z-index: 3;
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  color: rgb(124, 124, 124);
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
}

.scroll-button:hover {
  background-color: rgba(255, 255, 255, 0.55);
  color: rgb(75, 75, 75);
}

.left-btn {
  left: 0;
}

.right-btn {
  right: 0;
}
</style>
