import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LandingPage1 from './pages/landingpage1';
import LandingPage2 from './pages/landingpage2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={LandingPage2} exact path='/step2' />
          <Route component={LandingPage1} exact path='/*' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
