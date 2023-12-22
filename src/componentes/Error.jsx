import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div>
        <h1 className="text-white bg-red-800 p-2 text-center font-bold mb-2 uppercase" >
           {mensaje}  </h1>
    </div>
  )
}

export default Error