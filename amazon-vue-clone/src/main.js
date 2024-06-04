import { createApp } from "vue";
import App from "./App.vue";
import getApiData from "./composables/getApiData";

const { getProductsData } = getApiData();

//const resp = await getProductsData();
createApp(App).mount("#app");
