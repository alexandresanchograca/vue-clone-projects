<template>
  <div v-if="product" class="grid-item">
    <h3 class="bold">Oferta Top</h3>
    <div class="img-container">
      <img :src="require(`@/assets/grid/${product.imageName}`)" />
      <div class="item-desc">
        <p class="discount">{{ product.discount }}% de desconto</p>
        <p class="limited-time-offer">Oferta por tempo limitado</p>
        <p>Poupe em {{ product.brand }} e mais</p>
      </div>
    </div>
    <a href="#top">Ver mais</a>
  </div>
</template>

<script setup>
const props = defineProps(["product"]);
</script>

<style scoped>
.img-container {
  margin-bottom: auto;
}
</style>
