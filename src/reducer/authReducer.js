import { LOGIN } from "../constants/authConstants";
// Reducer xử lý đăng nhập, đăng ký, đăng xuất
// Sau khi đăng nhập mình sẽ lưu thông tin user trong
// reducer này
const userInfo = localStorage.getItem("userInfo");
const initialState = {
    userInfo: userInfo ? JSON.parse(userInfo) : {},
    loading: false,
    error: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN.SUCCESS: {
            return {
                ...state, userInfo: action.payload.data,
            }
        }
        default:
            return state;
    }
};

export default authReducer;