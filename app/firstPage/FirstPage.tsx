'use client'
import Navbar from '../components/Navbar'
import bg from '../../public/images/bg1.jpg'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useState } from 'react'
import Login from './Login'

const FirstPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('        ')
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        width:'100%',
        backgroundAttachment:'fixed',
        backgroundSize: 'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
      }}
      className="relative h-screen"
    >
      <div className="flex h-full w-full flex-col">
        <Navbar />
        {/* <div className="flex w-full h-full min- px-4 py-4 justify-center items-center">
          <div className="modal-box to-transparent bg-opacity-80 border-2">
            <label className="flex justify-center text-4xl font-bold text-lime-100">
              LOGIN
            </label>
            <form action="">
              <div className="flex flex-col mt-6 form-control">
                <label className="flex text-xl text-lime-50">Username</label>
                <input
                  className="bg-lime-100 w-full rounded-md h-12 mt-1 px-3 text-black text-lg focus"
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
              <div className='flex justify-center mt-12'>
                <label>do you not have an account?</label>
                <button className='pl-2 text-blue-300'>Sign Up</button>
              </div>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default FirstPage
