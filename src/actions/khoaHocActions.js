import { GET_COURSES_LIST } from "../constants/khoaHocConstants";
// import axios from "axios";
import axios from "../utils/axiosClient";

export const getCourseList = () => {
    return (dispatch) => {
        dispatch({
            type: GET_COURSES_LIST.REQUEST,
        })

        axios.get(
            `QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`
        ).then((result) => {
            dispatch({
                type: GET_COURSES_LIST.SUCCESS,
                payload: {
                    data: result.data,
                }
            })
        }).catch((error) => {
            dispatch({
                type: GET_COURSES_LIST.FAIL,
            })
        })
    }
}