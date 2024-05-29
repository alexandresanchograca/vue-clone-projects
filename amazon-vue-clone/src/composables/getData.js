import products from "@/data/products";

function getShopCategories() {
  return products.shopCategories;
}

function getData() {
  return { getShopCategories };
}

export default getData;
