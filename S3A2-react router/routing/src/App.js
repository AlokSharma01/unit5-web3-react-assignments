import logo from './logo.svg';
import './App.css';
import {Routes,Route,} from "react-router-dom";
import { Home } from './components/Home';
import { Products } from './components/Products';
import { ProductDetails } from './components/ProductDetails';
import { NavBar } from './components/NavBar';
import { NotFound } from './components/NotFound';


function App() {
  return (
    <div className="App">

      <nav>
        <NavBar/>
      </nav>

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/:id" element={<ProductDetails/>}/>
          <Route path="/error" element={<NotFound/>}/>
      </Routes>

    </div>
  );
}

export default App;
