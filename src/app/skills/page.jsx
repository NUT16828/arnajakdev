import React from "react"
import Image from "next/image";

function SkillsPage() {
  return (
    <div class="flex flex-col h-dvh bg-gradient-to-r from-fuchsia-500 to-cyan-500">
      <div className="flex items-center justify-end bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-8 text-white">
        <div className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl ">
          <p className="text-sm font-bold bg-gradient-to-r from-indigo-600 to-pink-500"></p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-4 ">
        <div className="bg-white border border-gray-300 p-2 rounded-md shadow-sm round-sm">
          <div>Topic: ก้าวสู่โลกเทคโนโลยีด้วยการเป็น QA</div>
          <div><a href="https://futureskill.co/course/detail/710" target="_blank"><p className="hover:underline text-blue-700">See in details</p></a></div>
          <br />
          <div><a href="/001.jpg" target="_blank" rel="noopener noreferrer">
            <img className="rounded-md w-100 h-28"
              src="/001.jpg" // ตัวอย่าง: รูปภาพชื่อ my-image.jpg ในโฟลเดอร์ public
              alt="001QA"
            /></a>
          </div>
        </div>
        <div className="bg-white border border-gray-300 p-2 rounded-md shadow-sm round-sm">
          <div>Topic: ความรู้พื้นฐาน QA และ Tester</div>
          <div><a href="https://futureskill.co/course/detail/711" target="_blank"><p className="hover:underline text-blue-700">See in details</p></a></div>
          <br />
          <div><a href="/002.jpg" target="_blank" rel="noopener noreferrer">
            <img className="rounded-md w-100 h-28"
              src="/001.jpg" // ตัวอย่าง: รูปภาพชื่อ my-image.jpg ในโฟลเดอร์ public
              alt="002QA"
            /></a>
          </div>
        </div>

        <div className="bg-white border border-gray-300 p-2 rounded-md shadow-sm round-sm">
          <div>Topic: API และ Functional Manual Test</div>
          <div><a href="https://futureskill.co/course/detail/713" target="_blank"><p className="hover:underline text-blue-700">See in details</p></a></div>
          <br />
          <div><a href="/002.jpg" target="_blank" rel="noopener noreferrer">
            <img className="rounded-md w-100 h-28"
              src="/003.jpg" // ตัวอย่าง: รูปภาพชื่อ my-image.jpg ในโฟลเดอร์ public
              alt="003QA"
            /></a>
          </div>
        </div>
        <div className="bg-white border border-gray-300 p-2 rounded-md shadow-sm round-sm">
          <div>Topic: พื้นฐาน Next.js สำหรับพัฒนาเว็บ</div>
          <div><a href="https://futureskill.co/course/detail/895" target="_blank"><p className="hover:underline text-blue-700">See in details</p></a></div>
          <br />
          <div><a href="/004.jpg" target="_blank" rel="noopener noreferrer">
            <img className="rounded-md w-100 h-28"
              src="/004.jpg" // ตัวอย่าง: รูปภาพชื่อ my-image.jpg ในโฟลเดอร์ public
              alt="004nextjs"
            /></a>
          </div>
        </div>
        <div className="bg-white border border-gray-300 p-2 rounded-md shadow-sm round-sm">
          <div>Topic: Measurement System Analysis</div>
          <br />
          <br />
          <div><a href="/1.jpg" target="_blank" rel="noopener noreferrer">
            <img className="rounded-md w-100 h-28"
              src="/1.jpg" // ตัวอย่าง: รูปภาพชื่อ my-image.jpg ในโฟลเดอร์ public
              alt="cer1"
            /></a>
          </div>
        </div>
        <div className="bg-white border border-gray-300 p-2 rounded-md shadow-sm round-sm">
          <div>Topic: Statistical Process Control</div>
          <br />
          <br />
          <div><a href="/2.jpg" target="_blank" rel="noopener noreferrer">
            <img className="rounded-md w-100 h-28"
              src="/2.jpg" // ตัวอย่าง: รูปภาพชื่อ my-image.jpg ในโฟลเดอร์ public
              alt="cer2"
            /></a>
          </div>
        </div>
        <div className="bg-white border border-gray-300 p-2 rounded-md shadow-sm round-sm">
          <div>Topic: Systematic Problem Analysis</div>
          <br />
          <br />
          <div><a href="/3.jpg" target="_blank" rel="noopener noreferrer">
            <img className="rounded-md w-100 h-28"
              src="/3.jpg" // ตัวอย่าง: รูปภาพชื่อ my-image.jpg ในโฟลเดอร์ public
              alt="cer3"
            /></a>
          </div>
        </div>
        <div className="bg-white border border-gray-300 p-2 rounded-md shadow-sm round-sm">
          <div>Topic: Coaching & Mentoring Techniques</div>
          <br />
          <div><a href="/4.jpg" target="_blank" rel="noopener noreferrer">
            <img className="rounded-md w-100 h-28"
              src="/4.jpg" // ตัวอย่าง: รูปภาพชื่อ my-image.jpg ในโฟลเดอร์ public
              alt="cer4"
            /></a>
          </div>
        </div>
        <div className="bg-white border border-gray-300 p-2 rounded-md shadow-sm round-sm">
          <div>Topic: In Small Air Conditioner Mechanic</div>
          <br />
          <div><a href="/5.jpg" target="_blank" rel="noopener noreferrer">
            <img className="rounded-md w-100 h-28"
              src="/5.jpg" // ตัวอย่าง: รูปภาพชื่อ my-image.jpg ในโฟลเดอร์ public
              alt="cer5"
            /></a>
          </div>
        </div>
        <div className="bg-white border border-gray-300 p-2 rounded-md shadow-sm round-sm">
          <div>Topic: Electric Bicycle</div>
          <br />
          <br />
          <div><a href="/6.jpg" target="_blank" rel="noopener noreferrer">
            <img className="rounded-md w-100 h-28"
              src="/6.jpg" // ตัวอย่าง: รูปภาพชื่อ my-image.jpg ในโฟลเดอร์ public
              alt="cer6"
            /></a>
          </div>
        </div>
        <div className="bg-white border border-gray-300 p-2 rounded-md shadow-sm round-sm">
          <div>Topic: RMUTI English Examination</div>
          <br />
          <br />
          <div><a href="/7.jpg" target="_blank" rel="noopener noreferrer">
            <img className="rounded-md w-100 h-28"
              src="/7.jpg" // ตัวอย่าง: รูปภาพชื่อ my-image.jpg ในโฟลเดอร์ public
              alt="cer7"
            /></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SkillsPage
