import { motion } from "framer-motion";
import '../styles/CreateTodoButton.css';

function CreateTodoButton() {
    return (
        <div className="overlayContainer">
            <motion.button
                // Framer Motion
                className="CreateTodoButton"
                initial={{ opacity: 0, y: "-50%" }}
                animate={{ opacity: 1, y: "0%" }}
                whileHover={{ scale: 1.1, rotate: 90 }} 
                whileTap={{ scale: 0.9 }}
                // JavaScript
                onClick={(event) => { 
                    console.log('Le diste al botón');
                    console.log(event);
                }}
                style={{
                    position: "relative", // Posición relativa para permitir el posicionamiento absoluto del span dentro del botón
                }}
            >
                <span 
                    style={{
                        position: "absolute", // Posición absoluta para que el símbolo "+" esté en la parte superior del botón
                        top: "50%", // Coloca el símbolo en el centro vertical del botón
                        left: "50%", // Coloca el símbolo en el centro horizontal del botón
                        transform: "translate(-50%, -50%)", // Centra el símbolo "+" correctamente
                    }}
                >
                    +
                </span>
                <motion.span
                    style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        boxShadow: "0px 0px 15px 5px rgba(255, 0, 0, 0.7)", // Mismo estilo que el botón, pero aplicado al span dentro del botón
                    }}
                    animate={{
                        boxShadow: [
                            "0px 0px 15px 5px rgba(255, 0, 0, 0.7)", // Estado inicial
                            "0px 0px 30px 10px rgba(255, 0, 0, 0.7)", // Efecto de expansión
                            "0px 0px 15px 5px rgba(255, 0, 0, 0.7)" // Estado final
                        ],
                    }}
                    transition={{
                        repeat: Infinity, // Repetir la animación infinitamente
                        duration: 1.5, // Duración de la animación en segundos
                        ease: "linear" // Transición lineal
                    }}
                />
            </motion.button>
        </div>
    );
}

export { CreateTodoButton };




// import { motion } from "framer-motion";
// import '../styles/CreateTodoButton.css';

// function CreateTodoButton() {
    
//     return (
//         <div className="overlayContainer">
//             <motion.button
//                 // Framer Motion
//                 className="CreateTodoButton"
//                 initial={{ opacity: 0, y: "-50%" }}
//                 animate={{ opacity: 1, y: "0%" }}
//                 whileHover={{ scale: 1.1, rotate: 90 }} 
//                 whileTap={{ scale: 0.9 }}
//                 // JavaScript
//                 onClick={(event) => { 
//                     console.log('Le diste al botón');
//                     console.log(event);
//                 }}
//             >
//                 +
//             </motion.button>
//         </div>
//     );
// }

// export { CreateTodoButton };
