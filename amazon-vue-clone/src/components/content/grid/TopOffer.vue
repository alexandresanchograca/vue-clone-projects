<template>
  <div v-if="product" class="grid-item">
    <h3 class="bold">Oferta Top</h3>
    <div class="img-container">
      <img v-if="product.images.length" :src="product.images[0]" />
      <div class="item-desc">
        <p class="discount">{{ product.discountPercentage }}% de desconto</p>
        <p class="limited-time-offer">Oferta por tempo limitado</p>
        <p>Poupe em {{ product.brand }} e mais</p>
      </div>
    </div>
    <a href="#top">Ver mais</a>
  </div>
</template>

<script setup>
import getApiData from "@/composables/getApiData.js";
import { computed, onBeforeMount, ref } from "vue";

const { getApiProducts, getApiCategories } = getApiData();
const apiProducts = getApiProducts();

const product = computed(() => {
  let highDiscountProduct = {
    index: 0,
    discount: apiProducts[0].discountPercentage,
  };
  apiProducts.forEach((prod, index) => {
    if (highDiscountProduct.discount < prod.discountPercentage) {
      highDiscountProduct = { index, discount: prod.discountPercentage };
    }
  });

  return apiProducts.splice(highDiscountProduct.index, 1)[0];
});
</script>

<style scoped>
.img-container {
  margin-bottom: auto;
}
img {
  max-height: 300px;
}
</style>
