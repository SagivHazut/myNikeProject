import React from "react";
import transactions from "./page/Transactions";
import AuthGuardAdminRoute from "./Admin/AdminComponents/AuthGuardAdminRoute";
import { ToastContainer } from "react-toastify";
import AdminNavbar from "../src/Admin/AdminComponents/AdminNavbar";
import Adminlogin from "./Admin/Adminlogin";
import AdminSignupPage from "./Admin/AdminSignupPage";
import AuthRegister from "./components/AuthRegister";
import AdminCards from "./Admin/AdminCards";
import { Redirect } from "react-router-dom";
import WomenCardRegister from "./Admin/WomenCardRegister";

const Admin = () => {
  return (
    <div>
      <AdminNavbar></AdminNavbar>

      <div>
        <ToastContainer />
        <AuthGuardAdminRoute
          path="/admin/transactions"
          component={transactions}
        />
        <AuthGuardAdminRoute path="/admin/adminCards" component={AdminCards} />
        <Redirect to="/admin/transactions" />
        <AuthGuardAdminRoute
          path="/nike/womencardregister"
          component={WomenCardRegister}
        />
        <AuthRegister path="/admin/signup" component={AdminSignupPage} />
        <AuthRegister path="/admin/login" component={Adminlogin} />
      </div>
    </div>
  );
};
export default Admin;
