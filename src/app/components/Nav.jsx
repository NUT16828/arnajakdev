"use client"
import React from 'react'
import Link from 'next/link'

function Nav() {
  function clicklineid(){
    alert('LINE ID : nudtavood_0123456789')
  }

  return (

    <div class="flex flex-row sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
      <div class="basis-1/4 flex items-center justify-center ">
        <h1 className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-2xl font-extrabold'>ARNAJAKDEV.COM</h1>
      </div>
      
      <div class="basis-1/4 "></div>

      <div class="basis-1/2 ">
        <ul className='flex items-center justify-center py-1 bg-[#FFFFFF] text-gray-200 font-semibold space-x-6'>
          <li></li>
          <li className='text-gray-200 text-base cursor-pointer hover:text-cyan-500' onclick="changeColor"><Link href="/"><p className='text-sm'>HOME</p></Link></li>
          <li className='text-gray-200 text-base cursor-pointer hover:text-cyan-500' onclick="changeColor"><Link href="/about"><p className='text-sm'>ABOUT</p></Link></li>
          <li className='text-gray-200 text-base cursor-pointer hover:text-cyan-500' onclick="changeColor"><Link href="/skills"><p className='text-sm'>CERTIFICATE</p></Link></li>
          <li className='text-gray-200 text-base cursor-pointer hover:text-cyan-500' onclick="changeColor"><Link href="/education"><p className='text-sm'>PORTFOLIO</p></Link></li>
          <li className='text-gray-200 text-base cursor-pointer hover:text-cyan-500' onclick="changeColor"><Link href="/contact"><p className='text-sm'>CONTACT</p></Link></li>
          <li className='text-black text-base'><p className='text-xs'>|</p></li>
          <li>
            <a href="https://www.facebook.com/nudtavud.senapun/" target="_blank">
              <button class="image-button py-2">
                <img className='h-6 w-full object-cover md:h-full md:w-6'
                  src="/facebook.jpg" // ตัวอย่าง: รูปภาพชื่อ my-image.jpg ในโฟลเดอร์ public
                  alt="facebook btn"
        
                />
              </button>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UC4qKd2RZo4QhXV3d9VH8DRg" target="_blank">
              <button class="image-button py-2">
                <img className='h-6 w-full object-cover md:h-full md:w-6'
                  src="/youtube.jpg" // ตัวอย่าง: รูปภาพชื่อ my-image.jpg ในโฟลเดอร์ public
                  alt="yt btn"
                  
                />
              </button>
            </a>
          </li>
          <li>
          <a target="_self">
            <button class="image-button py-2" onClick={() => clicklineid()}>
              <img className='h-6 w-full object-cover md:h-full md:w-6'
                src="/line.jpg" // ตัวอย่าง: รูปภาพชื่อ my-image.jpg ในโฟลเดอร์ public
                alt="line btn"
                
              />
            </button>
            </a>
          </li>
        </ul>
      </div>
    </div>


  )
}


export default Nav