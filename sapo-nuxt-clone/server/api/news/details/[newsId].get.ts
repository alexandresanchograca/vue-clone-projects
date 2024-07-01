export default defineEventHandler(async (event): Promise<Article> => {
    const baseUrl = "https://newsapi.org";
    const everythingEndpoint: string = "/v2/everything";
    const apiKey = "3d4b854edbc046148c5a9aecb900194c"

    const {newsId} = event.context.params;

    const data = await $fetch<NewsArticles>(`${baseUrl}${everythingEndpoint}?apiKey=${apiKey}&q=${newsId}&searchIn=title`);

    return data?.articles?.[0] as Article;
})
