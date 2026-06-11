// Returns an HTML string of list items for each client
const list = (clients) => {
  return clients.map((client, index) => '<li class="list-group-item d-flex justify-content-between" data-index="' + index + '">' + client.name + '<strong>$ ' + client.balance + '</strong></li>').join('');
};

// Sorts clients by a given property (e.g. name or balance)
const order = (clients, property) => {
  return clients.sort((a, b) => a[property] > b[property] ? 1 : -1);
};

// Returns the total sum of all client balances
const total = (clients) => {
  return clients.reduce((sum, client) => sum + client.balance, 0);
};

// Finds and returns a single client by their index
const info = (index) => {
  return clients.find((client, i) => i === index);
};

// Filters clients whose name includes the search query
const search = (query) => {
  return clients.filter((client) => client.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
};