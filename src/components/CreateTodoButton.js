import { motion } from "framer-motion";
import '../styles/CreateTodoButton.css';

function CreateTodoButton() {
    
    return (
        <div className="overlayContainer">
            <motion.button
                className="CreateTodoButton"
                whileHover={{ scale: 1.1, rotate: 90 }} 
                whileTap={{ scale: 0.9 }}
            >
                +
            </motion.button>
        </div>
    );
}

export { CreateTodoButton };
