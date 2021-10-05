import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Blogs from './components/Blogs/Blogs';
import Error404 from './components/Error404/Error404';
import ComingSoon from './components/CommingSoon/ComingSoon';


function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

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

          <Route path="/comingSoon">
            <ComingSoon></ComingSoon>
          </Route>

          <Route path="*">
            <Error404></Error404>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
