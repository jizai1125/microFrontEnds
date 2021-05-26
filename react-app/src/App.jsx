// import logo from "./logo.svg";
import './App.css';

import { Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home Page</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About Page</h2>
  </div>
);

function App() {
  return (
    <div className="App">
      <h1>React 子应用</h1>
      <ul className="header">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Route exact path="/home" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
