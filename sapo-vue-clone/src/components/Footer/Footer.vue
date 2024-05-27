<template>
  <footer>
    <div class="footer-cols">
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
      <div class="explorar">
        <h3>Explorar</h3>
        <ul>
          <li>Eco news</li>
          <li>Eco news</li>
          <li>Eco news</li>
          <li>Eco news</li>
          <li>Eco news</li>
          <li>Eco news</li>
          <li>Eco news</li>
          <li>Eco news</li>
          <li>Eco news</li>
          <li>Eco news</li>
          <li>Eco news</li>
          <li>Eco news</li>
          <li>Eco news</li>
          <li>Eco news</li>
          <li>Eco news</li>
          <li>Eco news</li>
        </ul>
      </div>
      <div class="sobre">
        <h3>Sobre</h3>
        <ul>
          <li>Ficha Técnica</li>
          <li>Ficha Técnica</li>
          <li>Ficha Técnica</li>
        </ul>
      </div>
      <div class="download">
        <h3>Download</h3>
        <p>Disponível gratuitamente para iPhone, iPad, Apple Watch e Android</p>
        <div class="app-stores">
          <p><i class="fa-brands fa-apple"></i>App Store</p>
          <p><i class="fa-brands fa-google-play"></i>Google Play</p>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>
        © Copyright ECOS 2024 Swept News, SA. Nenhum dos Direitos Reservados
      </p>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer-cols {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: #00af00;
  color: white;
  padding: 40px;
}

.footer-cols h3 {
  margin-bottom: 1.2rem;
}

.footer-cols li {
  cursor: pointer;
}

.newsletters {
  display: flex;
  flex-direction: column;
}
.newsletters p {
  font-weight: bold;
}
.newsletter h3 {
  font-weight: bold;
  margin: 20px;
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

.explorar {
  @media (max-width: 600px) {
    display: none;
  }
}

.explorar ul {
  padding: 0;
  list-style-type: none;
}

.explorar li {
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
}

.explorar h3 {
  text-align: left;
}
.sobre {
  @media (max-width: 600px) {
    display: none;
  }
}
.sobre h3 {
  text-align: left;
}

.sobre ul {
  padding: 0px;

  list-style-type: none;
  text-align: left;
}
.sobre li {
  margin-top: 15px;
  font-weight: bold;
  text-align: left;
}
.download {
  display: flex;
  flex-direction: column;
}
.download p {
  align-items: flex-start;
  font-weight: bold;
}
.app-stores {
  align-self: flex-start;
}
.app-stores p {
  border-radius: 20px;
  margin: 10px;
  padding: 10px;
  border: 1px solid rgb(0, 255, 0);
}

.app-stores p:hover {
  border: 0px;
  background-color: rgb(0, 255, 0);
  transition: 0.2s ease-out;
  cursor: pointer;
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
