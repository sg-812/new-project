import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
  let {data}=useParams();
  console.log("params value",data);

  return (
    <div>
        <h2>Hello,<u> {data}</u> , welcome to About page</h2>
    </div>
  )
}

export default About