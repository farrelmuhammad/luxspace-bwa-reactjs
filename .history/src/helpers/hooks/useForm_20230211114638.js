import React, { useState } from 'react'

export default function useForm(initialState) {
    const [state, setstate] = useState(initialState);

    function fnUpdateState(e) {
        setstate(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
  return {state, fnUpdateState}
}
