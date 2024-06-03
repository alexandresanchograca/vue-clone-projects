<template>
  <div class="initial-grid">
    <ProductsItem :products="productCategories"></ProductsItem>
    <TopOffer :product="topOffer()"></TopOffer>
    <ProductsItem :products="productCategories"></ProductsItem>
    <LoginItem></LoginItem>
    <div v-for="category in initalShopCategories" :key="category.title">
      <GridItem :category="category"></GridItem>
    </div>
    <CarouselItem :products="carouselProducts"></CarouselItem>
    <div v-for="category in initalShopCategories" :key="category.title">
      <GridItem :category="category"></GridItem>
    </div>
    <div v-for="category in initalShopCategories" :key="category.title">
      <GridItem :category="category"></GridItem>
    </div>
  </div>
</template>

<script setup>
import ProductsItem from "@/components/content/grid/ProductsItem.vue";
import TopOffer from "@/components/content/grid/TopOffer.vue";
import GridItem from "@/components/content/grid/GridItem.vue";
import LoginItem from "@/components/content/grid/LoginItem.vue";
import CarouselItem from "@/components/content/grid/carousel/GridCarousel.vue";
import getData from "@/composables/getData.js";
import { computed } from "vue";

const { getShopCategories, getProducts } = getData();

const shopCategories = getShopCategories();
const products = getProducts();

const topOffer = () => {
  return products.findLast((prod) => prod.discount > 35.0);
};

const initalShopCategories = computed(() => {
  return shopCategories.slice(0, 4);
});

const productCategories = computed(() => {
  return shopCategories.filter((prod) => prod.imageSize == "S").slice(0, 4);
});

const carouselProducts = computed(() => {
  return products.filter(
    (prod) => prod.discount > 20 && prod.title !== topOffer().title
  );
});
</script>

<style>
.initial-grid {
  position: relative;
  top: -350px;
  margin: 0px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  gap: 20px;
  box-sizing: border-box;
}

.grid-item {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: white;
  padding: 20px;
  gap: 20px;
  overflow: hidden;
}

.grid-item h3 {
  font-size: 1.4rem;
}

.grid-item a {
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  color: rgb(44, 114, 172);
}

.grid-item a:hover {
  color: #cc0c39;
}

.grid-item .item-desc {
  display: flex;
  text-wrap: nowrap;
  flex-wrap: wrap;
  gap: 0.4rem;
  align-items: center;
  margin-bottom: 20px;
}

.grid-item .img-container img {
  width: 100%;
  margin-bottom: 0px;
}

.grid-item .item-desc p {
  font-size: 0.72rem;
}

.item-desc .discount {
  align-self: flex-start;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 5px;
  background-color: #cc0c39;
  color: white;
}

.item-desc .limited-time-offer {
  font-size: 0.8rem;
  color: #cc0c39;
  font-weight: bold;
}

.item-price .current-price {
  font-weight: bold;
}

.item-price .current-price ~ span {
  font-size: 0.8rem;
  color: rgb(50, 50, 50);
}

.item-price .recommended-price {
  text-decoration: line-through;
}

.item-desc .item-full-desc {
  font-size: 0.8rem;
}
</style>
