<template>
  <div class="initial-grid">
    <ProductsItem :products="productCategories"></ProductsItem>
    <TopOffer :product="topOffer"></TopOffer>
    <ProductsItem :products="productCategories"></ProductsItem>
    <LoginItem></LoginItem>
    <GridItem
      v-for="category in shopCats()"
      :key="category.title"
      :category="category"
    ></GridItem>
    <CarouselItem :products="carouselProducts"></CarouselItem>
    <GridItem
      v-for="category in shopCats()"
      :key="category.title"
      :category="category"
    ></GridItem>
    <GridItem
      v-for="category in shopCats()"
      :key="category.title"
      :category="category"
    ></GridItem>
  </div>
</template>

<script setup>
import ProductsItem from "@/components/content/grid/ProductsItem.vue";
import TopOffer from "@/components/content/grid/TopOffer.vue";
import GridItem from "@/components/content/grid/GridItem.vue";
import LoginItem from "@/components/content/grid/LoginItem.vue";
import CarouselItem from "@/components/content/grid/carousel/GridCarousel.vue";
import getData from "@/composables/getData.js";
import getApiData from "@/composables/getApiData.js";
import { computed, onBeforeMount, ref } from "vue";

const { getShopCategories, getProducts } = getData();
const { getApiProducts, getApiCategories } = getApiData();

const categories = getApiCategories();
const shopCategories = getShopCategories();
const apiProducts = getApiProducts();

const initalShopCategories = ref(null);

onBeforeMount(() => {
  let foo = apiProducts.filter((prod) => {
    if (categories.includes(prod.category)) {
      const categoryIndex = categories.findIndex(
        (cat) => cat === prod.category
      );
      categories.splice(categoryIndex, 1);
      return true;
    }
    return false;
  });

  initalShopCategories.value = foo;
});

const topOffer = computed(() => {
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

const shopCats = () => {
  return initalShopCategories.value.splice(0, 4);
};

const productCategories = computed(() => {
  return shopCategories.filter((prod) => prod.imageSize == "S").slice(0, 4);
});

const carouselProducts = computed(() => {
  return apiProducts.filter(
    (prod) => prod.discountPercentage > 10 && prod.title !== topOffer.title
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
