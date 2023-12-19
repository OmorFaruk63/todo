import { useState } from "react";
import TodoList from "./todoList";
import "./Todo.css";

const Todo = () => {
  const [input, setInput] = useState("");

  const [todos, setTodo] = useState([]);

  function inputdata(e) {
    setInput(e.target.value);
  }

  function addTodoBtn(e) {
    console.log(e.target.value);
    setTodo([...todos, input]);
    setInput("");
  }

  function deletetodo(id) {
    console.log("id" + id);
    let resttodo = todos.filter((todo, i) => i !== id);
    setTodo(resttodo);
  }

  return (
    <div>
      <div className="todo-container ">
        <h1>Simple Todo List </h1>
        <input value={input} type="text" onChange={inputdata} />
        <button onClick={addTodoBtn}>add todo</button>
        <ul className="todo-list">
          {todos.map((todo, id) => (
            <TodoList todo={todo} key={id} id={id} deletetodo={deletetodo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
