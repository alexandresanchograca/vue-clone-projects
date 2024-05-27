import articleImages from "@/data/articleImages.js";
import stockItems from "@/data/stocks";
import breakingNews from "@/data/news";

function getMainArticleImage() {
  return articleImages.findLast((img) => img.mainArticle);
}

function getArticleImages() {
  console.log(articleImages);

  return articleImages.filter((img) => !img.mainArticle);
}

function getStocks() {
  return stockItems;
}

function getBreakingNews() {
  return breakingNews;
}

function getData() {
  return { getMainArticleImage, getArticleImages, getStocks, getBreakingNews };
}

export default getData;
