import { useDispatch } from "react-redux";
import { todoDeleted } from "./todosSlice";

function Todo({ todo }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(todoDeleted(todo.id));
  };

  return (
    <li>
      <span>{todo.text}</span>
      <button onClick={handleClick}>DELETE</button>
    </li>
  );
}

export default Todo;
