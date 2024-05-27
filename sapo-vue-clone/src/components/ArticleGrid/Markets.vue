<template>
  <div class="markets-box">
    <h3>Mercados</h3>
    <ul>
      <li>
        <h4>Google</h4>
        <div class="market-status">
          <i class="ap fa-solid fa-arrow-right"></i>5,04%
        </div>
      </li>
      <li>
        <h4>Microsoft</h4>
        <div class="mi market-status">
          <i class="fa-solid fa-arrow-right"></i>5,04%
        </div>
      </li>
      <li>
        <h4>Google</h4>
        <div class="market-status">
          <i class="ap fa-solid fa-arrow-right"></i>5,04%
        </div>
      </li>
      <li>
        <h4>Microsoft</h4>
        <div class="mi market-status">
          <i class="ap fa-solid fa-arrow-right"></i>5,04%
        </div>
      </li>
      <li>
        <h4>Google</h4>
        <div class="market-status">
          <i class="ap fa-solid fa-arrow-right"></i>5,04%
        </div>
      </li>
      <li>
        <h4>Microsoft</h4>
        <div class="mi market-status">
          <i class="ap fa-solid fa-arrow-right"></i>5,04%
        </div>
      </li>
      <li>
        <h4>Google</h4>
        <div class="market-status">
          <i class="ap fa-solid fa-arrow-right"></i>5,04%
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
.markets-box {
  width: 340px;
}

h3 {
  font-weight: bold;
  color: #00b100;
  margin-right: 12px;
  padding: 15px 10px;
  cursor: pointer;
}
ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  list-style-type: none;
  padding: 0px;
  overflow-y: scroll;
}
li {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-size: 1rem;
  margin: auto;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  padding: 10px 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
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
  font-weight: bold;
}

.market-status i {
  text-align: center;
  margin-right: 14px;
  margin-left: 4px;
  color: #ffffff;
  transform: rotate(-90deg);
}

.mi {
  background-color: red;
}

.mi i {
  transform: rotate(90deg);
}
</style>
