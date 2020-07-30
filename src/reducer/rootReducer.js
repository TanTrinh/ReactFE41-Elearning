import { combineReducers } from "redux";
import khoaHocReducer from "./khoaHocReducer";
import authReducer from "./authReducer"

const rootReducer = combineReducers({
    khoaHocReducer,
    authReducer,
});

export default rootReducer;