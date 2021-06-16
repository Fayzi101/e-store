import { Switch, Route } from "react-router-dom";

import Home from "./Pages/Home/index";
import Collection from "./Pages/Collections/index";
import Detail from "./Pages/Details/index";
import Cart from "./Pages/Shopping-Cart-And-Checkout/index";
import Error from "./error404";


function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route  path="/collection">
        <Collection />
      </Route>
      <Route path="/shopping-cart">
        <Cart />
      </Route>
      <Route path="/detail/:id/:title">
        <Detail />
      </Route>

      <Route path="*">
        <Error />
      </Route>
    </Switch>
  );
}

export default App;
