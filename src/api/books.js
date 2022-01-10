export const getLoadBooksRequest = () => ({
  method: "get",
  url: `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes`,
});
 