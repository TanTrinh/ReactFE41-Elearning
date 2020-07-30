import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCourseList } from "../../actions/khoaHocActions";

export default function CoursesList(props) {
    const { history } = props;
  const { danhSachKhoaHoc, loading, error } = useSelector(
    (state) => state.khoaHocReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // Call action gọi API lấy ds khóa học
    dispatch(getCourseList());
  }, []);

  return (
    <div className="container">
      <div className="row">
        {danhSachKhoaHoc.map((item) => (
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top" src={item.hinhAnh} alt />
              <div className="card-body">
                <h4 className="card-title">{item.tenKhoaHoc}</h4>
                <p className="card-text">{item.moTa}</p>
                <button
                onClick={() => history.push(`/course/${item.maKhoaHoc}`)}
                className="btn btn-success">
                    Chi tiết
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
