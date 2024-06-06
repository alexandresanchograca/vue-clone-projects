<template>
  <div v-if="stockItems" class="stocks-carousel">
    <div
      v-for="stock in stockItems"
      :key="stock.company"
      :class="{ 'stock-item-down': !stock.yesterdayIncrease }"
      class="stock-item"
    >
      <h4>{{ stock.name }}</h4>
      <div class="stock-status">
        <i class="fa-solid fa-arrow-right"></i>{{ stock.priceDelta }}%
      </div>
      <div class="stock-chart-svg" v-html="stock.svgChart"></div>
    </div>
  </div>
</template>

<script setup>
import getData from "@/composables/getData";

const { getStocks } = getData();
const stockItems = getStocks();
</script>

<style>
.stocks-carousel {
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-x: scroll;
  overflow-y: clip;
  cursor: move;
}

.stock-item {
  display: flex;
  margin: 10px;
  height: 30px;
  width: 240px;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 20px;
  padding: 2px 2px 2px 15px;
}

.stock-item:hover {
  background-color: rgb(167, 167, 167);
  transition: 0.3s linear;
}

.stock-item h4 {
  font-size: 0.8rem;
}

.stock-item .stock-status {
  color: rgb(0, 170, 0);
  background-color: rgba(0, 0, 0, 0);
}

.stock-status {
  font-size: 0.8rem;
  text-wrap: nowrap;
  border-radius: 5px;
  border: 1px solid #00b100;
  margin-right: 8px;
  margin-left: 8px;
  padding: 5px;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
}

.stock-status i {
  text-align: center;
  margin-right: 8px;
  margin-left: 4px;
  transform: rotate(-90deg);
}

.stock-item-down .stock-status i {
  transform: rotate(90deg);
}

.stock-chart-svg {
  height: 100px;
  width: 100px;
  fill: none;
  stroke-width: 1px;
  stroke: rgb(141, 141, 141);
}

.stock-chart-svg .current-day {
  stroke: rgb(0, 210, 0);
}

.stock-item-down .stock-status {
  color: rgb(220, 0, 0);
  border: 1px solid rgb(220, 0, 0);
}

.stock-item-down .current-day {
  stroke: rgb(220, 0, 0);
}
</style>
