import './App.css';
import Header from './components/Pages/Shared/Header/Header';
import Home from './components/Pages/Home/Home';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Services from './components/Pages/Services/Services';
import About from './components/Pages/About/About';
import NotFound from './components/Pages/NotFound/NotFound';
import Login from './components/Login/Login';
import AddService from './components/Pages/AddService/AddService';
import Footer from './components/Pages/Shared/Footer/Footer';
import Booking from './components/Pages/Booking/Booking';
import MyOrder from './components/Pages/MyOrder/MyOrder';
import AdminAllOrders from './components/Pages/AdminAllOrders/AdminAllOrders';
import AuthProvider, { AuthContext } from './components/Context/AuthProvider';
import PrivateRoute from './components/Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="">
     <AuthProvider>
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
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/addService">
          <AddService></AddService>
        </PrivateRoute>
        <PrivateRoute path="/booking/:id">
          <Booking></Booking>
        </PrivateRoute>
        <PrivateRoute path="/myOrder">
          <MyOrder></MyOrder>
        </PrivateRoute>
        <PrivateRoute path="/allOrders">
          <AdminAllOrders></AdminAllOrders>
        </PrivateRoute>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
