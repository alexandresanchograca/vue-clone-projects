<template>
  <div class="delivery-location">
    <img id="nav-location-logo" src="@/assets/trasnparent_pixel.gif" />
    <p>Entregar em <span class="strong-bold">Portugal</span></p>
  </div>
</template>

<script setup></script>

<style scoped>
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
  background: url(@/assets/sprite1x.png) -71px -378px;
  margin-top: 4px;
  margin-right: 3px;
}
</style>
