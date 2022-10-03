import React from 'react'
import { Box, IconButton } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {useMyCustomHook} from "./context"

const Pagination = () => {
    const{page, nbPages, getPrePage, getNextPage } = useMyCustomHook();
  return (
    <>
    <Box sx = {{display:"flex", paddingTop: 2, justifyContent:"center", AlignItems:"center"}}>
     <IconButton onClick = {() => getPrePage()} color="secondary">
     <KeyboardArrowLeftIcon />
</IconButton>
    
    <p>{page + 1} of {nbPages}</p>
    
    <IconButton onClick = {() => getNextPage()} color="secondary"   >
    <KeyboardArrowRightIcon />
</IconButton>
</Box>
    </>
  )
}

export default Pagination