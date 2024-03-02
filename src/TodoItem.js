import './css/index.css';
import './css/TodoItem.css';

function TodoItem(props){
    return (
      <div className="athiti-regular TodoItemForm">
      <li className='TodoItem'>
        <span className='Icon Icon-check Icon--C'>V</span>
        <p className='TodoItem-p TodoItem-p--complete'>{props.text}</p>
        <span className="Icon Icon-delete">X</span>
      </li>
      </div>
    )
  
  }
export {TodoItem}