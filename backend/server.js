const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { text, date } = req.body;
  const newTodo = { id: Date.now(), text, date };
  todos.push(newTodo);
  res.json(newTodo);
});

app.delete('/todos/:id', (req, res) => {
  todos = todos.filter(todo => todo.id != req.params.id);
  res.sendStatus(200);
});

app.listen(3000, () => console.log("Server running on port 3000"));