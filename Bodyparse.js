// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Temporary storage for users
let users = [];

// Router for creating a new user
app.post('/users', (req, res) => {
    console.log(req.body.name);
  const { name, email, username } = req.body;
  const newUser = { id: users.length + 1, name, email, username };
  users.push(newUser);
  console.log(users);
  res.status(200).json(newUser);
});

// Router for getting all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Router for getting a specific user by ID
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id);
  if (!user) {
    res.status(404).json({ message: 'User not found' });
  } else {
    res.json(user);
  }
});

// Router for updating an existing user
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, username } = req.body;
  const index = users.findIndex(user => user.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'User not found' });
  } else {
    users[index] = { ...users[index], name, email, username };
    res.json(users[index]);
  }
});

// Router for deleting a user
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(user => user.id !== id);
  res.sendStatus(204);
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
