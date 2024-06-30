import {useFetch, useNuxtData} from "#app";
import type {Ref} from "@vue/reactivity";

/* This returns a copy on the first call to avoid hydration errors because we mutate the data on the server rendering process */
export default async function useNews(): Promise<NewsCollection> {
    const {data: newsData} = useNuxtData("newsData");

    if (newsData.value) {
        return newsData.value as NewsCollection;
    }

    const {data} = await useFetch("/api/news", {key: "newsData"});

    return JSON.parse(JSON.stringify(data.value));
}

