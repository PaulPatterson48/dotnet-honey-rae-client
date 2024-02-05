const _apiUrl = "/api/servicetickets";

 const getServiceTickets = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

const getServiceTicketsById = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json())
};

const createServiceTicket = (serviceTicketData) => {
  return fetch(_apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(serviceTicketData),
  }).then((r) => r.json());
};


//export a function here that gets a ticket by id
export {
 getServiceTickets,
getServiceTicketsById,
};