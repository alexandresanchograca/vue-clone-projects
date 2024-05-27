import articleImages from "@/data/db.js";

function getMainArticleImage() {
  return articleImages.findLast((img) => img.mainArticle);
}

function getArticleImages() {
  return articleImages.filter((img) => !img.mainArticle);
}

function getData() {
  return { getMainArticleImage, getArticleImages };
}

export default getData;
