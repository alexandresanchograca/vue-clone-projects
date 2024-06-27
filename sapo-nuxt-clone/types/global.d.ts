export {};

declare global {
    type StockItem = {
        name: string,
        fullName : string,
        priceDelta: number,
        yesterdayIncrease: boolean,
        svgChart: string
    }
}