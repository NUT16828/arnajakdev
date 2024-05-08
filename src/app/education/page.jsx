import React from "react"
import Image from "next/image";

function EducationPage() {
  return (
    <div class="flex flex-col h-dvh bg-gradient-to-r from-fuchsia-500 to-cyan-500">
      <div className="flex items-center justify-end bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-8 text-white">
        <div className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl ">
          <p className="text-sm font-bold bg-gradient-to-r from-indigo-600 to-pink-500"></p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4 ">
        <div className="bg-white border border-gray-300 p-2 rounded-md shadow-sm round-sm">
          <div><h1 className="text-indigo-500">Mover File Program</h1></div>
          <div><p>This is a program for moving or copying files automatically.</p></div>
          <div>
            <a href="https://drive.google.com/file/d/1xphhRQ5RGqcczOJUtTMJyvaOph6iIrCi/view?usp=sharing" target="_blank">
              <button>
                <img class="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                  src="/MOVER_FILE.jpg" // ตัวอย่าง: รูปภาพชื่อ my-image.jpg ในโฟลเดอร์ public
                  alt="mover_file"
                  width={100} // กว้าง 50 pixels
                  height={32} // สูง 50 pixels
                />
              </button>
            </a>
          </div>
        </div>
        <div className="bg-white border border-gray-300 p-2 rounded-md shadow-sm round-sm">
          <div><h1 className="text-indigo-500">Auto Click Program</h1></div>
          <div><p>This is a program for display click automatically.</p></div>
          <br />
          <div>
            <a href="https://drive.google.com/file/d/1kkKStEuPv6i8SJsB4dhbx0H0FsrcKW4t/view?usp=drive_link" target="_blank">
              <button>
                <img class="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                  src="/AUTO_CLICK.jpg" // ตัวอย่าง: รูปภาพชื่อ my-image.jpg ในโฟลเดอร์ public
                  alt="autoclick"
                  width={100} // กว้าง 50 pixels
                  height={32} // สูง 50 pixels
                />
              </button>
            </a>
          </div>
        </div>
        <div className="bg-white border border-gray-300 p-2 rounded-md shadow-sm round-sm">
          <div><h1 className="text-indigo-500">AOI300R - Storage Program</h1></div>
          <div><p>This is a program for harddisk monitoring.</p></div>
          <br />
          <div>
            <a href="https://drive.google.com/file/d/1B4lYDCiCrT0sOBmeuAjGsyZFY0ClIJB5/view?usp=drive_link" target="_blank">
              <button>
                <img class="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                  src="/AOI300R_-_STORAGE.jpg" // ตัวอย่าง: รูปภาพชื่อ my-image.jpg ในโฟลเดอร์ public
                  alt="storage"
                  width={100} // กว้าง 50 pixels
                  height={32} // สูง 50 pixels
                />
              </button>
            </a>
          </div>
        </div>
        <div className="bg-white border border-gray-300 p-2 rounded-md shadow-sm round-sm">
          <div><h1 className="text-indigo-500">AOI300R - Vision Program</h1></div>
          <div><p>Program for test result of OK and NG counting.</p></div>
          <br />
          <div>
            <a href="https://drive.google.com/file/d/1BHNLu8yZmdH_n42XflBNyy0D5UULOl9U/view?usp=drive_link" target="_blank">
              <button>
                <img class="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                  src="/AOI300R_-_VISION.jpg" // ตัวอย่าง: รูปภาพชื่อ my-image.jpg ในโฟลเดอร์ public
                  alt="vision"
                  width={100} // กว้าง 50 pixels
                  height={32} // สูง 50 pixels
                />
              </button>
            </a>
          </div>
        </div>
        <div className="bg-white border border-gray-300 p-2 rounded-md shadow-sm round-sm">
          <div><h1 className="text-indigo-500">Excel Insert Data in Cell Multifile Program</h1></div>
          <div><p>This is a program for insert data in cell multifile.</p></div>
          <br />
          <div>
            <a href="https://drive.google.com/file/d/1Xn14c22qA7zTDKPK317POzEp9_HfNPzy/view?usp=drive_link" target="_blank">
              <button>
                <img class="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                  src="/INSERT_DATA_IN_CELL_MULTIFILE.jpg" // ตัวอย่าง: รูปภาพชื่อ my-image.jpg ในโฟลเดอร์ public
                  alt="insert"
                  width={100} // กว้าง 50 pixels
                  height={32} // สูง 50 pixels
                />
              </button>
            </a>
          </div>
        </div>
        <div className="bg-white border border-gray-300 p-2 rounded-md shadow-sm round-sm">
          <div><h1 className="text-indigo-500">PDF to JPEG Program</h1></div>
          <div><p>This is a program for .pdf convert to .jpeg</p></div>
          <br />
          <div>
            <a href="https://drive.google.com/file/d/1yCJ_syNyodGjRGHG8gWRvwhiM47ns3dq/view?usp=drive_link" target="_blank">
              <button>
                <img class="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                  src="/PDF_TO_JPEG.jpg" // ตัวอย่าง: รูปภาพชื่อ my-image.jpg ในโฟลเดอร์ public
                  alt="pdf"
                  width={100} // กว้าง 50 pixels
                  height={32} // สูง 50 pixels
                />
              </button>
            </a>
          </div>
        </div>
        <div className="bg-white border border-gray-300 p-2 rounded-md shadow-sm round-sm">
          <div><h1 className="text-indigo-500">Spare Part Templates</h1></div>
          <div><p>This is a program for display click automatically.</p></div>
          <br />
          <div>
            <a href="https://docs.google.com/spreadsheets/d/1QR_O4JU8uKCAMnvIFFn5E0SMkVsP4LRtGQ4GpqP37G0/edit?usp=drive_link" target="_blank">
              <button>
                <img class="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                  src="/SPARE_PART.jpg" // ตัวอย่าง: รูปภาพชื่อ my-image.jpg ในโฟลเดอร์ public
                  alt="spare"
                  width={100} // กว้าง 50 pixels
                  height={32} // สูง 50 pixels
                />
              </button>
            </a>
          </div>
        </div>
        <div className="bg-white border border-gray-300 p-2 rounded-md shadow-sm round-sm">
          <div><h1 className="text-indigo-500">To Do List Templates</h1></div>
          <div><p>This is a program for display click automatically.</p></div>
          <br />
          <div>
            <a href="https://docs.google.com/spreadsheets/d/1kJ3vvho1_5nZ45m0p-S2ZZzk-RQTmz60z358ukhPZl8/edit?usp=drive_link" target="_blank">
              <button>
                <img class="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                  src="/TO_DO_LIST.jpg" // ตัวอย่าง: รูปภาพชื่อ my-image.jpg ในโฟลเดอร์ public
                  alt="todolist"
                  width={100} // กว้าง 50 pixels
                  height={32} // สูง 50 pixels
                />
              </button>
            </a>
          </div>
        </div>
        <div className="bg-white border border-gray-300 p-2 rounded-md shadow-sm round-sm">
          <div><h1 className="text-indigo-500">Icon Convertion</h1></div>
          <div><p>This is a program for image convert to icon.</p></div>
          <br />
          <div>
            <a href="https://drive.google.com/file/d/1Uq3y2bRhrtJ_ZL2PfO_SfgnrJh_QZ9t1/view?usp=drive_link" target="_blank">
              <button>
                <img class="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                  src="/ICON_CONVERT.jpg" // ตัวอย่าง: รูปภาพชื่อ my-image.jpg ในโฟลเดอร์ public
                  alt="todolist"
                  width={100} // กว้าง 50 pixels
                  height={32} // สูง 50 pixels
                />
              </button>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default EducationPage
