<template>
  <span class="head-bar">
    <!-- https://www.w3schools.com/css/css_image_sprites.asp -->
    <div class="navbar-home-logo">
      <img id="nav-amazon-logo" src="../../assets/trasnparent_pixel.gif" />
      <p class="logo-region">.es</p>
    </div>
    <div class="delivery-location">
      <img id="nav-location-logo" src="../../assets/trasnparent_pixel.gif" />
      <p>Entregar em <span class="strong-bold">Portugal</span></p>
    </div>
    <SearchBar></SearchBar>
    <div class="country-selector">
      <img class="country-logo-es" src="../../assets/trasnparent_pixel.gif" />
      <p>PT</p>
      <i class="fa-solid fa-caret-down navbar"></i>
    </div>
    <div class="auth-status">
      <p>Olá, inicie sessão</p>
      <p class="strong-bold">
        Conta e listas
        <i class="fa-solid fa-caret-down navbar"></i>
      </p>
    </div>
    <div class="orders-returns">
      <div>
        Devoluções
        <p class="strong-bold">e pedidos</p>
      </div>
    </div>
    <div class="shopping-cart">
      <span id="cart-items-counter">0</span>
      <img id="shopping-nav-logo" src="../../assets/trasnparent_pixel.gif" />
      <p class="bold">Carrinho</p>
    </div>
  </span>
</template>

<script setup>
import SearchBar from "@/components/navbar/SearchBar.vue";
</script>

<style scoped>
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

.navbar-home-logo {
  display: flex;
  width: 130px;
  height: 50px;
  padding: 8px;
  margin-left: 10px;
}

.logo-region {
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 14px;
  text-wrap: nowrap;
}

#nav-amazon-logo {
  width: 97px;
  height: 30px;
  background: url(../../assets/sprite1x.png) -10px -51px;
  margin-top: 12px;
}

.delivery-location {
  display: flex;
  box-sizing: border-box;
  align-items: flex-end;
  flex-shrink: 0;
  height: 50px;
  width: 105px;
  font-size: 0.7rem;
  padding: 8px;
  margin-top: auto;
  margin-bottom: auto;
}

.delivery-location p span {
  font-size: 0.9rem;
}

#nav-location-logo {
  display: flex;
  width: 15px;
  height: 18px;
  background: url(../../assets/sprite1x.png) -71px -378px;
  margin-top: 4px;
  margin-right: 3px;
}

.fa-caret-down.navbar {
  color: rgb(180, 180, 180);
  font-size: 0.7rem;
}

.country-selector {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 8px 10px;
  gap: 5px;
}

.country-selector p {
  font-size: 0.9rem;
  font-weight: bold;
}

.country-logo-es {
  width: 24px;
  height: 18px;
  background: url(../../assets/countries_small.png) -48px -166px;
}

.auth-status {
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  font-size: 0.85rem;
  padding: 0px 10px;
}

.auth-status p {
  flex-shrink: 0;
  text-wrap: nowrap;
}

.orders-returns {
  display: flex;
  align-items: center;
  padding: 0px 10px;
  text-wrap: nowrap;
  font-size: 0.85rem;
}

.shopping-cart {
  display: flex;
  font-size: 0.85rem;
}

.shopping-cart p {
  align-self: center;
}

#shopping-nav-logo {
  width: 40px;
  height: 48px;
  margin-top: auto;
  background: url(../../assets/sprite1x.png) -10px -340px;
}

#cart-items-counter {
  position: relative;
  font-size: 1rem;
  left: 27px;
  top: 10px;
  font-weight: bold;
  color: #febd69;
}
.auth-status {
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  font-size: 0.85rem;
  padding: 0px 10px;
}

.auth-status p {
  flex-shrink: 0;
  text-wrap: nowrap;
}

.orders-returns {
  display: flex;
  align-items: center;
  padding: 0px 10px;
  text-wrap: nowrap;
  font-size: 0.85rem;
}

.shopping-cart {
  display: flex;
  font-size: 0.85rem;
  padding: 0px 10px;
  margin-right: 5px;
}

.shopping-cart p {
  align-self: center;
}

#shopping-nav-logo {
  width: 40px;
  height: 42px;
  margin-top: auto;
  background: url(../../assets/sprite1x.png) -10px -340px;
}

#cart-items-counter {
  position: relative;
  font-size: 1rem;
  left: 27px;
  top: 14px;
  font-weight: bold;
  color: #febd69;
}
</style>
