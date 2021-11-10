import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Home/Products/Products/Products';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import Purchase from './Pages/Purchase/Purchase';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/explore">
            <Products></Products>
          </Route>
          <Route path="/purchase/:purchaseId">
            <Purchase></Purchase>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
