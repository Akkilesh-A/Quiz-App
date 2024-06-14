import React from 'react'

function layout ({ children }: any)  {
  return (
    <div className='px-16 py-4'>
        {children}
    </div>
  )
}

export default layout