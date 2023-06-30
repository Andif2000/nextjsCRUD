'use client'

import { useState } from 'react'
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillCloseCircle,
} from 'react-icons/ai'

const Login = (props: any) => {
  const [isOpen, setIsOpen] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('        ')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = () => {
    setIsOpen(!isOpen)
  }
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className={isOpen ? 'modal' : 'modal modal-open'}>
      <div className="flex w-full h-full min- px-4 py-4 justify-center items-center">
        <div className="modal-box to-transparent bg-opacity-80 border-2">
          <button className="flex absolute right-6" onClick={handleLogin}>
            <AiFillCloseCircle size={28} />
          </button>
          <label className="flex justify-center text-4xl text-lime-100 font-bold ">
            LOGIN
          </label>
          <form action="">
            <div className="flex flex-col mt-6 form-control">
              <label className="flex text-xl text-lime-50">Username</label>
              <input
                className="bg-lime-100 w-full  text-black text-lg rounded-md h-12 mt-1 px-3 focus"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value)
                }}
              />
            </div>
            <div className="flex flex-col mt-6 form-control">
              <label className="flex text-xl text-lime-50">Password</label>
              <div className="flex">
                <input
                  className="bg-lime-100 w-full rounded-md h-12 mt-1 px-3 text-black text-lg focus"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
                <div
                  className="flex cursor-pointer items-center absolute right-10 mt-3.5"
                  onClick={handleShowPassword}
                >
                  {showPassword ? (
                    <AiOutlineEye size={28} />
                  ) : (
                    <AiOutlineEyeInvisible size={28} />
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button type="submit" className="btn btn-success mr-4">
                Login
              </button>
              <button
                type="submit"
                className="btn btn-error"
                onClick={() => {
                  setUsername(''), setPassword('')
                }}
              >
                Cancel
              </button>
            </div>
            <div className="flex justify-center mt-12">
              <label>do you not have an Account?</label>
              <button className="pl-2 text-blue-300">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
