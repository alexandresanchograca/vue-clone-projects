var productsData = null;
var productCategories = null;

function getApiCategories() {
  return productCategories;
}

function getApiProducts() {
  return productsData;
}

async function getProductsData() {
  if (productsData !== null) {
    return productsData;
  }

  const jsonResp = await fetch("https://dummyjson.com/products?limit=0");
  const resp = await jsonResp.json();

  if (resp.products) {
    productsData = resp.products;
  }

  return productsData;
}

async function getCategoriesData() {
  if (productCategories !== null) {
    return productCategories;
  }

  const jsonResp = await fetch("https://dummyjson.com/products/category-list");
  const resp = await jsonResp.json();

  if (resp) {
    productCategories = resp;
  }

  return productCategories;
}

function getApiData() {
  return {
    getApiCategories,
    getApiProducts,
    getProductsData,
    getCategoriesData,
  };
}

export default getApiData;
