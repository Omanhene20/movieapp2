import React, { Component } from 'react';
import './style.css';
import Text1 from './component/Text1';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import Landing from './component/home/Landing';
import store from "./store";
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Movie from './component/home/Movie';
class App extends Component {
  render() {
    return (
      <Provider store={store}> 
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
            <Footer />
          </div>
        </Router>
        </Provider>
    );
  }
}
export default App;
