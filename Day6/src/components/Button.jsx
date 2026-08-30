import React from 'react'

const Button = (props) => {
  return (
    <div className='w-fit bg-emerald-500 text-white text-lg m-2 font-bold rounded px-5 py-3'>
     {props.text}
    </div>
  )
}

export default Button