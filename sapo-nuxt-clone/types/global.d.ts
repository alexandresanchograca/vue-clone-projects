export {};

declare global {
    type StockItem = {
        name: string;
        fullName : string;
        priceDelta: number;
        yesterdayIncrease: boolean;
        svgChart: string;
    }

    type Article = {
        author: string;
        title: string;
        description: string;
        url: string;
        urlToImage: string;
        publishedAt: string;
        content: string;
        source: object;
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
        imageArticle: Article;
        gridArticles: Article[];
    }
}