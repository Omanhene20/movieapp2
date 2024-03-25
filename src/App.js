import React, { Component } from 'react';
import './style.css';
import Text1 from './component/Text1';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import Landing from './component/home/Landing';
import store from "./store";
import { Provider } from 'react-redux';
class App extends Component {
  render() {
    return (
      <Provider store={store}> 
        <Navbar />
         <Landing /> 
        <Footer />
        </Provider>
    );
  }
}
export default App;
