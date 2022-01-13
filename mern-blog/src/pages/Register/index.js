import React from "react"
import { RegisterBg } from "../../assets"
import { Input } from "../../components"
import "./register.scss"

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} alt="leftside" className="bg-image" />
      </div>
      <div className="right">
        <p>Register</p>
        <Input />
      </div>
    </div>
  )
}

export default Register
