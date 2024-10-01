import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        {/* <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} /> */}
      </Switch>
    </Router>
  );
}

export default App;
