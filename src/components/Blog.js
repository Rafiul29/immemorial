import React from 'react'

const Blog = ({needFullHeight}) => {
  return <section className={`blog wrapper ${needFullHeight} && min-h-100`}>
    <h2 className="section-title">Blog</h2>
  </section>
}

export default Blog
