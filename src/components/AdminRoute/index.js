import React, { Component } from "react";
import { Route } from "react-router-dom";
import AdminTemplate from "../AdminTemplate";

// H.O.C

{
  /* <AdminRoute path="/user-management" component={UserManagement}/> */
}

// const AdminRoute = ({component: Component, ...rest}) => {....}

const AdminRoute = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(routerProps) => {
        return (
          <AdminTemplate>
            <Component {...routerProps}/>
          </AdminTemplate>
        );
      }}
    />
  );
};

export default AdminRoute;
