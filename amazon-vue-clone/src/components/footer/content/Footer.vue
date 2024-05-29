<template>
  <footer>
    <a id="back-top-btn" href="#top">Voltar ao início</a>
    <div class="footer-content">
      <div class="about-us">
        <h4>Conheça-nos</h4>
        <ul>
          <li>Carreiras</li>
          <li>Carreiras</li>
          <li>Carreiras</li>
          <li>Carreiras</li>
        </ul>
      </div>
      <div class="earn-money">
        <h4>Ganhe dinheiro connosco</h4>
        <ul>
          <li>Vender na Amazon</li>
          <li>Vender na Amazon Handmade</li>
          <li>Vender na Amazon</li>
          <li>Vender na Amazon</li>
          <li>Vender na Amazon</li>
          <li>Vender na Amazon</li>
          <li>Vender na Amazon</li>
          <li>Vender na Amazon</li>
          <li>Vender na Amazon</li>
          <li>Vender na Amazon</li>
        </ul>
      </div>
      <div class="payment-methods">
        <h4>Métodos de pagamento da Amazon</h4>
        <ul>
          <li>Carreiras</li>
          <li>Carreiras</li>
          <li>Carreiras</li>
          <li>Carreiras</li>
        </ul>
      </div>
      <div class="help">
        <h4>Precisa de ajuda?</h4>
        <ul>
          <li>Devolver ou substituir produtos</li>
          <li>Taxas e políticas de envio</li>
          <li>Alertas de recolhas e segurança de produtos</li>
          <li>Serviço de apoio ao cliente</li>
          <li>Serviço de apoio ao cliente</li>
          <li>Serviço de apoio ao cliente</li>
          <li>Serviço de apoio ao cliente</li>
          <li>Serviço de apoio ao cliente</li>
          <li>Serviço de apoio ao cliente</li>
        </ul>
      </div>
    </div>
    <div class="countries-store">
      <img
        id="amazon-footer-logo"
        src="../../../assets/trasnparent_pixel.gif"
      />
      <ul>
        <li>Austrália</li>
        <li>Alemanha</li>
        <li>Brasil</li>
        <li>Canadá</li>
        <li>China</li>
        <li>Alemanha</li>
        <li>Estados Unidos da América</li>
        <li>França</li>
        <li>Índia</li>
        <li>Itália</li>
        <li>Japão</li>
        <li>Alemanha</li>
        <li>Alemanha</li>
        <li>Alemanha</li>
        <li>Alemanha</li>
        <li>Alemanha</li>
        <li>Alemanha</li>
      </ul>
    </div>
    <div class="amazon-services-wrapper">
      <div class="other-services">
        <div class="item-service">
          <h4 class="bold">Amazon Music</h4>
          <p>Transmissão de milhões de músicas</p>
        </div>
        <div class="item-service">
          <h4 class="bold">AbeBooks</h4>
          <p>Livros, arte e colecionáveis</p>
        </div>
        <div class="item-service">
          <h4 class="bold">Amazon Web Services</h4>
          <p>Cloud dimensionável</p>
          <p>Serviços de computação</p>
        </div>
        <div class="item-service">
          <h4 class="bold">Kindle Direct Publishing</h4>
          <p>Publicação digital independente fácil</p>
        </div>
        <div class="item-service">
          <h4 class="bold">Amazon Music</h4>
          <p>Transmissão de milhões de músicas</p>
        </div>
        <div class="item-service">
          <h4 class="bold">Amazon Music</h4>
          <p>Transmissão de milhões de músicas</p>
        </div>
        <div class="item-service">
          <h4 class="bold">Amazon Music</h4>
          <p>Transmissão de milhões de músicas</p>
        </div>
        <div class="item-service">
          <h4 class="bold">Amazon Music</h4>
          <p>Transmissão de milhões de músicas</p>
        </div>
      </div>
    </div>
    <div class="terms-and-conditions">
      <div>
        <p>Condições de utilização</p>
        <p>Condições de utilização</p>
        <p>Condições de utilização</p>
        <p>Condições de utilização</p>
        <p>Condições de utilização</p>
      </div>
      <div class="copyrights">
        @1996-2024, Amazon.com, Inc. ou as suas afiliadas
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
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

.countries-store {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding-bottom: 30px;
  background-color: #232f3e;
  color: white;
}

#amazon-footer-logo {
  width: 97px;
  height: 30px;
  background: url(../../../assets/sprite1x.png) -10px -51px;
  transform: scale(0.8);
  margin-top: 12px;
}
.countries-store ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  list-style-type: none;
  padding: 0;
  max-width: 980px;
  font-size: 0.8rem;
}

.countries-store li:hover {
  cursor: pointer;
  text-decoration: underline;
}

.amazon-services-wrapper {
  background-color: #131a22;
  padding: 20px 0px;
  padding-bottom: 30px;
}

.other-services {
  display: grid;
  max-width: 1500px;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 10px;
  gap: 20px;
  color: white;
  font-size: 0.7rem;
  max-width: 980px;
}

.other-services .item-service:hover {
  text-decoration: underline;
  cursor: pointer;
}

.terms-and-conditions {
  background-color: #131a22;
  color: white;
  font-size: 0.8rem;
}

.terms-and-conditions div {
  display: flex;
  justify-content: center;
  gap: 20px;
  line-height: 1.6rem;
}

.terms-and-conditions p:hover {
  cursor: pointer;
  text-decoration: underline;
}

.terms-and-conditions .copyrights {
  padding-bottom: 15px;
}
</style>
