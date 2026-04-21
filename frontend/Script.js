const API = "http://localhost:3000/todos";

async function fetchTodos() {
  const res = await fetch(API);
  const data = await res.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(todo => {
    const li = document.createElement("li");
    li.innerHTML = `${todo.text} - ${todo.date}
      <button onclick="deleteTodo(${todo.id})">X</button>`;
    list.appendChild(li);
  });
}

async function addTodo() {
  const text = document.getElementById("task").value;
  const date = document.getElementById("date").value;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, date })
  });

  fetchTodos();
}

async function deleteTodo(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  fetchTodos();
}

fetchTodos();