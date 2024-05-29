<template>
  <footer>
    <a id="back-top-btn" href="#top">Voltar ao início</a>
    <div class="footer-content">
      <AboutUs></AboutUs>
      <Money></Money>
      <PaymentMethods></PaymentMethods>
      <Help></Help>
    </div>
    <Countries></Countries>
    <Services></Services>
    <Copyright></Copyright>
  </footer>
</template>

<script setup>
import AboutUs from "@/components/footer/content/AboutUs.vue";
import Help from "@/components/footer/content/Help.vue";
import Money from "@/components/footer/content/Money.vue";
import PaymentMethods from "@/components/footer/content/PaymentMethods.vue";
import Countries from "@/components/footer/Countries.vue";
import Copyright from "@/components/footer/Copyright.vue";
import Services from "@/components/footer/Services.vue";
</script>

<style>
#back-top-btn {
  display: inline-block;
  width: 100%;
  background-color: #37475a;
  text-align: center;
  padding: 15px;
  color: white;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: bold;
  box-sizing: border-box;
}
#back-top-btn:hover {
  background-color: #435771;
}
.footer-content {
  display: flex;
  gap: 80px;
  color: white;
  justify-content: center;
  background-color: #232f3e;
  padding: 40px 10px;
}

.footer-content h4 {
  font-weight: bold;
  margin-bottom: 10px;
}

.footer-content ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 1.8rem;
}

.footer-content li {
  margin-bottom: 0.8rem;
  max-width: 140px;
  font-size: 0.9rem;
  font-weight: 500;
}

.footer-content li:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
