import { createApp } from "vue";
import App from "./App.vue";
import getApiData from "./composables/getApiData";

const { requestApiData } = getApiData();

requestApiData().then((resp) => {
  createApp(App).mount("#app");
});
