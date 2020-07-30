import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import AdminTemplate from "../AdminTemplate";
import { useSelector, useStore } from "react-redux";

// H.O.C

{
  /* <AdminRoute path="/user-management" component={UserManagement}/> */
}

// const AdminRoute = ({component: Component, ...rest}) => {....}

const AdminRoute = (props) => {
  const { component: Component, ...rest } = props;
  const {userInfo} = useSelector(state => state.authReducer);

  if (!Object.keys(userInfo).length) {
    return <Redirect to="/"/>
  }

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
