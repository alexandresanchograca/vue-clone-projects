<template>
  <span class="head-bar">
    <NavLogo></NavLogo>
    <DeliveryLocation></DeliveryLocation>
    <SearchBar></SearchBar>
    <CountrySelector></CountrySelector>
    <AuthStatus></AuthStatus>
    <Orders></Orders>
    <ShoppingCart></ShoppingCart>
  </span>
</template>

<script setup>
import NavLogo from "@/components/navbar/headbar/NavLogo.vue";
import DeliveryLocation from "@/components/navbar/headbar/DeliveryLocation.vue";
import SearchBar from "@/components/navbar/headbar/SearchBar.vue";
import CountrySelector from "@/components/navbar/headbar/CountrySelector.vue";
import AuthStatus from "@/components/navbar/headbar/AuthStatus.vue";
import Orders from "@/components/navbar/headbar/Orders.vue";
import ShoppingCart from "@/components/navbar/headbar/ShoppingCart.vue";
</script>

<style>
.head-bar {
  display: flex;
  background-color: #131921;
  height: 60px;
  color: white;
  line-height: 0.9rem;
}

.head-bar > *:hover {
  border: 1px solid white;
  cursor: pointer;
}

.fa-caret-down.navbar {
  color: rgb(180, 180, 180);
  font-size: 0.7rem;
}
</style>
