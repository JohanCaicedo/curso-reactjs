import "../styles/TodoItem.css";
import { MdCheckCircle } from "react-icons/md";
import { MdHighlightOff } from "react-icons/md";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <MdCheckCircle
        onClick={props.onCompleted}
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      />

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <MdHighlightOff className="Icon Icon-delete" onClick={props.onDelete} />
    </li>
  );
}
export { TodoItem };
