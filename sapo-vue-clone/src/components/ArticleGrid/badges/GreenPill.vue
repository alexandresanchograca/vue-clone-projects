<template>
  <div v-if="true" class="pill-wrapper">
    <div class="img-green-pill" :class="{ hollow: hollow }">ESPECIAL</div>
  </div>
</template>

<script setup>
const props = defineProps(["hollow"]);
</script>

<style scoped>
.pill-wrapper {
  width: 75%;
  margin: auto;
  display: flex;
  padding: 20px;
  padding-left: 0;
  padding-top: 0;
  margin-left: 0;

  @media (max-width: 800px) {
    display: none;
  }
}

.img-green-pill {
  background-color: #00d700;
  color: white;
  border-radius: 20px;
  padding: 10px;
  font-size: 0.7rem;
  font-weight: bold;
  margin: 0;
}

div.hollow {
  color: #00d700;
  border: 1px solid #00d700;
  background-color: rgba(0, 0, 0, 0);
}
</style>
