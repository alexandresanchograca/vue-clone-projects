const baseUrl = "https://newsapi.org";
var newsData = null;
var headlineData = null;
var stockItems = null;

function useData() {
  function getStocks() {
    return stockItems;
  }

  function getNewsListData() {
    return newsData;
  }

  function getHeadNewsListData() {
    return headlineData;
  }

  async function getNewsData() {
    if (newsData !== null) {
      return newsData;
    }

    let error = null;
    const everythingEndpoint = "/v2/everything";
    const headlinesEndpoint = "/v2/top-headlines";

    try {
      const getObservador = async () =>
        await fetch(
          `${baseUrl}${everythingEndpoint}?q=Observador&language=pt&apiKey=3d4b854edbc046148c5a9aecb900194c`
        );

      const getExpresso = async () =>
        await fetch(
          `${baseUrl}${everythingEndpoint}?q=Expresso&language=pt&from=2024-06-02&apiKey=3d4b854edbc046148c5a9aecb900194c`
        );

      const getHeadlines = async () =>
        await fetch(
          `${baseUrl}${headlinesEndpoint}?country=pt&apiKey=3d4b854edbc046148c5a9aecb900194c`
        );


      const getStockItems = async () =>
          await $fetch(
              `/api/stocks`
          );

      const jsonResponses = await Promise.all([
        getObservador(),
        getExpresso(),
        getHeadlines(),
      ]);

      const responses = await Promise.all(
        jsonResponses.map((jResp) => jResp.json())
      );

      if (responses.length === 3) {
        newsData = responses[0].articles
          .concat(responses[1].articles)
          .filter((article) => article.urlToImage);

        headlineData = responses[2].articles;
      }
    } catch (err) {
      error = err.message;
    }

    return { newsData, error };
  }

  return {
    getNewsData,
    getNewsListData,
    getHeadNewsListData,
    getStocks,
  };
}

export default useData;
