import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from "./Navbar"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import About from "./pages/About"
import Home from "./Home"
import {MainContent} from "./MainContent"

function App() {
  return (

      <Router>
        <Navbar/>
        <MainContent>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      </MainContent>
    </Router>
  );
}

export default App;
