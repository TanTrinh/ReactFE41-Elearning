import React, { useState, useEffect, useMemo, useCallback } from 'react'
import Hello from './Hello';
import useCounter from "./useCounter";
import useToggle from './useToggle';
import useWindowDimensions from './useWindowDimensions';

export default function Counter() {

    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);
    // Sử dụng custom hooks counter
    const [count1, increase, decrease] = useCounter(0);
    // Sử dụng custom hooks toggle
    const {toggle: toggle1, handleToggle} = useToggle(false);

    const {width, height} = useWindowDimensions();

    console.log(width, height);

    const calPow = () => {
        console.log('calPow');
        return count * count
    }

    // const pow = calPow();
    // sử dụng useMemo để cache lại giá trị tính toán
    // pow chỉ đc tính toán lại khi count thay đổi
    // khi count ko thay đổi mà component bị render lại
    // nó sẽ lấy giá trị cũ đc cache lại và gán cho pow
    const pow = useMemo(() =>{
        console.log('memo');
        return count * count
        }, [count]);

    useEffect(() => {
        // Nếu để array rỗng sẽ chạy 1 lần duy nhất sau khi render
        // Tương đương với componentDidMount
        console.log('mounted ',count);
    }, [])

    useEffect(() => {
        // Nếu để [count] sẽ chạy lần đầu tiên và mỗi khi biến count thay đổi và chạy sau render
        // Tương đương với componentDidUpdate
        console.log('update ',count);
    }, [count])

    useEffect(() => {
        // Nếu ko để tham số thứ 2(array), thì nó sẽ tự động chạy lại mỗi khi props hoặc state thay đổi.
        // KHÔNG NÊN XÀI
        console.log('change',count);
    })

    useEffect(() => {
        // Nếu để [count] sẽ chạy lần đầu tiên và mỗi khi biến count thay đổi và chạy sau render
        // Tương đương với componentDidUpdate
        console.log('toggle',toggle);
    }, [toggle])

    const [message, setMessage] = useState("");

    // const handleShowMessage = () => {
    //     console.log("message");
    // };

    // dùng memo ở component con ko thể so sánh props là function
    // khi component bị render lại hàm handleShowMessage sẽ bị chạy lại
    // => component con sẽ bị render lại
    // dùng useCallback để đảm bảo khi state message thay đổi thì
    // hàm handleShowMessage mới chạy lại
    // => các state khác thay đổi sẽ ko làm render lại component Hello
    const handleShowMessage = useCallback(() => {
        console.log("message");
    }, [message]);

    return (
        <div>
            <button onClick={() => setCount(count - 1)}>Giảm</button>
            <span className="mx-4">{count}</span>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
            <br/>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle ? <Hello showMessage={handleShowMessage}/> : null}
            <br/>
            <p>pow: {pow}</p>
            <br/>
            <br/>
            <h1>useCounter</h1>
            <button onClick={decrease}>Giảm</button>
            <span className="mx-4">{count1}</span>
            <button onClick={increase}>Tăng</button>
            <br/>
            <br/>
            <h1>useToggle</h1>
            <button onClick={handleToggle}>Toggle</button>
            {toggle1? <Hello showMessage={handleShowMessage}/> : null}
            <br/>
            <br/>
            {width > 400 ? <p>OK</p> : null}
        </div>
    )
}

// Tương đương với ở trên
// class CounterClass extends React.Component {
//     state = {
//         count: 0,
//     }

//     render() {
//         return (
//             <div>
//             <button onClick={() => this.setState({
//                 count: this.state.count - 1,
//             })}>Giảm</button>
//             <span className="mx-4">{this.state.count}</span>
//             <button onClick={() => this.setState({
//                 count: this.state.count + 1,
//             })}>Tăng</button>
//         </div>
//         )
//     }
// }