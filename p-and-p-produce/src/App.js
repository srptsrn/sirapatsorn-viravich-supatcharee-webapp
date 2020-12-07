import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import AdminOrders from "./pages/AdminOrders.js";
import AdminDetailOrder from "./pages/AdminDetailOrder.js";
import AdminProducts from "./pages/AdminProducts.js";
import AdminEditProduct from "./pages/AdminEditProduct.js";
import Contact from "./pages/Contact.js";
import Home from "./pages/Home.js";
import Franchise from "./pages/Franchise.js";
import Cart from "./pages/Cart.js";
import Payment from "./pages/Payment.js";
import ProductDetails from "./pages/ProductDetails.js";
import AdminLogin from "./pages/AdminLogin.js";
import AdminSignUp from "./pages/AdminSignUp.js";
import AdminAccount from "./pages/AdminAccount.js";
import AdminPromote from "./pages/AdminPromote.js";
import BestSellers from "./pages/BestSellers.js";
import AllProducts from "./pages/AllProducts.js";
import Products from "./pages/Products.js";
import SearchResults from "./pages/SearchResults.js";
import { AuthProvider } from "./auth/Auth.js";
// import PrivateRoute from "./auth/PrivateRoute.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin/products">
          <AdminProducts></AdminProducts>
        </Route>
        <Route path="/admin/products/:id">
          <AdminEditProduct></AdminEditProduct>
        </Route>
        <Route path="/admin/orders">
          <AdminOrders></AdminOrders>
        </Route>
        <Route path="/admin/orders/:id">
          <AdminDetailOrder></AdminDetailOrder>
        </Route>
        <Route path="/admin/promote">
          <AdminPromote></AdminPromote>
        </Route>
        <Route path="/admin">
          <AdminPromote></AdminPromote>
        </Route>
        <Route path="/admin/signup">
          <AdminSignUp></AdminSignUp>
        </Route>
        <Route path="/admin/account">
          <AdminAccount></AdminAccount>
        </Route>

        <Route path="/login">
          <AdminLogin></AdminLogin>
        </Route>
        <Route path="/product-details/:id">
          <ProductDetails></ProductDetails>
        </Route>
        <Route path="/all-products">
          <AllProducts></AllProducts>
        </Route>
        <Route path="/best-sellers">
          <BestSellers></BestSellers>
        </Route>
        <Route path="/search-results">
          <SearchResults></SearchResults>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/franchise">
          <Franchise></Franchise>
        </Route>
        <Route path="/cart">
        <Cart></Cart>
        </Route>
        <Route path="/payment">
        <Payment></Payment>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>


  );
}
// function NoMatch() {
//   let location = useLocation();

//   return (
//     <div>
//       <h3>
//         No match for <code>{location.pathname}</code>
//       </h3>
//     </div>
//   );
// }
export default App;
