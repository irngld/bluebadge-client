import './App.css';

import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './components/home';
import Inventory from './components/inventory';
import SearchDrinks from './components/searchDrinks';
import About from './components/about';
import Contact from './components/contact';
import Auth from './components/Auth/auth';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
            <Auth />
          </Route>
          <Route path="/inventory" component={Inventory}/>
          <Route path="/searchdrinks" component={SearchDrinks}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
    </div>
  );
}

export default App;

