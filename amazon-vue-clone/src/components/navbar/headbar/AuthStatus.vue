<template>
  <div class="auth-status">
    <p>Olá, inicie sessão</p>
    <p class="strong-bold">
      Conta e listas
      <i class="fa-solid fa-caret-down navbar"></i>
    </p>
  </div>
</template>

<script setup></script>

<style scoped>
.auth-status {
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  font-size: 0.85rem;
  padding: 0px 10px;
}

.auth-status p {
  flex-shrink: 0;
  text-wrap: nowrap;
}
</style>
