import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoItem } from './components/TodoItem';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const defaultTodos = [
  { text: "Terminar esta linea", completed: true },
  { text: "Terminar curso React.js", completed: false },
  { text: "Hacer los cambios a la pagina de la red", completed: false },
  { text: "Hacer el portafolio", completed: false },
  { text: "Hacer la ilustracón del 8M", completed: false },
];


function App() {
  return (
    <React.Fragment>
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <TodoCounter completed={16} total={60} />
            <TodoSearch/>
          </Grid>
          <Grid item xs={4}>
            
          </Grid>
          <Grid item xs={4}>
             <CreateTodoButton />
          </Grid>
          <Grid item xs={8}>
          <TodoList>
            {defaultTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
              />
            ))}
          </TodoList>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );

}

export default App;