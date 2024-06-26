<template>
  <footer>
    <div class="footer-cols">
      <FooterNewsletters />
      <FooterExplore />
      <FooterAbout />
      <FooterDownload />
    </div>
    <div class="footer-bottom">
      <p>
        © Copyright ECOS 2024 Swept News, SA. Nenhum dos Direitos Reservados
      </p>
    </div>
  </footer>
</template>

<script setup>
import FooterNewsletters from "@/components/Footer/FooterNewsletters.vue";
import FooterExplore from "@/components/Footer/FooterExplore.vue";
import FooterAbout from "@/components/Footer/FooterAbout.vue";
import FooterDownload from "@/components/Footer/FooterDownload.vue";
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
