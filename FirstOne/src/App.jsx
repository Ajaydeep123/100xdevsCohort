import React, { useEffect } from "react";
/// hook
function useTodos() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/todos", {
      method: "GET"
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setTodos(data);
      })
    });

    setInterval(() => {
      fetch("http://localhost:3000/todos", {
        method: "GET"
      }).then((response) => {
        response.json().then((data) => {
          console.log(data);
          setTodos(data);
        })
      });
    }, 1000)
  }, []);

  return todos;
}

function App() {
  const todos = useTodos();

  return (
    <div>
      {todos.map(todo => {
        return <div>
          {todo.title}
          {todo.description}
          <button>Delete</button>
          <br />
        </div>
      })}
    </div>
  )
}

export default App;