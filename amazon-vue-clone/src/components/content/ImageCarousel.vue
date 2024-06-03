<template>
  <div class="main-image-carousel">
    <ul v-if="banners" class="slides">
      <div v-for="(banner, index) in banners" :key="banner.id">
        <input type="radio" name="radio-buttons" :id="index" checked />
        <li class="slide-container">
          <div class="slide-image">
            <img :src="require(`@/assets/carousel/${banner.imageName}`)" />
          </div>
          <div class="carousel-controls">
            <label :for="index - 1" class="prev-slide">
              <span>‹</span>
            </label>
            <label :for="index + 1" class="next-slide">
              <span>›</span>
            </label>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps(["banners"]);
</script>

<style scoped>
.main-image-carousel {
  max-width: 1500px;
  width: 100%;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: rgb(15, 15, 16);
}

ul.slides {
  display: block;
  position: relative;
  height: 600px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style: none;
}

.slides * {
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}

.slide-container {
  display: block;
}

.slide-image {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0;
  transition: all 0.7s ease-in-out;
}

.slide-image img {
  width: auto;
  min-width: 100%;
  height: 100%;
  mask-image: linear-gradient(
    to bottom,
    rgb(255, 255, 255) 45%,
    transparent 100%
  );
}

.carousel-controls {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  font-size: 100px;
  color: #bebebe;
}

.carousel-controls label {
  display: none;
  position: absolute;
  padding: 50px 20px;
  opacity: 0;
  transition: opacity 0.2s;
  cursor: pointer;
}

.slide-image:hover + .carousel-controls label {
  opacity: 0.5;
}

.carousel-controls label:hover {
  opacity: 1;
}

.carousel-controls .prev-slide {
  width: 49%;
  text-align: left;
  left: 0;
}

.carousel-controls .next-slide {
  width: 49%;
  text-align: right;
  right: 0;
}

input:checked + .slide-container .slide-image {
  opacity: 1;
  transform: scale(1);
  transition: opacity 1s ease-in-out;
}

input:checked + .slide-container .carousel-controls label {
  display: block;
}

input:checked + .slide-container .nav label {
  display: block;
}
</style>
