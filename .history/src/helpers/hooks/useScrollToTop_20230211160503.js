import React from 'react'
import { useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

export default function useScrollToTop() {
//   const navigate = useNavigate();

  const location = useLocation();

//   console.log(location.key)

  useLayoutEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    
  }, [location.key])
}
