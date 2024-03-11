import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

const BestSellerCards = ({ items }) => {
  return (
    <>
    {items.map((item) => (
    <Card  sx={{ width: 180, height: 225,marginY:'4%',border: "none", boxShadow: "none" }} >
       
      <CardMedia component="img" height="130" image={item.imageUrl} alt={item.title} />
      <CardContent sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Typography sx={{fontWeight:'bold',marginY:'2%'}} component="div">
          {item.title}
        </Typography>
        <Typography variant="subtitle2"  sx={{fontWeight:'bold',marginY:'2%'}} color="textSecondary">
          {item.subTitle}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginY:'2%'
          }}
        >
          <Typography variant="body2" color="textSecondary">
            ${item.price1}
          </Typography>
          <Typography variant="body2" sx={{color:'greenyellow,',fontWeight:'bold '}}>
          &nbsp; ${item.price2}
          </Typography>
        </Box>
      </CardContent>
     
    </Card>
       ))}
       </>
  );
};

export default BestSellerCards;
