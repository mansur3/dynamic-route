
import './App.css';
import {Switch, Route} from "react-router-dom"
import {Home} from "./components/Home";
import {Products} from "./components/Products";
import {Product} from "./components/Product";
import {Navbar} from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route exact path = "/products">
          <Products />
        </Route>
        <Route path = "/products/:id">
          <Product />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
