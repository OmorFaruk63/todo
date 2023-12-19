import "./todoList.css";

const TodoList = ({ todo, id, deletetodo }) => {
  return (
    <li className="todo-item">
      {todo}
      <button onClick={() => deletetodo(id)}>Delete</button>
    </li>
  );
};

export default TodoList;
