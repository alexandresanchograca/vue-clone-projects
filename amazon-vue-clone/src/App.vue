<template>
  <Navbar></Navbar>
  <Content></Content>
  <Footer></Footer>
</template>

<script setup>
import Navbar from "@/components/navbar/Navbar.vue";
import Content from "@/components/content/Content.vue";
import Footer from "@/components/footer/content/Footer.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");

:root {
  background-color: rgb(244, 244, 244);
}

* {
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.home {
  display: flex;
  flex-direction: column;
}

.bold {
  font-weight: bold;
}

.strong-bold {
  font-weight: 800;
}
</style>
