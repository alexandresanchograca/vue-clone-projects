import {useNuxtData} from "#app";
import type {Ref} from "@vue/reactivity";


export default async function useNews() : Promise<Ref<NewsCollection> | null | undefined>   {
    const everythingEndpoint : string = "/v2/everything";
    const headlinesEndpoint : string = "/v2/top-headlines";

    const { data: newsData } = useNuxtData("newsData");
    if(newsData.value){
        return JSON.parse(JSON.stringify(newsData.value))
    }

    const baseUrl = "https://newsapi.org";

    const getObservador = async () =>
        await $fetch(
            `${baseUrl}${everythingEndpoint}?q=Observador&language=pt&apiKey=3d4b854edbc046148c5a9aecb900194c`
        );

    const getExpresso = async () =>
        await $fetch(
            `${baseUrl}${everythingEndpoint}?q=Expresso&language=pt&from=2024-06-02&apiKey=3d4b854edbc046148c5a9aecb900194c`
        );

    const getHeadlines = async () =>
        await $fetch(
            `${baseUrl}${headlinesEndpoint}?country=pt&apiKey=3d4b854edbc046148c5a9aecb900194c`
        );

    try{
        const { data } = await useAsyncData("newsData", async () : Promise<NewsCollection> => {
                let observador, expresso, manchetes;
                [observador, expresso, manchetes] = await Promise.all([getObservador(), getExpresso(), getHeadlines()]);
                return {observador, expresso, manchetes};
            }
        );

        return JSON.parse(JSON.stringify(data.value))
    }catch(e){
        console.error(e);
    }
}

