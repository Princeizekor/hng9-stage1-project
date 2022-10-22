import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
    <Router>
     
     <div className="App">
        <div className="component">
          <Route exact path="/">
            <Home />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
