import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getCourseDetail } from "../../actions/khoaHocActions";

export default function CourseDetail(props) {
    const { location, match } = props;
    const dispatch = useDispatch();
    const { chiTietKhoaHoc } = useSelector((state) => {
        return state.khoaHocReducer;
    })

    useEffect(() => {
        // Sử dụng match để lấy param từ trên URL
        const maKhoaHoc = match.params.id;
        // Gọi API lấy chi tiết khóa học
        dispatch(getCourseDetail(maKhoaHoc));
    }, [])

    return (
        <div>
            {chiTietKhoaHoc.tenKhoaHoc}
        </div>
    )
}
