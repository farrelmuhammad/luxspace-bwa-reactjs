import React, { useCallback, useReducer, useRef } from 'react'
import useSafeDispatch from './useSafeDispatch';

const defaultState = {
    data: null, status: 'idle', error: null,
}

export default function useAsync(initialState) {
    const initialState = useRef({
        ...defaultState,
        ...initialState
    })

    const [state, dispatch] = useReducer((state, action) => {
        return {...state, ...action}
    })

    const run = useCallback(
        (promise) => {
            if (!promise || !promise.then)
                throw new Error('The argument passed to useAsync().run must be a promise')
            setState({ status: "pending" })
            return promise.then(data => {
                setState({ data, status: "resolved" })

                return data
            }, error => {
                console.log(error.message);
                setState({ status: "rejected", error: JSON.parse(error.message) })
            });
        },
        [setState],
    )

    return {
        data, status, error, run
    }
}