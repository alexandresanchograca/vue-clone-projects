<template>
  <div v-if="product" class="carousel-item">
    <div v-if="product.images" class="img-wrapper">
      <img :src="product.images[0]" />
    </div>
    <div class="item-desc">
      <p class="discount">{{ product.discountPercentage }}% de desconto</p>
      <p class="limited-time-offer">Oferta por tempo limitado</p>
      <div class="item-price">
        <span class="current-price">{{ discountedPrice }}$</span>
        <span>Preço recomendado:</span>
        <span class="recommended-price">{{ product.price }}$</span>
      </div>
      <p class="item-full-desc">
        {{ product.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["product"]);

const discountedPrice = computed(() => {
  return (
    props.product.price *
    (1 - props.product.discountPercentage / 100)
  ).toFixed(2);
});
</script>

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
  height: 245px;
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
