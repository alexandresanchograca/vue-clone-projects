<template>
  <div class="download">
    <h3>Download</h3>
    <p>Disponível gratuitamente para iPhone, iPad, Apple Watch e Android</p>
    <div class="app-stores">
      <p><i class="fa-brands fa-apple"></i> App Store</p>
      <p><i class="fa-brands fa-google-play"></i> Google Play</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
h3 {
  margin-bottom: 1.2rem;
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
</style>
