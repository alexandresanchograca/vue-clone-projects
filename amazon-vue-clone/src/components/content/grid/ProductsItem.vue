<template>
  <div v-if="products" class="grid-item">
    <h3 class="bold">Descobrir produtos usados</h3>
    <div class="img-grid">
      <div v-for="product in products" class="img-item">
        <img :src="require(`@/assets/grid/${product.imageName}`)" />
        <p>{{ product.title }}</p>
      </div>
    </div>
    <a href="#top">Veja mais</a>
  </div>
</template>

<script setup>
const props = defineProps(["products"]);
</script>

<style scoped>
.img-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 180px));
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  margin-bottom: auto;
}

.img-grid .img-item {
  display: flex;
  margin-bottom: 15px;
  flex-direction: column;
  flex-shrink: 1;
  box-sizing: border-box;
  font-size: 0.72rem;
  overflow: hidden;
}

.img-item img {
  flex-shrink: 1;
  width: 100%;
  align-self: center;
  margin-bottom: 5px;
  cursor: pointer;
}

.img-item p {
  font-weight: 500;
}
</style>
