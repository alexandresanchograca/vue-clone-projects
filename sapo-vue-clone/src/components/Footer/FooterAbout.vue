<template>
  <div class="sobre">
    <h3>Sobre</h3>
    <ul>
      <li>Ficha Técnica</li>
      <li>Ficha Técnica</li>
      <li>Ficha Técnica</li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
h3 {
  margin-bottom: 1.2rem;
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
  cursor: pointer;
}
</style>
