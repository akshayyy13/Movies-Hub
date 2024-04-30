import React from 'react'

function Navbar() {
  return (
    <div className="fixed bg-richblack-900 w-screen z-10 ">
      <nav className=" py-5">
        <h1 className=" text-4xl font-inter font-extrabold text-center bg-gradient-to-r from-blue-50 to-blue-700 text-transparent bg-clip-text flex flex-col gap-2">
          Movies Hub
          <div className=" h-[2px] w-[10%] bg-gradient-to-r from-blue-50 to-blue-700  mx-auto"></div>
        </h1>
      </nav>
    </div>
  );
}

export default Navbar
