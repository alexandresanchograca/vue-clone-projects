<template>
  <div class="shopping-cart">
    <span id="cart-items-counter">0</span>
    <img id="shopping-nav-logo" src="@/assets/trasnparent_pixel.gif" />
    <p class="bold">Carrinho</p>
  </div>
</template>

<script setup></script>

<style scoped>
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
  background: url(@/assets/sprite1x.png) -10px -340px;
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
  background: url(@/assets/sprite1x.png) -10px -340px;
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
