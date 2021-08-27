import { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthState from "./context/auth/AuthState";
import { myContext } from "./Context";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Admin from "./components/Admin";
import About from "./components/About";
import Alerts from "./components/Alerts";
import AlertState from "./context/alert/AlertState";

function App() {
  const ctx = useContext(myContext);
  ctx;
  return (
    <div className="App">
      <AuthState>
        <AlertState>
          <Router>
            <Navbar />
            <div className="container">
              <Alerts />
              <Switch>
                <Route path="/register" component={Register} />
                <Admin path="/admin" component={Admin} />
                <Home exact path="/" component={Home} />
              </Switch>
              <Route exact path="/signin" component={Login} />
              <Route exact path="/about" component={About} />
              <p>This is the react App</p>
            </div>
          </Router>
        </AlertState>
      </AuthState>
    </div>
  );
}

export default App;
