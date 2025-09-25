import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Home from "./Comps/Home.jsx";
import Order from "./Comps/Order.jsx";
import Success from "./Comps/Success.jsx";

function App() {
  const [orderData, setOrderData] = useState(null);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/order">
          <Order setOrderData={setOrderData} />
        </Route>

        <Route path="/success">
          <Success orderData={orderData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
