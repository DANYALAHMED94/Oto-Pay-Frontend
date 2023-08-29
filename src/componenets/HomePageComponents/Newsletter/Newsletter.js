import React from 'react'

const Newsletter = () => {
  return (
    <div className="relative p-4 rounded-lg  overflow-hidden bg-[#F6F6F6] py-16 sm:py-24 lg:py-32">
    <div className="mx-auto max-w-7xl h-[214px] px-6 lg:px-8  bg-[#653E92] rounded-xl flex justify-between items-center">
      <div className="mx-auto max-w-2xl lg:max-w-none   flex items-center gap-4">
      <div classNameName=' w-[510px] '>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">Subscribe to get updated</h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">Elevate your well-being with the power of inspiration! Discover daily to keep you on track. Click now to get started on your ,</p>
          </div>
          
          <div className=" w-[602px] mt-6 flex  gap-x-4  flex items-center">
            <div classNameName=' flex gap-4'>
            <label for="email-address" className="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required className="w-[390px] h-[53px] flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="example@email.com"/>
           
            <button type="submit" className=" w-[196px] flex-none rounded-md bg-[#17062F] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Submit</button>
            </div>
          </div>

    
      </div>
    </div>
    
  </div>
  )
}

export default Newsletter