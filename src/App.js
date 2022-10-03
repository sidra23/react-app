import React from 'react';
import CustomizedInputBase from "./Search";
import Pagination from "./Pagination";
import Stories from "./Stories";
import { Box, Typography } from "@mui/material";



const App = () => {
  
  return (
    <>
    <Box  sx = {{display:"flex", alignItems:"center", justifyContent:"center", flexDirection: "column", backgroundColor:"#d7d4d49c"}}>
    <Typography mb= {1} sx = {{color:"#3285d7"}}><h1> News Site </h1> </Typography>
      <CustomizedInputBase/>
      {/* <Search /> */}
      <Pagination />
      <Stories />
</Box>
    </>
  )
}

export default App