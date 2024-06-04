import { createApp } from "vue";
import App from "./App.vue";
import getApiData from "./composables/getApiData";

const { getProductsData, getCategoriesData } = getApiData();

Promise.all([getProductsData(), getCategoriesData()]).then((resp) => {
  createApp(App).mount("#app");
});
