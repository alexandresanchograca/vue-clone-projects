<template>
  <div class="content">
    <ImageCarousel></ImageCarousel>
    <Grid></Grid>
    <Recomendations></Recomendations>
  </div>
</template>

<script setup>
import ImageCarousel from "@/components/content/ImageCarousel.vue";
import Grid from "@/components/content/grid/Grid.vue";
import Recomendations from "@/components/content/Recomendations.vue";
</script>

<style scoped>
.content {
  max-width: 1500px;
  margin: auto;
}
</style>
