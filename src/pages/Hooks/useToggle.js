import React, { useState, useEffect } from 'react'

export default function useToggle(initialValue) {
    const [toggle, setToggle] = useState(initialValue)

    const handleToggle = () => {
        setToggle(!toggle);
    };

    // return [toggle, () => setToggle(!toggle)]

    return {toggle, handleToggle};
}
