import React from 'react'
import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export default function useScrollToTop() {
  const navigate = useNavigate();

  console.log(navigate)

  useLayoutEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    
  }, [navigate])
}
