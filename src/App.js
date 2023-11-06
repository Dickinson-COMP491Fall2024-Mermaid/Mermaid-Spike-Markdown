import './App.css';
import React, { useState, useEffect } from 'react';
import Chartcard from './components/chartcard';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';

const App = () => {
  return (
  <div>    
    <Container maxWidth="lg" sx={{borderWidth: 10, padding: 10}} >
    <Grid container sx={{flexGrow: 1}} spacing={2}>
      <Grid item xs>
        <Chartcard chartpreview="/charts_preview/gantt.png" name="MyDay">
        </Chartcard>
      </Grid>
      <Grid item xs>
        <Chartcard chartpreview="/charts_preview/gitchart.png" name="Git graph">
        </Chartcard>
      </Grid>
      <Grid item xs>
        <Chartcard chartpreview="/charts_preview/flowchart.png" name="COMP curriculum">
        </Chartcard>
      </Grid>
      <Grid item xs>
        <Chartcard chartpreview="/charts_preview/piechart.png" name="Class Pie Chart">
        </Chartcard>
      </Grid>
      <Grid item xs>
        <Chartcard chartpreview="/charts_preview/quadrant.png" name="Class Quadrant">
        </Chartcard>
      </Grid>
      <Grid item xs>
        <Chartcard chartpreview="/charts_preview/sankey.png" name="Game Sankey">
        </Chartcard>
      </Grid>
    </Grid>
    </Container>
  </div>
  );
};
export default App;