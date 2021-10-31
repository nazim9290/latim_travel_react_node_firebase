import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Events from "./Component/Events/Events";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Notfound from "./Component/Nofound/Notfound";
import AuthProvider from "./Context/Authprovider";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookingDetails from "./Component/Booking/BookingDetails";
import Footer from "./Component/Footer/Footer";
import AddNewService from "./Component/UserManage/AddNewService/AddNewService";
import ManageOrder from "./Component/UserManage/ManageAllOrder/ManageOrder";
import MyOrder from "./Component/UserManage/MyOrder/MyOrder";
import UpdateService from "./Component/UserManage/UpdateService/UpdateService";
import Registration from "./Component/Login/Registration";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <PrivetRoute exact path="/events">
              <Events />
            </PrivetRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/add-service">
              <AddNewService />
            </Route>
            <Route exact path="/manage-orders">
              <ManageOrder />
            </Route>
            <Route exact path="/my-order">
              <MyOrder />
            </Route>
            <Route exact path="/registration">
              <Registration />
            </Route>
            <Route exact path="/booking/:id">
              <BookingDetails />
            </Route>
            <Route exact path="/update/:id">
              <UpdateService />
            </Route>
            <Route exact path="*">
              <Notfound />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
