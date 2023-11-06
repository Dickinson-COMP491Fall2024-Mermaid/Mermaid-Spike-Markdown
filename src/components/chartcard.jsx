import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function MediaCard(props) {
  return (
    <Card 
      sx={{ 
      maxWidth: 345,
      maxHeight: 325,
      minWidth: 345,
      minHeight: 325
    }}
      gutterBottom>
      <CardMedia
        sx={{ height: 140 }}
        image= {props.chartpreview}
        title= {props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <div class="font-bold">
            {props.name}
          </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">View Chart</Button>
        <Button size="small">Edit Chart</Button>
      </CardActions>
    </Card>
  );
}