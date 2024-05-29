<template>
  <div class="country-selector">
    <img class="country-logo-es" src="@/assets/trasnparent_pixel.gif" />
    <p>PT</p>
    <i class="fa-solid fa-caret-down navbar"></i>
  </div>
</template>

<script setup></script>

<style scoped>
.country-selector {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 8px 10px;
  gap: 5px;
}

p {
  font-size: 0.9rem;
  font-weight: bold;
}

.country-logo-es {
  width: 24px;
  height: 18px;
  background: url(@/assets/countries_small.png) -48px -166px;
}
</style>
