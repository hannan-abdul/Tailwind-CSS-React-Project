import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router';
import Home from './pages'
import Menu from './pages/menu';
import About from './pages/about';
import Dropdown from './components/Dropdown';
import { useEffect, useState } from 'react';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle}></Navbar>
      <Dropdown isOpen={isOpen} toggle={toggle}></Dropdown>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/menu' exact component={Menu} />
        <Route path='/about' exact component={About} />
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
