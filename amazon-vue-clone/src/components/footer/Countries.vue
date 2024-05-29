<template>
  <div class="countries-store">
    <img id="amazon-footer-logo" src="@/assets/trasnparent_pixel.gif" />
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
</template>

<script setup></script>

<style scoped>
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
  background: url(@/assets/sprite1x.png) -10px -51px;
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
</style>
