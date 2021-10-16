import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/Signupform';
import Login from './components/LoginForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route path="/signup">
            <Signup />
          </Route> */}
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
