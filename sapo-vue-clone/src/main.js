import { createApp } from "vue";
import App from "./App.vue";
import getData from "./composables/getData";

const { getNewsData } = getData();

getNewsData().then((newsData) => createApp(App).mount("#app"));
