import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import ComingSoon from './components/CommingSoon/ComingSoon';
import Blogs from './components/Blogs/Blogs';


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

          <Route path="/coming-soon">
            <ComingSoon></ComingSoon>
          </Route>

        </Switch>
        <Footer></Footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
