import React from 'react'
import BarLoader from 'react-spinners/BarLoader'
const Loading = () => {
  return (
    <div className='loader'>
      <BarLoader color={'#ff7c7c'} size={20} />
    </div>
  )
}

export default Loading
