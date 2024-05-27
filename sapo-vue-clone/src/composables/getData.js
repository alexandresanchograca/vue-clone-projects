import articleImages from "@/data/articleImages.js";
import stockItems from "@/data/stocks";

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

function getData() {
  return { getMainArticleImage, getArticleImages, getStocks };
}

export default getData;
