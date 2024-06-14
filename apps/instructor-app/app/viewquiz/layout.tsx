import React from 'react'

const layout = ({children}:{children : React.ReactNode}) => {
  return (
    <div className='px-16 mt-8'>
        {children}
    </div>
  )
}

export default layout