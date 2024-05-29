<template>
  <div class="navbar-home-logo">
    <img id="nav-amazon-logo" src="@/assets/trasnparent_pixel.gif" />
    <p class="logo-region">.es</p>
  </div>
</template>

<script setup></script>

<style scoped>
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
  background: url(@/assets/sprite1x.png) -10px -51px;
  margin-top: 12px;
}
</style>
