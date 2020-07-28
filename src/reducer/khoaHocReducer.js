import { GET_COURSES_LIST } from "../constants/khoaHocConstants";

const initialState = {
    danhSachKhoaHoc: [],
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
        default:
            return state;
    }
};

export default khoaHocReducer;