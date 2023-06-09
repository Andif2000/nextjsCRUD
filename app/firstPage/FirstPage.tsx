'use client'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Background from '../../public/images/background.jpg'

const FirstPage = () => {
  return (
    <div className="relative h-screen">
      <div className="flex h-full w-full">
        <Image
        src={Background}
        className='w-full h-screen'
        alt=''/>
        <Navbar />
      </div>
    </div>
  )
}

export default FirstPage
