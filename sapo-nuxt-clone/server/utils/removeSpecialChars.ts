const specialCharacters = ['%', '/'];

export default (newsArticles: NewsArticles): NewsArticles => {
    newsArticles.articles.forEach((article): void => {
        article.titleUri = article.title;

        const hasSpecialChars = specialCharacters.some((specialChar) => article.titleUri?.includes(specialChar));

        if (hasSpecialChars) {
            article.titleUri = article.title.replaceAll(/[%/]/g, ' ');
        }
    })
    return newsArticles;
}
