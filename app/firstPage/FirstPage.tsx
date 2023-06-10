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
        <div className="flex flex-row px-4 py-4">
          <div className="flex font-bold text-4xl text-zinc-300 w-full justify-center">
            Welcome to Andif20 Cell
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="flex bg-zinc-400">
              <div className="flex w-96 justify-center">
                <div className="flex font-bold text-4xl text-white cursor-pointer">Login</div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstPage
