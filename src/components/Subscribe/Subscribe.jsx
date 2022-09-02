import React from 'react'
import img from "../../assets/subscribebg.jpg"
import './Subscribe.css'

const Subscribe = (props) => {

  return (
    <div className="subscribe" style={{backgroundImage: `url(https://media.istockphoto.com/vectors/young-female-character-trying-on-clothes-in-dressing-room-at-store-vector-id1316118648?b=1&k=20&m=1316118648&s=612x612&w=0&h=_G6NYZZABlMd8mWoh0eXN10nHvMeKkcLUVL7_-MXqeU=)`}}>
        <div>
          <h3>Get a <strong>$25</strong> discount on your first oder</h3>
          <small className="graytext">Sin up to our Newsletter</small>
          <div>
          <input type="text" placeholder='Subscribe'/>
          <button className='custom-btn btn-5'>Sign Up</button>
          {/* <Appbtn text='Sign Up'/> */}
          </div>
        </div>
    </div>
  )
}
export default Subscribe