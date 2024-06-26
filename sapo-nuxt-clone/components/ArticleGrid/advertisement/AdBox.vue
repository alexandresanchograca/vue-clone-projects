<template>
  <img :src="adImg" />
</template>

<script setup>
import adImg from "~/assets/donut.jpeg";
</script>

<style scoped>
.ad-box {
  margin: auto;
  margin-bottom: 20px;
}
img {
  margin: 0px auto;
  margin-bottom: 20px;
  cursor: pointer;
  max-height: 250px;
  max-width: 300px;
}
</style>
