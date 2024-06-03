import articleImages from "@/data/articleImages.js";
import stockItems from "@/data/stocks";
import news from "@/data/news";

const baseUrl = "https://newsapi.org";
var newsData = null;
var headlineData = null;

function getArticleImages() {
  return articleImages;
}

function getStocks() {
  return stockItems;
}

function getBreakingNews() {
  return news.breakingNews;
}

function getLatestNews() {
  return news.latestNews;
}

function getNewsList() {
  return news.newsList;
}

function getNewsListData() {
  return newsData;
}

function getHeadNewsListData() {
  return headlineData;
}

async function getNewsData() {
  if (newsData !== null) {
    return newsData;
  }

  const endpoint = "/v2/everything";

  const getObservador = async () =>
    await fetch(
      `${baseUrl}${endpoint}?q=Observador&language=pt&apiKey=3d4b854edbc046148c5a9aecb900194c`
    );

  const getExpresso = async () =>
    await fetch(
      `${baseUrl}${endpoint}?q=Expresso&language=pt&from=2024-06-02&apiKey=3d4b854edbc046148c5a9aecb900194c`
    );

  const jsonResponses = await Promise.all([getObservador(), getExpresso()]);
  const responses = await Promise.all(
    jsonResponses.map((jResp) => jResp.json())
  );

  if (responses.length) {
    newsData = responses[0].articles
      .concat(responses[1].articles)
      .filter((article) => article.urlToImage);
  }

  return newsData;
}

async function getHeadlinesData() {
  if (headlineData !== null) {
    return headlineData;
  }

  const endpoint = "/v2/top-headlines";

  const jsonResp = await fetch(
    `${baseUrl}${endpoint}?country=pt&apiKey=3d4b854edbc046148c5a9aecb900194c`
  );

  const response = await jsonResp.json();

  if (response.articles) {
    headlineData = response.articles;
  }

  return headlineData;
}

function getData() {
  return {
    getNewsData,
    getHeadlinesData,
    getNewsListData,
    getHeadNewsListData,
    getArticleImages,
    getStocks,
    getBreakingNews,
    getNewsList,
    getLatestNews,
  };
}

export default getData;
