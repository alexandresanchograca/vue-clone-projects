import { createApp } from "vue";
import App from "./App.vue";
import useData from "@/composables/useData";

const { getNewsData, getNewsListData } = useData();

getNewsData().then((newsData) => createApp(App).mount("#app"));
