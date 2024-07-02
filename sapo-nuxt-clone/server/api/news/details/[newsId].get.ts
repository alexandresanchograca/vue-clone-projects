export default defineEventHandler(async (event): Promise<Article> => {
    const baseUrl = "https://newsapi.org";
    const everythingEndpoint: string = "/v2/everything";
    const {newsApiKey} = useRuntimeConfig();

    const {newsId} = event.context.params;

    const data = await $fetch<NewsArticles>(`${baseUrl}${everythingEndpoint}?apiKey=${newsApiKey}&q=${newsId}&searchIn=title`);

    return data?.articles?.[0] as Article;
})
