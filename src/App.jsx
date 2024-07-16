import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login'
import Register from './Pages/Regsiter';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    <Footer/>
      
    </BrowserRouter>
  )
}

export default App
