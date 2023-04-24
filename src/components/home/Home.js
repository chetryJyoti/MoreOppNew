import React from 'react'
import "./home.css"
import Banner from '../banner/Banner'
const Home = () => {
  return (
    <div className='container'>
      <div className='home_con'>
        <Banner/>
        <div className='home_body'>
          <h1>body</h1>
        </div>
      </div>
    </div>
  )
}

export default Home