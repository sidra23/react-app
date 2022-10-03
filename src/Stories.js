
import React from 'react';
import {useMyCustomHook} from "./context";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';






const Stories = () => {
    const{hits, nbPages, isLoading, removePost} = useMyCustomHook();
    
    

    if (isLoading){
        return(
            <><h1> Loading.......</h1></>
        )
    }
    
  return (
    <>
    
    {hits.map((currPost)=>{
        const { title, author, url, objectID, num_comments } = currPost
        return <>
        <Card sx={{width:650, marginBottom:5}}>
    <CardContent >
         <Typography  gutterBottom variant="h5" component="div"  key = {objectID}>{title}</Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {author} | <span>{num_comments} comements</span> 
      </Typography>
        <CardActions>
        <Button href={url} size="small">Read More</Button>
        <Button size="small" onClick= {()=>removePost(objectID)}>Remove</Button>
      </CardActions>
      </CardContent>
        </Card>
        </>
    })}
        
    
    </>
  )
}

export default Stories