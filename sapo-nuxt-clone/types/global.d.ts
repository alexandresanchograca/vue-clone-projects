export {};

declare global {
    type Some<T> = T | null | undefined;

    type StockItem = {
        name: string;
        fullName: string;
        priceDelta: number;
        yesterdayIncrease: boolean;
        svgChart: string;
    }

    type ShortArticle = {
        title: string;
        imageName: string;
        author: string;
        time: string;
    }

    type Article = {
        author: string;
        title: string;
        titleUri: string;
        description: string;
        url: string;
        urlToImage: string;
        publishedAt: string;
        content: string;
        source: object;
        relatedNews?: ShortArticle[] | null;
    }

    type NewsArticles = {
        articles: Article[];
    }

    type NewsCollection = {
        observador: NewsArticles;
        expresso: NewsArticles;
        manchetes: NewsArticles;
    }

    type ArticleContent = {
        imageArticle: Some<Article>;
        gridArticles: Array<Some<Article>>;
    }
}