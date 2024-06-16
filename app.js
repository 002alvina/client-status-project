const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const data = require('./data');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('auth');
});

app.post('/login', (req, res) => {
  const { login, password } = req.body;
  const user = data.users.find(u => u.login === login && u.password === password);

  if (user) {
    const clients = data.clients.filter(client => client.responsible === user.fio);
    res.render('clients', { user, clients });
  } else {
    res.redirect('/');
  }
});

app.post('/update-status', (req, res) => {
  const { accountId, status } = req.body;
  const client = data.clients.find(client => client.accountId === parseInt(accountId));
  if (client) {
    client.status = status;
  }
  // Найдите пользователя, чтобы вернуть его на страницу клиентов
  const user = data.users.find(u => u.fio === client.responsible);
  const clients = data.clients.filter(client => client.responsible === user.fio);
  res.render('clients', { user, clients });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
