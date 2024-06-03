import { createApp } from "vue";
import App from "./App.vue";
import getData from "./composables/getData";

const { getNewsData, getHeadlinesData } = getData();

Promise.all([getNewsData(), getHeadlinesData()]).then((resp) => {
  createApp(App).mount("#app");
});
