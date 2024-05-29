<template>
  <div class="green-badge">
    <i class="fa-solid fa-chart-simple"></i>
  </div>
</template>

<script setup></script>

<style scoped>
.green-badge {
  position: relative;
  bottom: 75px;
  left: 20px;
  z-index: 5;
}

.green-badge i {
  position: absolute;
  align-self: flex-start;
  background-color: #37bb37;
  color: white;
  font-size: 1.6rem;
  border-radius: 100px;
  padding: 12px 14px;
}
</style>
