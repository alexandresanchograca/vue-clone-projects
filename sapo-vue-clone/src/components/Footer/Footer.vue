<template>
  <footer>
    <div class="footer-cols">
      <Newsletters />
      <Explore />
      <About />
      <Download />
    </div>
    <div class="footer-bottom">
      <p>
        © Copyright ECOS 2024 Swept News, SA. Nenhum dos Direitos Reservados
      </p>
    </div>
  </footer>
</template>

<script setup>
import Newsletters from "@/components/Footer/Newsletters.vue";
import Explore from "@/components/Footer/Explore.vue";
import About from "@/components/Footer/About.vue";
import Download from "@/components/Footer/Download.vue";
</script>

<style scoped>
.footer-cols {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: #00af00;
  color: white;
  padding: 40px;
}

.footer-bottom {
  font-size: 0.8rem;
  margin-top: 10px;
  border-top: 1px solid rgba(73, 73, 73, 0.168);
  color: white;
  margin: 0;
  background-color: #00af00;
  padding: 20px;
  text-align: center;
}
</style>
