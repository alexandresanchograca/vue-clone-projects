<template>
  <div class="ad-banner">
    <img :src="adImg"/>
  </div>
</template>

<script setup>
import adImg from "~/assets/adBanner.jpg";
</script>

<style scoped>
.ad-banner {
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  margin: 10px auto;
  cursor: pointer;
  width: 90%;
}
</style>
