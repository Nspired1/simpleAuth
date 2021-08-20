import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import GetUser from "./components/GetUser";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      <p>This is the react app</p>
      <Register />
      <Login />
      <GetUser />
      <Logout />
    </div>
  );
}

export default App;
