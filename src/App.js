import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Switch, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";

import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import SearchDrinks from "./components/SearchDrinks";
import RandomDrink from "./components/Random";
import DetailsPage from "./components/Details";
import About from "./components/About";
import Contact from "./components/Contact";
import Auth from "./components/Auth/Auth";
import HamburgerMenu from "./components/HamburgerMenu";
import Favorites from "./components/Favorites";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/register" component={Auth} />
          <PrivateRoute>
            <Route path="/home">
              <HamburgerMenu />
              <Home />
            </Route>
            <Route path="/favorites">
              <HamburgerMenu />
              <Favorites />
            </Route>
            <Route path="/searchdrinks">
              <HamburgerMenu />
              <SearchDrinks />
            </Route>
            <Route path="/random">
              <HamburgerMenu />
              <RandomDrink />
            </Route>
            <Route path="/details/:id" component={DetailsPage} />
          </PrivateRoute>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
