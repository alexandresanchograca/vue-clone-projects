<template>
  <div
    v-if="stock"
    :class="{ 'down-stock': !stock.yesterdayIncrease }"
    class="market-status"
  >
    <i class="fa-solid fa-arrow-right"></i>{{ stock.priceDelta }}%
  </div>
</template>

<script setup>
const props = defineProps(["stock"]);
</script>

<style scoped>
.market-status {
  flex-grow: 1/30;
  font-size: small;
  background-color: #00b100;
  border-radius: 5px;
  margin: 2px;
  padding: 5px;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
}

.market-status i {
  text-align: center;
  margin-right: 14px;
  margin-left: 4px;
  color: #ffffff;
  transform: rotate(-90deg);
}

.down-stock {
  background-color: red;
}

.down-stock i {
  transform: rotate(90deg);
}
</style>
