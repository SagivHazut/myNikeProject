import React, { Suspense } from "react";
import transactions from "./page/Transactions";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminNavbar from "../src/Admin/AdminComponents/AdminNavbar";
const Admin = () => {
  return (
    <div>
      <div>
        <AdminNavbar></AdminNavbar>
        <ToastContainer />
        <Suspense fallback={<div>loading</div>}>
          <Switch>
            <Route path="/admin/transactions" component={transactions} />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};
export default Admin;
