<template>
  <div>
    <h3>Mercados</h3>
    <ul>
      <li>
        <h4>Google</h4>
        <div class="market-status">
          5,04%
          <i class="ap fa-solid fa-arrow-right"></i>
        </div>
      </li>
      <li>
        <h4>Microsoft</h4>
        <div class="mi market-status">
          5,04%
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </li>
      <li>
        <h4>Google</h4>
        <div class="market-status">
          5,04%
          <i class="ap fa-solid fa-arrow-right"></i>
        </div>
      </li>
      <li>
        <h4>Microsoft</h4>
        <div class="mi market-status">
          5,04%
          <i class="ap fa-solid fa-arrow-right"></i>
        </div>
      </li>
      <li>
        <h4>Google</h4>
        <div class="market-status">
          5,04%
          <i class="ap fa-solid fa-arrow-right"></i>
        </div>
      </li>
      <li>
        <h4>Microsoft</h4>
        <div class="mi market-status">
          5,04%
          <i class="ap fa-solid fa-arrow-right"></i>
        </div>
      </li>
      <li>
        <h4>Google</h4>
        <div class="market-status">
          5,04%
          <i class="ap fa-solid fa-arrow-right"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
h3 {
  font-weight: bold;
  color: #00b100;
  margin-left: 12px;
  margin-right: 12px;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
ul {
  overflow: scroll;
  list-style-type: none;
  padding: 0px;
}
li {
  display: flex;
  font-size: large;
  margin: auto;
  font-weight: bold;
  cursor: pointer;
  margin: 10px;
  padding: 5px;
}
h4 {
  flex-grow: 1;
  font-weight: bold;
}
.market-status {
  flex-grow: 1/30;
  font-size: small;
  background-color: #00b100;
  border-radius: 5px;
  margin: 2px;
  padding: 5px;
  text-align: center;
  color: #ffffff;
}

.mi {
  background-color: red;
}

.mi i {
  transform: rotate(90deg);
}

li i {
  text-align: center;
  margin-left: 14px;
  color: #ffffff;
  transform: rotate(270deg);
}
</style>
