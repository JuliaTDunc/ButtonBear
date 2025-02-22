import './App.css';
import React, { useState } from 'react';
import Rive from 'rive-react';
import { useRive } from '@rive-app/react-canvas';
import testShape from './testShape.riv'


function App() {
  const { rive, RiveComponent } = useRive({
    src: {testShape},
    autoplay: true,
    animations: "Timeline 1",
  });

  return (
    <div className="App">
        <RiveComponent/>
    </div>
  );
}

export default App;
