<template>
  <div>
    <img src="../../assets/news-files/small-crop.jpg" />
    <div class="small-news-desc">
      <div class="red-pill"><p>EXCLUSIVO</p></div>
      35 consorcios do PRR pediram para alterar composicao
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
img {
  flex-shrink: 0;
  max-width: 100%;
  overflow: hidden;
}
h3 {
  float: right;
  font-size: 1.3rem;
  font-weight: bold;
}
.small-news-desc {
  display: block;
  font-size: 1.3rem;
  font-weight: bold;
}
.red-pill {
  float: left;
}
.red-pill p {
  float: left;
  margin-top: 5px;
  margin-right: 10px;
  margin-left: 10px;
  padding: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 20px;
  font-size: small;
  color: white;
  background-color: red;
}
</style>
