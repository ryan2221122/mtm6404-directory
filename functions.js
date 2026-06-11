const list = (clients) => {
  return clients.map((client, index) => '<li class="list-group-item d-flex justify-content-between" data-index="' + index + '">' + client.name + '<strong>$ ' + client.balance + '</strong></li>').join('');
};

const order = (clients, property) => {
  return clients.sort((a, b) => a[property] > b[property] ? 1 : -1);
};

const total = (clients) => {
  return clients.reduce((sum, client) => sum + client.balance, 0);
};

const info = (index) => {
  return clients.find((client, i) => i === index);
};

const search = (query) => {
  return clients.filter((client) => client.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
};