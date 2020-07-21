import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdminTemplate extends Component {
  render() {
    return (
      <div className="d-flex">
        <div style={{ backgroundColor: "red" }} className="w-25">
          <p>Sidebar</p>
          <div>
            <Link to="/user-management">User</Link>
          </div>
          <div>
            <Link to="/courses-management">Courses</Link>
          </div>
        </div>
        <div className="w-75">{this.props.children}</div>
      </div>
    );
  }
}
