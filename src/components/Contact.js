import React from 'react'

export default function Contact(props) {
  return (
    <div>
        <div className="container my-4 text-center" style={{color: props.mode==='dark'?"white":"black"}}>
            
            <h1>Contact Us</h1>

        </div>
    </div>
  )
}
