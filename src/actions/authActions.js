import { LOGIN } from "../constants/authConstants";
import axios, { setToken } from "../utils/axiosClient";

export const login = (values) => {
    return dispatch => {
        dispatch({
            type: LOGIN.REQUEST,
        });

        axios.post(`QuanLyNguoiDung/DangNhap`, values).then(result => {
            // lưu thông tin user xuống local storage
            localStorage.setItem("userInfo", JSON.stringify(result.data));
            // setToken Authorization lên headers
            setToken(result.data.accessToken);
            dispatch({
                type: LOGIN.SUCCESS,
                payload: {
                    data: result.data,
                }
            });
        }).catch(error => {
            dispatch({
                type: LOGIN.FAIL,
            });
        });
    }
}