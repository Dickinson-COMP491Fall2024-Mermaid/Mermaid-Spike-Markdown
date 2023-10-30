import './App.css';
import React, { useState, useEffect } from 'react';
import Mermaid from './mermaid';

const App = () => {
  const [flowchart, setFlowChart] = useState('');
  const [mindmap, setMindMap] = useState('');
  const [gitGraph, setGitGraph] = useState('');
  const [gantt, setGantt] = useState('');
  const [pie, setPie] = useState('');
  const [quadrant, setQuadrant] = useState('');
  const [sequence, setSequence] = useState('');

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
    fetchFile('/flowchart.mmd').then((content) => setFlowChart(content));
    fetchFile('/mindmap.mmd').then((content) => setMindMap(content));
    fetchFile('/gitGraph.mmd').then((content) => setGitGraph(content));
    fetchFile('/gantt.mmd').then((content) => setGantt(content));
    fetchFile('/pie.mmd').then((content) => setPie(content));
    fetchFile('/quadrant.mmd').then((content) => setQuadrant(content));
    fetchFile('/sequence.mmd').then((content) => setSequence(content));
  }, []);
  return (
  <div>
    <div>
      <h1>Computer Science Curriculum</h1>
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
  </div>
  );
};
export default App;


/*


*/