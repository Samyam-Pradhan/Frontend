
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./components/Navbar";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { CiLogin } from 'react-icons/ci';
import Login from './components/Login';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Login />
    </>
  )
}

export default App
