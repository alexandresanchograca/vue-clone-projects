<template>
  <div class="signature-card">
    <h2>Assine o ECO Premium</h2>
    <p>No momento em que a informação é mais importante do que nunca, apoie o jornalismo independente e
      rigoroso.<br><br>
      De que forma? Assine o ECO Premium e tenha acesso a notícias exclusivas, à opinião que conta, às reportagens e
      especiais que mostram o outro lado da história.<br><br>
      Esta assinatura é uma forma de apoiar o ECO e os seus jornalistas. A nossa contrapartida é o jornalismo
      independente, rigoroso e credível.</p>
    <GreenPill class="green-pill-btn">Assine Já</GreenPill>
    <div class="subscription-plan">Veja todos os planos</div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.signature-card {
  box-sizing: border-box;
  background-color: #e9ffe9;
  border-top: 5px solid #00af00;
  padding: 2rem;
  width: 75%;
  margin: auto;
}

.signature-card h2 {
  text-align: center;
  color: #00af00;
  font-weight: 550;
}

.signature-card p {
  margin: 40px 0;
  font-size: 1.2rem;
  line-height: 1.8rem;
}

.signature-card .green-pill-btn {
  justify-content: center;
  font-size: 1.2rem;
}

.signature-card a {
  justify-content: center;
}

.subscription-plan {
  text-align: center;
  line-height: 1.8rem;
  text-decoration: underline green;
}
</style>