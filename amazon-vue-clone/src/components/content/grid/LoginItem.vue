<template>
  <div class="login-grid-item">
    <div class="login-item">
      <h3 class="bold">Inicie sessão para obter a melhor experiência</h3>
      <button>Inicie sessão com segurança</button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.login-grid-item .login-item {
  background-color: white;
  padding: 20px;
}

.login-item button {
  background-color: #ffd814;
  width: 100%;
  padding: 8px 0px;
  border-radius: 8px;
  border: 1px solid #ffd814;
  margin-top: 20px;
  margin-bottom: 10px;
  cursor: pointer;
}

.login-item button:focus {
  background-color: #e2bf13;
}
</style>
