import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import CoursesList from './pages/CoursesList';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import DefaultTemplate from './components/DefaultTemplate';
import AdminTemplate from './components/AdminTemplate';
import CoursesManagement from './pages/CoursesManagement';
import UserManagement from './pages/UserManagement';
import AdminRoute from './components/AdminRoute';
import UserRoute from './components/UserRoute';
import { ComponentAWithForm, ComponentBWithForm } from './pages/HOC/withForm';
import Counter from './pages/Hooks/Counter';
import Form from './pages/Hooks/Form';
import CourseDetail from './pages/CourseDetail';

import { useSelector } from "react-redux";
import { setToken } from './utils/axiosClient';

function App() {
  // const { userInfo } = useSelector(state => state.authReducer);
  // useEffect(() => {
  //   if (Object.keys(userInfo).length) {
  //     setToken(userInfo.accessToken);
  //   }
  // }, [])
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/courses-list">CoursesList</Link>
      <Link to="/signin">Signin</Link>
      <Link to="/signup">Signup</Link>

      <Switch>
        {/* <Route exact path="/" component={Home}>
          <Home/>
        </Route> */}
        {/* <Route path="/courses-list" component={CoursesList}>
        </Route>
        <Route path="/signin" component={Signin}>
        </Route> */}
        {/* <Route path="/signup" component={Signup}>
          <Signup/>
        </Route> */}

        {/* routerProps chính là history, location, match */}
        {/* <Route
          path="/signup"
          render={(routerProps) => {
            return (<DefaultTemplate>
              <Signup {...routerProps}/> đây là this.props.children của DefaultTemplate
              <Signup {...routerProps}/>
            </DefaultTemplate>)
          }}></Route> */}
        {/* <Route path="/courses-management" render={routerProps => {
          return (
            <AdminTemplate>
              <CoursesManagement {...routerProps}/>
            </AdminTemplate>
          )
        }}></Route>
        <Route path="/user-management" render={routerProps => {
          return (
            <AdminTemplate>
              <UserManagement {...routerProps}/>
            </AdminTemplate>
          )
        }}></Route> */}
        <Route path="/form-hooks" component={Form}/>
        <Route path="/counter-hooks" component={Counter}/>
        <Route path="/hoc-1" component={ComponentAWithForm}/>
        <Route path="/hoc-2" component={ComponentBWithForm}/>
        <UserRoute exact path="/" component={Home}/>
        <UserRoute path="/courses-list" component={CoursesList}/>
        <UserRoute path="/course/:id" component={CourseDetail}/>
        <UserRoute path="/signin" component={Signin}/>
        <UserRoute path="/signup" component={Signup}/>
        <AdminRoute path="/courses-management" component={CoursesManagement}/>
        <AdminRoute path="/user-management" component={UserManagement}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
