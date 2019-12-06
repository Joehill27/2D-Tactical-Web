import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Assets from './components/Assets';
import Play from './components/Play';
import Download from './components/Download';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <section className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
            <Route exact path={process.env.PUBLIC_URL + "/About"} component={About} />
            <Route exact path={process.env.PUBLIC_URL + "/Assets"} component={Assets} />
            <Route exact path={process.env.PUBLIC_URL + "/Download"} component={Download} />
          </Switch>
        </div>
      </Router>
    </section>
  );
};

export default App;
