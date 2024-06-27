import stockItems from "~/server/utils/stocks";

export default defineEventHandler(async (event) : Promise<StockItem[]> => {
    return stockItems;
})