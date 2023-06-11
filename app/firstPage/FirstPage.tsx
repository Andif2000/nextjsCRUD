'use client'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Background from '../../public/images/background.jpg'

const FirstPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/e/e0/Grass_at_a_lawn_with_morning_dew_02.jpg")`,
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="relative h-screen"
    >
      <div className="flex h-full w-full flex-col">
        <Navbar />
        <div className="flex w-full h-full min- px-4 py-4 justify-center items-center">
          <div className="modal-box to-transparent bg-opacity-80">
            <label className="flex justify-center text-4xl font-bold">LOGIN</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstPage
