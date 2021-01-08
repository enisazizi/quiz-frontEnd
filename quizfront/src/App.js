
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./components/Home"
import Start from './components/Start'
function App() {
  return (
    <Router>
    <div className="App">
     <Route path="/" exact component={Start} />
     <Route path="/quiz/:id" exact component={Home} />
    </div>
    </Router>
  );
}

export default App;
