const productsListRequest = () => {
  fetch('https://api.escuelajs.co/api/v1/products?offset=10&limit=10')
    .then((response) => response.json())
    .then((items) => {
      setItems(items);
    });
};
