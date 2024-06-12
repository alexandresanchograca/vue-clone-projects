<template>
  <div class="newsletters">
    <h3>Newsletters</h3>
    <p>Receba gratuitamente informação económica de referência</p>
    <div class="green-newsletter-pill">
      <i class="fa-regular fa-envelope"></i>Subscrever
    </div>
    <div class="social">
      <h2>Siga-nos</h2>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-linkedin-in"></i>
      <i class="fa-brands fa-facebook-f"></i>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
h3 {
  margin-bottom: 1.2rem;
}

.newsletters {
  display: flex;
  flex-direction: column;
}
p {
  font-weight: bold;
}

.green-newsletter-pill {
  font-size: 1rem;
  align-self: flex-start;
  margin-top: 50px;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 20px;
  color: #ffffff;
  padding: 10px;
}
.green-newsletter-pill:hover {
  background-color: white;
  color: green;
  cursor: pointer;
}
.fa-regular {
  margin-right: 5px;
}
.fa-brands {
  box-sizing: border-box;
  min-width: 34px;
  text-align: center;
}
.social {
  margin-top: auto;
  /*Padding para quando a pagina encolhe*/
  padding-top: 20px;
  padding-bottom: 20px;
}
.social h2 {
  margin-bottom: 10px;
}
.social .fa-brands {
  border: 1px solid rgb(0, 255, 0);
  margin: 5px;
  margin-left: 0px;
  border-radius: 20px;
  padding: 8px;
}

.social .fa-brands:hover {
  background-color: rgb(0, 255, 0);
  cursor: pointer;
  transition: 0.2s ease-out;
}

.green-newsletter-pill:hover {
  color: white;
  border: 0px;
  background-color: rgb(0, 255, 0);
  transition: 0.2s ease-out;
}
</style>
