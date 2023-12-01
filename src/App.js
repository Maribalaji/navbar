import logo from './logo.svg';
import './App.css';
import {Link, Routes,Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Product from './Product';
import Contact from './Contact';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <header>
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <div className='navbar'>
        <ul>
          <Link className="bar-cont" to="/"><li>Home</li></Link>
          <Link className="bar-cont"to="/about"><li>About</li></Link>
          <Link className="bar-cont"to="/product"><li>Product</li></Link>
          <Link className="bar-cont" to="/contact"><li>Contact</li></Link>
          <Link className="bar-cont" to="/Login"><li>Login</li></Link>



        </ul>
      </div>

      </header>
        <Link to="/dashboard"></Link>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>



      </Routes>
    </div>
  );
}


export default App;
