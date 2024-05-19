import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from "./Navbar"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import About from "./pages/About"
import Home from "./Home"
function App() {
  return (

      <Router>
        <Navbar/>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
