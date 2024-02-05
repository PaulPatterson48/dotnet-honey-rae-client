const _apiUrl = "/api/customer";

const getCustomers = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

const getCustomersById = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json()); // added parentheses
};

export {
  getCustomers,
  getCustomersById
};
