import {useFetch, useNuxtData} from "#app";
import type {Ref} from "@vue/reactivity";


export default async function useNews() : Promise<NewsCollection> {
    const {data : newsData} = useNuxtData("newsData");

    if(newsData.value){
        return JSON.parse(JSON.stringify(newsData.value));
    }

    const { data } = await useFetch("/api/news", { key: "newsData" });

    return JSON.parse(JSON.stringify(data.value));
}

