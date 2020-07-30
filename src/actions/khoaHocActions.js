import { GET_COURSES_LIST, GET_COURSE_DETAIL } from "../constants/khoaHocConstants";
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

export const getCourseDetail = (maKhoaHoc) => {
    return (dispatch, getState) => {
        dispatch({
            type: GET_COURSE_DETAIL.REQUEST,
        });

        const { userInfo } = getState().authReducer;

        const headers = {
            Authorization: `Bearer ${userInfo.accessToken}`,
        }
        console.log(headers);

        axios.get(
            `QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`, {
                headers
            }
        ).then((result) => {
            dispatch({
                type: GET_COURSE_DETAIL.SUCCESS,
                payload: {
                    data: result.data,
                }
            });
        }).catch((error) => {
            dispatch({
                type: GET_COURSE_DETAIL.FAIL,
            })
        })
    }
}