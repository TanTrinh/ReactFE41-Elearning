import { GET_COURSES_LIST, GET_COURSE_DETAIL } from "../constants/khoaHocConstants";

const initialState = {
    danhSachKhoaHoc: [],
    chiTietKhoaHoc: {},
    loading: false,
    error: false,
};

const khoaHocReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COURSES_LIST.REQUEST: {
            return {...state, loading: true, error: false};
        }
        case GET_COURSES_LIST.SUCCESS: {
            return {
                ...state,
                danhSachKhoaHoc: action.payload.data,
                loading: false,
                error: false,
            }
        }
        case GET_COURSES_LIST.FAIL: {
            return {
                ...state,
                loading: false,
                error: true,
            }
        }
        case GET_COURSE_DETAIL.REQUEST: {
            return {...state, loading: true, error: false};
        }
        case GET_COURSE_DETAIL.SUCCESS: {
            return {
                ...state,
                chiTietKhoaHoc: action.payload.data,
                loading: false,
                error: false,
            }
        }
        case GET_COURSE_DETAIL.FAIL: {
            return {
                ...state,
                loading: false,
                error: true,
            }
        }
        default:
            return state;
    }
};

export default khoaHocReducer;