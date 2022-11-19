import React from 'react';
import './App.css';
import InputField from './Components/1-InputField/InputField';

let name: string = "ahmed nadjib";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="heading"> Taskify </h1>
      <InputField/>
    </div>
  );
}

export default App;
