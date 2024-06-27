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

    type HeadlineArticle = {
        id: string;
        name: string;
        description: string;
        url: string;
        category: string;
        language: string;
        country: string;
    }

    type HeadlineArticles = {
        sources: HeadlineArticle[];
    }

    type NewsCollection = {
        observador: NewsArticles;
        expresso: NewsArticles;
        manchetes: HeadlineArticles;
    }
}