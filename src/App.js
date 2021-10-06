import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDetails from './components/MoveDetails/MoveDetails';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/movie/:imdID" component={MovieDetails} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
