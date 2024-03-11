import { motion } from "framer-motion";
import '../styles/CreateTodoButton.css';

function CreateTodoButton() {
    
    return (
        <div className="overlayContainer">
            <motion.button
                //Farmer-Motion
                className="CreateTodoButton"
                whileHover={{ scale: 1.1, rotate: 90 }} 
                whileTap={{ scale: 0.9 }}
                //JavaScript
                onClick={
                    (event) =>{ 
                    console.log ('le diste al botón')
                    console.log (event)
                }
                }
            >
                +
            </motion.button>
        </div>
    );
}

export { CreateTodoButton };
