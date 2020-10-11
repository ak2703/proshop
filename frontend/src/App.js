import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import Footer from './components/Footer';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact></Route>
          <Route path='/product/:id' component={ProductScreen} ></Route>
          <Route path='/cart' component={CartScreen} exact></Route>
          <Route path='/signin' component={SigninScreen} exact></Route>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
