import { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Context from "./Context";
import { myContext } from "./Context";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Admin from "./components/Admin";
import About from "./components/About";

function App() {
  const ctx = useContext(myContext);
  ctx;
  return (
    <div className="App">
      <Context>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/register" component={Register} />
            <Admin path="/admin" component={Admin} />
            <Home exact path="/" component={Home} />
          </Switch>
          <Route exact path="/signin" component={Login} />
          <Route exact path="/about" component={About} />

          <p>This is the react App</p>
        </Router>
      </Context>
    </div>
  );
}

export default App;
