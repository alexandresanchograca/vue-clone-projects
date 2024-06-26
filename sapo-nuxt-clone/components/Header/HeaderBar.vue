<template>
  <div class="header-bar-wrapper">
    <div class="header-bar">
      <div class="header-links">
        <a>MENU</a>| <a>MAIL</a><a>CAPAS DE JORNAIS</a>
      </div>
      <div class="sapo-logo">
        <HeaderSapoLogo />
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderSapoLogo from "@/components/Header/HeaderSapoLogo.vue";
</script>

<style scoped>
.header-bar-wrapper {
  background-color: rgb(31, 31, 31);
}

.header-bar {
  display: block;
  height: 60px;
  max-width: 1200px;
  margin: auto;
}
.sapo-logo:hover {
  cursor: pointer;
}
.header-links {
  box-sizing: content-box;
  line-height: 30px;
  position: relative;
  top: 15px;
  left: 30px;
  font-size: small;
  float: left;
  color: white;

  @media (max-width: 700px) {
    display: none;
  }
}
.header-links > a {
  margin-right: 5px;
}
.header-links > a:hover {
  color: green;
  cursor: pointer;
}
.header-links > a:first-child {
  font-weight: bold;
}
</style>
