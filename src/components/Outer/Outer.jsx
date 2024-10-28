import React from 'react'
import { Link } from 'react-router-dom'

const Outer = () => {
  return (
    <div>
        <h2>Outer</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <Link to="inner-comp">
        <button>Go to Inner</button>
        </Link>
    </div>
  )
}

export default Outer