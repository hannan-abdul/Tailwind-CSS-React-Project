import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router';
import Home from './pages'
import Menu from './pages/menu';
import About from './pages/about';

function App() {
  return (
    <>
      <Navbar></Navbar>
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
