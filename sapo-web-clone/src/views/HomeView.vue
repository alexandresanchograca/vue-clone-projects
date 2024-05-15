<template>
  <div class="home">
    <HeaderBar></HeaderBar>
    <Navbar></Navbar>
    <TabsBar></TabsBar>
    <ArticleImage></ArticleImage>
  </div>
</template>

<script>
import ArticleImage from "@/components/ArticleImage.vue";
import HeaderBar from "@/components/Header/HeaderBar.vue";
import Navbar from "@/components/Header/Navbar.vue";
import TabsBar from "@/components/Header/TabsBar.vue";

export default {
  name: "HomeView",
  components: {
    HeaderBar,
    Navbar,
    TabsBar,
    ArticleImage,
  },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
}
</style>
