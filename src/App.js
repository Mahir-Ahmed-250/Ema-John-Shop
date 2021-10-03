import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import NoOrder from './Components/NoOrder/NoOrder';
import NotFound from './Components/NotFound/NotFound';
import OrderReview from './Components/OrderReview/OrderReview';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div>

      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Shop />
          </Route>
          <Route exact path='/shop'>
            <Shop />
          </Route>
          <Route path='/order-review'>
            <OrderReview></OrderReview>
          </Route>
          <Route path='/inventory'>
            <Inventory></Inventory>
          </Route>
          <Route path='/place-order'>
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path='/no-order'>
            <NoOrder></NoOrder>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
