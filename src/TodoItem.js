import "./css/TodoItem.css";
function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      >
        V
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">X</span>
    </li>
  );
}
export { TodoItem };

// import './css/TodoItem.css';
// import { motion } from "framer-motion";

// function TodoItem(props){
//   return (
//     <motion.div className="TodoItemForm"
//     initial={{
//       color:'#260B01',
//       backgroundColor:"#F5DDC5",
//       fontWeight:500,
//       fontSize:'10px'
//     }}
//     whileHover={{
//     scale: 1.1,
//     backgroundColor:"#F27405",
//     fontWeight: 900,
//     fontSize:'24px',

//     }}
//     >
//     <li className='TodoItem'>
//       <span className='Icon Icon-check Icon-check--active '>V</span>
//       <p className='TodoItem-p TodoItem-p--complete'>{props.text}</p>
//       <span className="Icon Icon-delete">X</span>
//     </li>
//     </motion.div>
//   )

// }
// export {TodoItem};
