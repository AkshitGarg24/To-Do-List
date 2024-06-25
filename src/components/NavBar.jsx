import React from 'react'

const NavBar = () => {
  return (
    <>
        <nav className='bg-violet-600 text-white justify-between flex p-3 px-8 mb-10 max-[350px]:px-3'>
            <div className="logo font-bold text-lg p-2">
                <span className='max-sm:text-base'>To-Do-List</span>
            </div>
            <ul className='flex text-lg gap-3 max-sm:text-base max-[350px]:gap-0'>
                <li className='cursor-pointer hover:bg-violet-800 p-2 rounded-xl'>Home</li>
                <li className='cursor-pointer hover:bg-violet-800 p-2 rounded-xl'>Your Tasks</li>
            </ul>
        </nav>
    </>
  )
}

export default NavBar
