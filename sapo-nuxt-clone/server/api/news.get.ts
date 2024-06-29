import stockItems from "~/server/utils/stocks";

export default defineEventHandler(async (event) : Promise<NewsCollection> => {
    const baseUrl = "https://newsapi.org";
    const everythingEndpoint: string = "/v2/everything";
    const headlinesEndpoint: string = "/v2/top-headlines";

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

    try {
        let observador, expresso, manchetes;
        [observador, expresso, manchetes] = await Promise.all([getObservador(), getExpresso(), getHeadlines()]);

        observador.articles = observador.articles.filter((article) => article.urlToImage !== null);
        expresso.articles = expresso.articles.filter((article) => article.urlToImage !== null);
        manchetes.articles = manchetes.articles.filter((article) => article.author !== null);

        return {observador, expresso, manchetes};
    } catch
        (e) {
        console.error(e);
    }
})
