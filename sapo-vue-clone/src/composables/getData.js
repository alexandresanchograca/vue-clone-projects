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

function getData() {
  return { getArticleImages, getStocks, getBreakingNews };
}

export default getData;
