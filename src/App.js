import './App.css';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './components/Contact';
import Links from './components/Links';

function App() {
  return (
    <Router>
    <div className="App">
    <Route exact path="/">
    <Header />
     <Links />
     </Route>
     <Route exact path="/contact">
       <Contact />
     </Route>
     <Footer />
    </div>
    </Router>
  );
}

export default App;
