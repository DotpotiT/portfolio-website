
import React from 'react'

function Navbar() {
  return (
    <div>
        <div className="navbar hidden lg:flex fixed z-10 pt-11 px-[250px]">
            
            <div className="flex flex-row justify-between gap-[100vh] ">

            <div className="">
            <a href="/" className="text-2xl font-semibold text-orange-500">
            <div className="loader">
            <div className="loader-bg">
            <span><img src="https://raw.githubusercontent.com/kleberbaum/theme/main/wg-logo.svg" alt="Flowers in Chania" className="kuhl"/></span>
            </div>
            <div className="drops">
              <div className="drop1"></div>
              <div className="drop2"></div>  
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="liquid">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="liquid" />
              </filter>
            </defs>
          </svg>
                  </a>
            </div>

          <a href="/" className="btn-3d inline-block px-4 py-2 rounded-xl border-2 border-transparent bg-gradient-to-r from-orange-200 to-blue-200 transform hover:rotate-y-3 hover:rotate-x-3 transition-transform -translate-y-20 duration-300">
            Download Portfolio
          </a>
  </div>
</div>
    </div>
  )
}

export default Navbar