import React from 'react'
import {AiOutlineSearch,AiOutlineCheck,AiOutlineEdit,AiOutlinePlus,AiOutlineClose} from 'react-icons/ai'
import {BsCalendar3} from 'react-icons/bs'
const Applications = () => {
  return (
  <div className='flex  justify-between  gap-24 w-[1024px]'>
    <div className='h-[85vh] hover:scale-105 transition-all ease-in-out overflow-y-scroll border-black rounded-lg shadow-2xl shadow-black w-[1000px] p-10'>
      <div className='relative'>
        <AiOutlineSearch className='absolute left-2 top-5' size={25}/>
            <input
              className="mb-3 pl-10 w-full border-2 border-gray-500 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Search a candidate"
            />
      </div>
      <div className='relative border-2 mb-2 border-black w-[400px] rounded-lg p-10'>
        <span>Name Surname</span>

        <p>Applied Job</p>
        
      </div>
      <div className='relative border-2 mb-2 border-black w-[400px] rounded-lg p-10'>
        <span>Name Surname</span>

        <p>Applied Job</p>
      </div>
      <div className='relative border-2 mb-2 border-black w-[400px] rounded-lg p-10'>
        <span>Name Surname</span>

        <p>Applied Job</p>
      </div>
      <div className='relative border-2 mb-2 border-black w-[400px] rounded-lg p-10'>
        <span>Name Surname</span>

        <p>Applied Job</p>
      </div>
      <div className='relative border-2 mb-2 border-black w-[400px] rounded-lg p-10'>
        <span>Name Surname</span>

        <p>Applied Job</p>
      </div>

      <div className='relative border-2 mb-2 border-black w-[400px] rounded-lg p-10'>
        <span>Name Surname</span>

        <p>Applied Job</p>
      </div>
    </div>
    <div className='relative hover:scale-110 transition-all ease-in-out  shadow-2xl shadow-black border-black w-[600px] rounded-lg p-10 '>
      <h1 className='text-xl mt-2'>Application 1</h1>
      <p className='text-xl mt-2'>Orhan</p>
      <p className='text-xl mt-2'>Onay</p>
      <span className='block text-xl mt-2 '>Çay expert </span>
      <span className='inline-block pr-2 mt-2 text-xl'>Status:</span>
      <input
        className="ml-10 pl-5 h-5 w-36  p-4 mt-1 bg-transparent"
        placeholder="İşe alındı"
      />
      <AiOutlineEdit className='inline absolute right-8 top-48 cursor-pointer' size={25}/>
      <span className='inline-block text-xl mr-6 mt-14'>Set interview</span>
      <span className='inline-block text-xl mt-14'>Give Feedback</span>
      <BsCalendar3 className='inline ml-10 mt-2 cursor-pointer' size={25}/>
      <AiOutlinePlus className='inline ml-[120px] mt-2 cursor-pointer' size={30}/>
      
      
    </div>
  </div>

  )
}

export default Applications