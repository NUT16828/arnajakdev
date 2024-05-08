import React from "react"
import Image from "next/image";

function AboutPage() {
  return (
    <div class="flex flex-col h-dvh">
      <div className="flex items-center justify-end bg-white h-8 text-white">
        <div className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl ">
          <p className="text-sm font-bold bg-gradient-to-r from-indigo-600 to-pink-500"></p>
        </div>
      </div>


      <div className="flex h-dvh">
        <div class="flex-none w-14 h-14">

        </div>
        <div class="grow h-14 ...">
          <div class="flex flex-col">
            <div className="flex items-center justify-center mx-auto min-h-6">
              <div className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                <h1 className="text-3xl">MY PROFILE</h1>
              </div>
            </div><br />
            <div>
              <li className="bg-gradient-to-r from-fuchsia-500 to-cyan-500">INTRODUCE</li>
              <br />
              <p className="text-sm">- Name :: Nuttawut Sensith</p>
              <p className="text-sm">- Nickname :: Nut</p>
              <p className="text-sm">- Birthday :: 3-Jun-1997</p>
              <p className="text-sm">- Sex :: Man</p>
              <br />
              <li className="bg-gradient-to-r from-fuchsia-500 to-cyan-500">SKILLS</li>
              <br />
              <p className="text-sm">- Programing :: Python / Visual Basic / C++ / HTML / CSS / Javascript / SQL Command</p>
              <p className="text-sm">- Office :: Excel / Power Point / Word / Access / Google Sheet / Google Doc / Google Drive</p>
              <p className="text-sm">- Engineering :: AutoCad / SolidWorks / Engineering Skills</p>
              <br />
              <li className="bg-gradient-to-r from-fuchsia-500 to-cyan-500">EDUCATION</li>
              <br />
              <p className="text-sm">- Bachelor Degrees :: Computer Engineering at Rajamangala University of Technology ISAN"s Sakon Nakhon</p>
              <p className="text-sm">- Diploma Degree :: Electronic at Sakon Nakhon Technical College</p>
              <br />
              <li className="bg-gradient-to-r from-fuchsia-500 to-cyan-500">WORK</li>
              <br />
              <p className="text-sm">- Test Engineer at Forth EMS Public Company Ltd (2 Year)</p>
              <br />
              <li className="bg-gradient-to-r from-fuchsia-500 to-cyan-500">THE JOB LOOKING</li>
              <br />
              <p className="text-sm">- About Machine/Measuring Tools</p>
              <p className="text-sm">- About Programing</p>
              <p className="text-sm">- About IT System</p>
              <p className="text-sm">- About Excel/Google Sheet Advanced</p>
              <br />
      
            </div>
          </div>
        </div>
        <div class="flex-none w-14 h-14 ...">

        </div>
      </div>

      
    </div>
  )
}

export default AboutPage
