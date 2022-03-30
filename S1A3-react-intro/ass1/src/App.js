import logo from './logo.svg';
import './App.css';
import { List1 } from './Components/List1';
import { List2 } from './Components/List2';

function App() {
  return (
    <div >
      <h1>Mobile Operating Systems</h1>
      <List1/>
      <h1>Mobile Manufacturer</h1>
      <List2/>
    </div>
  );
}

export default App;
