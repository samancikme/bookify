import React from 'react'

const Container = ({children , className}) => {
  return (
    <div className={`flex justify-center items-center w-[90%] max-w-[1440px] mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container
