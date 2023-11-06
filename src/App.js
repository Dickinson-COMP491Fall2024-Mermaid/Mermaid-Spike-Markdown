import './App.css';
import React, { useState, useEffect } from 'react';
import Mermaid from './components/mermaid';
import Chartcard from './components/chartcard';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';

const App = () => {
  const [flowchart, setFlowChart] = useState('');
  const [mindmap, setMindMap] = useState('');
  const [gitGraph, setGitGraph] = useState('');
  const [gantt, setGantt] = useState('');
  const [pie, setPie] = useState('');
  const [quadrant, setQuadrant] = useState('');
  const [sequence, setSequence] = useState('');
  const [stateDiagram, setStateDiagram] = useState('');
  const [journey, setJourney] = useState('');

  useEffect(() => {
    const fetchFile = async (file) => {
      try {
        const response = await fetch(file);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${file}`);
        }
        const content = await response.text();
        return content;
      } catch (error) {
        console.error(error);
        return '';
      }
    };
    fetchFile('/mermaid_charts/mk_flowchart.mmd').then((content) => setFlowChart(content));
    fetchFile('/mermaid_charts/mk_mindmap.mmd').then((content) => setMindMap(content));
    fetchFile('/mermaid_charts/mk_gitGraph.mmd').then((content) => setGitGraph(content));
    fetchFile('/mermaid_charts/mk_gantt.mmd').then((content) => setGantt(content));
    fetchFile('/mermaid_charts/mk_pie.mmd').then((content) => setPie(content));
    fetchFile('/mermaid_charts/mk_quadrant.mmd').then((content) => setQuadrant(content));
    fetchFile('/mermaid_charts/mk_sequence.mmd').then((content) => setSequence(content));
    fetchFile('/mermaid_charts/mk_stateDiagram.mmd').then((content) => setStateDiagram(content));
    fetchFile('/mermaid_charts/mk_journey.mmd').then((content) => setJourney(content));
  }, []);
  return (
  <div>
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
      {/* <h1>Computer Science Curriculum</h1>
      {flowchart && <Mermaid chart={flowchart} />}
    </div>
    <div>    
      <h1>Mind Map</h1>
      {mindmap && <Mermaid chart={mindmap} />}
    </div>
    <div>
      <h1>Git Flow</h1>
      {gitGraph && <Mermaid chart={gitGraph} />}
    </div>
    <div>
      <h1>Gantt</h1>
      {gantt && <Mermaid chart={gantt} />}
    </div>
    <div>
      <h1>Dickinson Majors</h1>
      {pie && <Mermaid chart={pie} />}
    </div>
    <div>
      <h1>Quadrant Chart</h1>
      {quadrant && <Mermaid chart={quadrant} />}
    </div>
    <div>
      <h1>Sequence Diagram</h1>
      {sequence && <Mermaid chart={sequence} />}
    </div>
    <div>
      <h1>State Diagram</h1>
      {stateDiagram && <Mermaid chart ={stateDiagram} />}
    </div>
    <div>
      <h1>User Journey</h1>
      {journey && <Mermaid chart ={journey} />} */}
    </div>
  </div>
  );
};
export default App;