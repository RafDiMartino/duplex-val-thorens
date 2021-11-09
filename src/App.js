import { useEffect } from "react"
import Navbar from './components/navbar/Navbar';
import {HashRouter as Router, Route, Switch, withRouter, useLocation} from "react-router-dom";
import Home from './pages/Home';
import Apartment from './pages/Apartment';
import Rates from './pages/Rates';
import Maps from './pages/Maps';
import Contacts from './pages/Contacts';
import Footer from './components/footer/Footer';
import Success from "./pages/Success";

const _ScrollToTop = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <ScrollToTop>
            <Route path="/" exact component={Home}/>
            <Route path="/apartment" exact component={Apartment}/>
            <Route path="/rates" exact component={Rates}/>
            <Route path="/maps" exact component={Maps}/>
            <Route path="/contacts" exact component={Contacts}/>
            <Route path="/success" exact component={Success}/> 
          </ScrollToTop>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
