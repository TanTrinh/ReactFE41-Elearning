import React, { Component } from "react"
import { Route } from "react-router-dom"
import DefaultTemplate from "../DefaultTemplate";

const UserRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={routerProps => {
                return (
                    <DefaultTemplate>
                        <Component {...routerProps}/>
                    </DefaultTemplate>
                );
            }}
        />
    )
}

export default UserRoute;