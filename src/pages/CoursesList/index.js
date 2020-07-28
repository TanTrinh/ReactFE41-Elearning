import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getCourseList } from '../../actions/khoaHocActions';

export default function CoursesList() {
    const {danhSachKhoaHoc, loading, error} = useSelector(
        state => state.khoaHocReducer
    );

    const dispatch = useDispatch();

    useEffect(() => {
        // Call action gọi API lấy ds khóa học
        dispatch(getCourseList());
    }, []);

    return (
        <div>
            Courses List
        </div>
    )
}
