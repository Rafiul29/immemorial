import React from 'react'

const NotFound = ({needFullHeight}) => {
  return <section className={`${needFullHeight} && min-h-100 wrapper` }>
    <h1 className='section-title'>Page Not Found</h1>
  </section>
}

export default NotFound
