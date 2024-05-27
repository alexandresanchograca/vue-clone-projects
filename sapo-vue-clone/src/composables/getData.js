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

function getNews() {
  return news.news;
}

function getData() {
  return { getArticleImages, getStocks, getBreakingNews, getNews };
}

export default getData;
