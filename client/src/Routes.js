import { useContext } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Home from "./components/HomePage";
import LoginPage from "./components/User/LoginPage";
import RegisterPage from "./components/User/RegisterPage";
import UserProfilePage from "./components/User/UserProfilePage";
import ProductPage from "./components/ProductPage";
import AdminPage from "./components/Admin/AdminPage";
import CreateCategory from "./components/Admin/CreateCategory";
import CreateProduct from "./components/Admin/CreateProduct";
import AuthContext from "./contexts/AuthContext";
import ShoppingCart from "./components/ShoppingCart";
import EditProduct from "./components/Admin/EditProduct";
import AddImage from "./components/Admin/AddImage";
import ManageCoverflow from "./components/Admin/ManageCoverflow";
import Shop from "./components/ShopPage";
import ContactPage from "./components/ContactPage";
import PhotoPage from "./components/PhotoPage";
const Routes = () => {
  const context = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/product/category/:category" exact component={Shop} />
        <Route path="/product/:id" exact component={ProductPage} />
        <Route path="/cart" exact component={ShoppingCart} />
        <Route path="/contacts" exact component={ContactPage} />
        {/* <Route path="/orders" exact component={Orders} /> */}
        <Route path="/user/profile/:id">
          {context.isLogged && context.user.role === "user" ? (
            <UserProfilePage />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/login">
          {context.isLogged ? <Redirect to="/" /> : <LoginPage />}
        </Route>
        <Route path="/register">
          {context.isLogged ? <Redirect to="/login" /> : <RegisterPage />}
        </Route>
        <Route
          path="/logout"
          render={(props) => {
            context.logOut();
            return <Redirect to="/" />;
          }}
        />
        {/* Admin  */}
        <Route path="/admin/profile">
          {context.isLogged && context.user.role === "admin" ? (
            <AdminPage />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/admin/category/create">
          {context.isLogged && context.user.role === "admin" ? (
            <CreateCategory />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/admin/product/create">
          {context.isLogged && context.user.role === "admin" ? (
            <CreateProduct />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/admin/product/edit/:id">
          {context.isLogged && context.user.role === "admin" ? (
            <EditProduct />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/admin/image/add/product/:id">
          {context.isLogged && context.user.role === "admin" ? (
            <AddImage />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/admin/coverflow">
          {context.isLogged && context.user.role === "admin" ? (
            <ManageCoverflow />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/photo" exact component={PhotoPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
