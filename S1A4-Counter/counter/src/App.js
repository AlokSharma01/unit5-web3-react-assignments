
import './App.css';
import { useState } from 'react';
import { Counter } from './Components/Counter';

function App() {

  const [count, setCount] = useState(0)
  return (
    <div className="App">

      <Counter count ={count} setCount={setCount} />
      
    </div>
  );
}

export default App;
