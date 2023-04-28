import React from 'react'

const Profile = () => {
  return (
    <div className='flex mt-5 ml-7'>
      <div className="w-24 h-24 rounded-full overflow-hidden bg-center')">
        <img src="https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-full h-full object-cover" alt="Profile" />
      </div>
      <h1 className='mt-7 ml-5 font-bold text-xl'>Lepharam Ramchiary</h1>
    </div>
  )
}

export default Profile