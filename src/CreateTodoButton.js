import { motion } from "framer-motion"

function CreateTodoButton(){
    return(
        <div>
        <motion.button
        whileHover={{scale:1.2}}
        whileTap={{scale: 0.9, position:10}}
        
        >
            Camilo
        </motion.button>
        </div>
    );

}

export {CreateTodoButton}