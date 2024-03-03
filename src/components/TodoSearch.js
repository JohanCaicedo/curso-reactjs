
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function TodoSearch(){
    return (
        <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <TextField id="standard-basic" label="Busca un To do" variant="filled" />
      </Box>
    );
}

export {TodoSearch}