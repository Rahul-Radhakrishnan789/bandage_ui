import React from 'react';
import { Card, CardContent, Typography, CardMedia,  } from '@mui/material';




const PrimaryCards = ({items}) => {
 

  return (
    <>
    {items.map((item) => (
    <Card sx={sx.card}>
      <CardContent sx={sx.leftSide}>
        <Typography sx={sx.word2}>{item.title1}</Typography>
        <Typography sx={sx.word1}>{item.title2}</Typography>
        <Typography sx={sx.word3}>Explore Items</Typography>
      </CardContent>
      <CardMedia sx={sx.rightSide}>
        <img src={item.image} alt="Card Image" sx={sx.image} />
      </CardMedia>
    </Card>
    ))}
    </>
  );
};

const sx = {
    card: {
      display: 'flex',
      width: 300,
      height: 200,
      border: '1px solid #ddd',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    leftSide: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      color: 'black',
    },
    rightSide: {
      flex: 1.2,
      backgroundColor: '#ecf0f1',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit:'contain'
    },
    word1: {
      fontSize: 22,
      fontWeight: 'bold',
      fontFamily: 'Arial Black, sans-serif',
    },
    word2: {
      fontSize: 16,
       color:'grey'
    },
    word3: {
      fontSize: 14,
      letterSpacing: 1,
    },
  };

export default PrimaryCards;
