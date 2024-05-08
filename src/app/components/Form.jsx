'use client'
import React, {useState} from "react"

function Form() {
    return (
      
      <div>
        <div className="flex items-center justify-center basis-1/2 m-8 flex flex-col  rounded-md px-8 bg-[#FFFFFF] ">
        <br />
        <div>
          <h1 className='flex items-center justify-center not-italic font-sans text-3xl text-black'>CONTACT US</h1>
        </div>

        <br />

        <div>
          <input type="text"
            className='w-96 h-12 rounded-md border border-gray-300 px-4 py-2 text-gray-700 '
            placeholder='Name*' />
        </div>

        <br />

        <div>
          <input type="email" required autoComplete="email" maxLength={80}
            className='w-96 h-12 rounded-md border border-gray-300 px-4 py-2 text-gray-700 '
            placeholder='Your Email*' />
        </div>

        <br />

        <div>
          <input type="text" maxlength="10" minlength="9" 
            className='w-96 h-12 rounded-md border border-gray-300 px-4 py-2 text-gray-700  '
            placeholder='Phone Number' />
        </div>

        <br />

        <div>
        <textarea class="form-input w-96 h-32 rounded-md border border-gray-300 px-4 py-2 text-gray-700 " 
        placeholder="Your Message"></textarea>
        </div>

        <br />

        <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Submit</button>
      </div>
      <br />
      </div>
      </div>
  )
}

export default Form