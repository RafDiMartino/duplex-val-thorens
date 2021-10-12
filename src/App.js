import Navbar from './components/navbar/Navbar';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import Apartment from './pages/Apartment';
import Rates from './pages/Rates';
import Maps from './pages/Maps';
import Contacts from './pages/Contacts';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/apartment" exact component={Apartment}/>
          <Route path="/rates" exact component={Rates}/>
          <Route path="/maps" exact component={Maps}/>
          <Route path="/contacts" exact component={Contacts}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
