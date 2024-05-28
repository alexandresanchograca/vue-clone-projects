import articleImages from "@/data/articleImages.js";
import stockItems from "@/data/stocks";
import news from "@/data/news";

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

function getData() {
  return {
    getArticleImages,
    getStocks,
    getBreakingNews,
    getNewsList,
    getLatestNews,
  };
}

export default getData;
