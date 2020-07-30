import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/authActions";
import { Redirect } from "react-router-dom";

export default function Signin() {
  const [values, setValues] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const dispatch = useDispatch();
  const {userInfo} = useSelector((state) => state.authReducer);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setValues({
        ...values,
        [name]: value,
    })
  }

  const handleSubmit = () => {
      // Gọi API đăng nhập
      dispatch(login(values));
  }

  if (userInfo.maLoaiNguoiDung === "GV") {
      return <Redirect to="/courses-management"/>;
  }
  if (userInfo.maLoaiNguoiDung === "HV") {
      return <Redirect to="/"/>;
  }

  return (
    <div>
      <div className="form-group">
        <label>Tài khoản</label>
        <input
          type="text"
          name="taiKhoan"
          className="form-control"
          value={values.taiKhoan}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Mật khẩu</label>
        <input
          type="password"
          name="matKhau"
          className="form-control"
          value={values.matKhau}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-success" onClick={handleSubmit}>Đăng nhập</button>
    </div>
  );
}
