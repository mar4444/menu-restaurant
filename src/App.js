import NavBar from "./NavBar";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Booking from "./Booking";
import Home from "./Home";
import OrderOnline from "./OrderOnline";

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
      <Home />
      <Switch>
        <Route path="/booking">
          <Booking />
        </Route>
        <Route path="/OrderOnline">
          <OrderOnline />
        </Route>
       </Switch>
     </div>
    </Router>
    
  );
}

export default App;
