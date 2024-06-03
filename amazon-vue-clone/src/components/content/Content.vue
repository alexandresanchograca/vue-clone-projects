<template>
  <div class="content">
    <ImageCarousel :banners="banners"></ImageCarousel>
    <Grid></Grid>
  </div>
  <Recomendations></Recomendations>
</template>

<script setup>
import ImageCarousel from "@/components/content/ImageCarousel.vue";
import Grid from "@/components/content/grid/Grid.vue";
import Recomendations from "@/components/content/Recomendations.vue";
import getData from "@/composables/getData";

const { getBannerImages } = getData();
const banners = getBannerImages();
</script>

<style scoped>
.content {
  max-width: 1500px;
  margin: auto;
}
</style>
