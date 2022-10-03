import React from 'react';
import {Box} from '@mui/material';
import TextField from '@mui/material/TextField';
//import SearchIcon from '@mui/icons-material/Search';
import {useMyCustomHook} from "./context";

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function CustomizedInputBase() {
  const {query, searchPost} = useMyCustomHook();
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, justifyContent:"center" }}
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Here"
        inputProps={{ 'aria-label': 'search google maps' }}
        value = {query}
        onChange= {(e) => searchPost(e.target.value)}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Paper>
  );
}



















// const Search = () => {
//     const {query, searchPost} = useMyCustomHook();
//   return (
//     <> 
//     <Box sx ={{display:'flex', justifyContent:"center", AlignItems:"center"}}>
//   <form  onSubmit = {(e) => e.preventDefault()}>
//     <TextField 
//     type ="text" 
//     label="Search Here"
//     variant="standard"
    
//     value = {query}
//     onChange= {(e) => searchPost(e.target.value)}

//     />
//     </form>
//     </Box>
//   </>
//   )
// }

// export default Search