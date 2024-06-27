import {useAsyncData, useNuxtData} from "#app";
import type { Ref } from "@vue/reactivity";

//Only fetches data once during SSR, can be used with useFetch aswell
export default async function useStocks() : Promise<Ref<StockItem[] | null>> {

   const {data : stocks } = useNuxtData("stockItems");

   if(stocks.value){
     return stocks;
   }

   const { data } = await useAsyncData("stockItems", () : Promise<StockItem[] | null> =>
        $fetch("/api/stocks"));
   return data;
}