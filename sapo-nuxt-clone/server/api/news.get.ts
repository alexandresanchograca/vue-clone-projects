import staticNews from "~/server/utils/staticNews";
import removeSpecialCharFromTitle from "~/server/utils/removeSpecialChars";
import getSecretValue from "~/server/utils/getSecret";

export default defineEventHandler(async (event): Promise<NewsCollection | undefined> => {
    const baseUrl = "https://newsapi.org";
    const everythingEndpoint: string = "/v2/everything";
    const newsApiKey = await getSecretValue();

    const getObservador = async (): Promise<NewsArticles> =>
        await $fetch(
            `${baseUrl}${everythingEndpoint}?q=Observador&language=pt&apiKey=${newsApiKey}`
        );

    const getExpresso = async (): Promise<NewsArticles> =>
        await $fetch(
            `${baseUrl}${everythingEndpoint}?q=Expresso&language=pt&apiKey=${newsApiKey}`
        );

    const getHeadlines = async (): Promise<NewsArticles> =>
        await $fetch(
            `${baseUrl}${everythingEndpoint}?domains=sapo.pt&apiKey=${newsApiKey}`
        );

    try {
        let observador: NewsArticles, expresso: NewsArticles, manchetes: NewsArticles;
        [observador, expresso, manchetes] = await Promise.all<NewsArticles>([getObservador(), getExpresso(), getHeadlines()]);

        observador.articles = observador.articles.filter((article) => article.urlToImage !== null);
        expresso.articles = expresso.articles.filter((article) => article.urlToImage !== null);
        manchetes.articles = manchetes.articles.filter((article) => article.author !== null);

        removeSpecialCharFromTitle(observador);
        removeSpecialCharFromTitle(expresso);
        removeSpecialCharFromTitle(manchetes);

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
