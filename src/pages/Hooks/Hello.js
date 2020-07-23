import React, { useEffect, memo } from 'react'

function Hello() {
    useEffect(() => {
        console.log("change");
    })

    useEffect(() => {
        console.log("Component mounted");

        // Callback này chỉ đc chạy khi component bị hủy
        // Tương đương với componentWillUnmount
        return () => {
            console.log("Component unmount");
        }
    }, [])

    return (
        <div>
            Hello
        </div>
    )
}

// Memo tương tự PureComponent
// Giúp mình so sánh props cũ và mới
// nếu khác nhau sẽ render lại
// Điểm khác là chỉ so sánh đc props chứ ko so sánh đc state
export default memo(Hello);