<template>
  <div>
    <HeaderBar />
    <HeaderNavbar />
    <HeaderTabsBar />
    <slot />
    <FooterDiv />
  </div>
</template>

<script setup lang="ts"></script>

<style>
:root {
  background-color: rgb(244, 244, 244);
}

* {
  margin: 0px;
  font-family: "Jersey Kanit", sans-serif;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.home {
  display: flex;
  flex-direction: column;
}
.main-content {
  display: block;
  margin: auto;
  max-width: 1120px;
}

.line-break-bar {
  align-self: flex-start;
  justify-content: center;
  width: 80%;
  margin-left: 20px;
  height: 2px;
  background-color: rgba(128, 128, 128, 0.176);
}

.author-note {
  font-size: 0.8rem;
  font-weight: 500;
  color: gray;
  margin-top: 1.2rem;
}
</style>
