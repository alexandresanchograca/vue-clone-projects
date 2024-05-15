<template>
  <div class="header-bar">
    <div class="header-links">
      <a>MENU</a>| <a>MAIL</a><a>CAPAS DE JORNAIS</a>
    </div>
    <div class="sapo-logo">
      <SapoLogo></SapoLogo>
    </div>
  </div>
</template>

<script>
import SapoLogo from "@/components/Header/SapoLogo.vue";

export default {
  components: {
    SapoLogo,
  },
};
</script>

<style scoped>
.header-bar {
  display: block;
  height: 60px;
  background-color: rgb(31, 31, 31);
}
.sapo-logo {
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
