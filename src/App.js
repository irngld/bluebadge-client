import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { Switch, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Inventory from "./components/Inventory";
import SearchDrinks from "./components/SearchDrinks";
import RandomDrink from "./components/Random";
import DetailsPage from "./components/Details";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Auth/Login";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <>
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/register' component={Auth}/>
        <Route path='/home'>
          <Navbar />
          <Home />
        </Route>
        <Route path='/inventory' component={Inventory} />
        <Route path='/searchdrinks' component={SearchDrinks} />
        <Route path='/random' component={RandomDrink} />
        <Route path='/details/:id' component={DetailsPage} />
      </Switch>

    </div>
          <Footer>
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </Footer>
        </>
  );
}

export default App;
