import React from 'react'

const Profile = () => {
  return (
    <div className='h-full w-full'>
      <div className='flex mt-5 ml-7'>
        <div className="w-24 h-24 rounded-full overflow-hidden bg-center')">
          <img src="https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-full h-full object-cover" alt="Profile" />
        </div>
        <h1 className='mt-7 ml-5 font-bold text-xl'>Lepharam Ramchiary</h1>
      </div>
      {/* <div className='mt-10 ml-7 h-28 w-50 border-solid border-2 border-sky-600 rounded-lg flex justify-between'>
        <h1 className='ml-2 text-xl'>Education:</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>

      </div> */}
      <div className='h-full w-full block p-9 space-y-5'>
        <form className='h-20 border-solid border-2 border-sky-600 rounded-lg flex justify-between'>
          <h1 className='ml-2 text-xl'>Education:</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 mt-1 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </form>

        <form className='h-20 w-50 border-solid border-2 border-sky-600 rounded-lg flex justify-between'>
          <h1 className='ml-2 text-xl'>Skills:</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 mt-1 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </form>

        <form className='h-20 w-50 border-solid border-2 border-sky-600 rounded-lg flex justify-between'>
          <h1 className='ml-2 text-xl'>Experience:</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 mt-1 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </form>

        <form className='h-20 w-50 border-solid border-2 border-sky-600 rounded-lg flex justify-between'>
          <h1 className='ml-2 text-xl'>Projects:</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 mt-1 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </form>
      </div>
    </div>
  )
}

export default Profile