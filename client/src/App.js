import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {Navbar} from "./Navbar"
import {Home} from "./Home"
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
<Switch>
  <Route>
<Home/>
  </Route>
  <Route>
    
    </Route>
    <Route>
    
    </Route>
</Switch>
</Router>
    </div>
  );
}

export default App;
