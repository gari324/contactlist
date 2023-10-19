import './contactlist.css';
import React, { useState } from "react"
const Contactlist = ({ name, age, email, avatarUrl }) => {
  const [showAge, setshowAge] = useState(false)
  return (
    <div className="contact-card">
      <img src={avatarUrl} alt="profile" />
      <div className="user-details">
        <p>Email: {email}</p>
        <p>Name: {name}</p>
        <button onClick={() => setshowAge(!showAge)}>Show Age</button>
        {showAge && <p className='age123'>Age: {age}</p>}
      </div>
    </div>
  )
}
export default Contactlist