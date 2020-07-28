import React, { useState, useEffect} from 'react'

// Custom hooks counter
export default function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue)

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    return [count, increase, decrease];
}
