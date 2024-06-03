import articleImages from "@/data/articleImages.js";
import stockItems from "@/data/stocks";
import news from "@/data/news";

var newsData = null;

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

async function getNewsData() {
  if (newsData !== null) {
    return newsData;
  }

  const baseUrl = "https://newsapi.org";
  const endpoint = "/v2/everything";

  const jsonResp = await fetch(
    `${baseUrl}${endpoint}?q=Observador&language=pt&apiKey=3d4b854edbc046148c5a9aecb900194c`
  );

  const response = await jsonResp.json();

  if (response.articles) {
    newsData = response.articles.filter((article) => article.urlToImage);
  }

  return newsData;
}

function getData() {
  return {
    getNewsData,
    getNewsListData,
    getArticleImages,
    getStocks,
    getBreakingNews,
    getNewsList,
    getLatestNews,
  };
}

export default getData;
