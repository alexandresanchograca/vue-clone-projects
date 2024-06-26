import staticNews from "~/server/utils/staticNews";

export default defineEventHandler(async (event): Promise<NewsCollection | undefined> => {
    const baseUrl = "https://newsapi.org";
    const everythingEndpoint: string = "/v2/everything";
    const headlinesEndpoint: string = "/v2/top-headlines";

    const getObservador = async (): Promise<NewsArticles> =>
        await $fetch(
            `${baseUrl}${everythingEndpoint}?q=Observador&language=pt&apiKey=3d4b854edbc046148c5a9aecb900194c`
        );

    const getExpresso = async (): Promise<NewsArticles> =>
        await $fetch(
            `${baseUrl}${everythingEndpoint}?q=Expresso&language=pt&from=2024-06-02&apiKey=3d4b854edbc046148c5a9aecb900194c`
        );

    const getHeadlines = async (): Promise<NewsArticles> =>
        await $fetch(
            `${baseUrl}${headlinesEndpoint}?country=pt&apiKey=3d4b854edbc046148c5a9aecb900194c`
        );

    try {
        let observador: NewsArticles, expresso: NewsArticles, manchetes: NewsArticles;
        [observador, expresso, manchetes] = await Promise.all<NewsArticles>([getObservador(), getExpresso(), getHeadlines()]);

        observador.articles = observador.articles.filter((article) => article.urlToImage !== null);
        expresso.articles = expresso.articles.filter((article) => article.urlToImage !== null);
        manchetes.articles = manchetes.articles.filter((article) => article.author !== null);

        //Adding related news items
        expresso.articles = expresso.articles.map((article): Article => ({
            ...article,
            relatedNews: Math.random() < 0.5 ? staticNews : null
        }));

        return {observador, expresso, manchetes} as NewsCollection;
    } catch
        (e) {
        console.error(e);
    }
})
