import React, { useRef, useLayoutEffect, useCallback } from 'react'

export default function useSafeDispatch() {
    const mounted = useRef(false)

    useLayoutEffect(() => {
        mounted.current = true

        return () => {
            mounted.current = false
        };
    }, [])
}
