<template>
  <div class="recomendations">
    <div id="is-authed">
      <p>Ver recomendações personalizadas</p>
      <button>Iniciar Sessão</button>
      <p>Cliente novo? <a href="">Começar aqui</a></p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.recomendations {
  margin-top: -330px;
  background-color: white;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 20px;
}

#is-authed {
  padding: 20px;
  padding-top: 30px;
  border: 1px solid rgba(53, 53, 53, 0.35);
}

#is-authed p {
  font-size: 0.8rem;
  line-height: 2rem;
}

#is-authed button {
  background-image: linear-gradient(#ffe992 15%, #ffd814);
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 5px;
  padding: 8px 80px;
  border: #ffd814;
  cursor: pointer;
}
#is-authed button:focus {
  background-color: #cfaf11;
  background-image: linear-gradient(#ffe992 15%, #ffd81488);
}
#is-authed a {
  text-decoration: none;
  color: #007185;
}
</style>
