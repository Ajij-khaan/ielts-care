import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import About from './components/About/About';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/services">
            <Services></Services>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>


          <Route path="/contact">
            <Contact></Contact>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
