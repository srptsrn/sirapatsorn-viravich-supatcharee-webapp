import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminOrders from "./pages/AdminOrders.js";
import AdminDetailOrder from "./pages/AdminDetailOrder.js";
import AdminProducts from "./pages/AdminProducts.js";
import AdminEditProduct from "./pages/AdminEditProduct.js";
import Contact from "./pages/Contact.js";
import Home from "./pages/Home.js";
import Franchise from "./pages/Franchise.js";
import Cart from "./pages/Cart.js";
import ProductDetails from "./pages/ProductDetails.js";
import AdminLogin from "./pages/AdminLogin.js";
import AdminSignUp from "./pages/AdminSignUp.js";
import AdminAccount from "./pages/AdminAccount.js";
import AdminPromote from "./pages/AdminPromote.js";
import BestSellers from "./pages/BestSellers.js";
import AllProducts from "./pages/AllProducts.js";
import SearchResults from "./pages/SearchResults.js";
import { AuthProvider } from "./auth/Auth.js";
import PrivateRoute from "./auth/PrivateRoute.js";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          {/* admin */}
          <PrivateRoute
            exact
            path="/admin/products"
            component={AdminProducts}
          />
          <PrivateRoute
            exact
            path="/admin/products/:id"
            component={AdminEditProduct}
          />
          <PrivateRoute exact path="/admin/orders" component={AdminOrders} />
          <PrivateRoute exact path="/admin/orders/:id" component={AdminDetailOrder} />
          <PrivateRoute exact path="/admin/promote" component={AdminPromote} />
          <PrivateRoute exact path="/admin" component={AdminPromote} />
          <PrivateRoute exact path="/admin/signup" component={AdminSignUp} />
          <PrivateRoute exact path="/admin/account" component={AdminAccount} />
          <Route exact path="/login" component={AdminLogin} />
          {/* user */}
          <Route exact path="/" component={Home} />
          <Route exact path="/product-details" component={ProductDetails} />
          <Route exact path="/all-products" component={AllProducts} />
          <Route exact path="/best-sellers" component={BestSellers} />
          <Route exact path="/search-results" component={SearchResults} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/franchise" component={Franchise} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
