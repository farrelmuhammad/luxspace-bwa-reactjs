import React, { useState, useCallback } from 'react'

const defaultState = {
    data: null, status: 'idle', error: null,
}

export default function useAsync(initialState) {
    const [state, setState] = useState({...defaultState,...initialState});

    const run = useCallback(
      (promise) => {
        if(!promise || !promise.then)
        throw new Error('The argument passed to useAsync().run must be a promise')
        setState({status: "pending"})
        return promise.then( data => {
            setState({data, status: "result"})

            return data
        }, error => {
            console.log(error.message);
            setState({status: "rejected", error: JSON.parse(error.message)})
        });
      },
      [setState],
    )
    
  return 
}