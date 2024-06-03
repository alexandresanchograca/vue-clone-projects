import { createApp } from "vue";
import App from "./App.vue";
import getData from "./composables/getData";

const { getNewsData } = getData();
await getNewsData();
createApp(App).mount("#app");
