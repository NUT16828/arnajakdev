

export default function Home() {
  return (
    <div class="flex flex-col h-dvh flex items-center justify-center bg-gradient-to-r from-fuchsia-500 to-cyan-500">
      <div className="flex items-center justify-end bg-white h-8 text-white">
        <div className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl ">
          <p className="text-sm font-bold bg-gradient-to-r from-indigo-600 to-pink-500"></p>
        </div>
      </div>

      <div class="text-8xl font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-200 via-purple-300 to-indigo-400
            animate-text
            ">
        HELLO, WELCOME TO ARNAJAKDEV.COM
      </div>

    </div>
  )
}

