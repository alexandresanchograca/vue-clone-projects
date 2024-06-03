import products from "@/data/products";
import banners from "@/data/banners";

function getShopCategories() {
  return products.shopCategories;
}

function getBannerImages() {
  return banners.images;
}

function getProducts() {
  return products.products;
}

function getData() {
  return { getShopCategories, getBannerImages, getProducts };
}

export default getData;
