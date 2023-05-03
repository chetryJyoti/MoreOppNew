import React, { useState } from 'react';

const Profile = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [education, setEducation] = useState('');

  const handleSaveEducation = () => {
    setShowPopup(false);
    // add code here to save the education value
    console.log('Education value:', education);
  };

  const handleCancelEducation = () => {
    setShowPopup(false);
    
    // add code here to reset the education value if necessary
  };

  return (
    <div className='h-full w-full'>
      <div className='flex mt-5 ml-7'>
        <div className="w-24 h-24 rounded-full overflow-hidden bg-center')">
          <img src="https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-full h-full object-cover" alt="Profile" />
        </div>
        <h1 className='mt-7 ml-5 font-bold text-xl'>Lepharam Ramchiary</h1>
      </div>
      <div className='h-full w-full block p-9 space-y-5'>
        <form className='h-20 border-solid border-2 border-sky-600 rounded-lg flex justify-between'>
          <h1 className='ml-2 text-xl'>Education:</h1>
          <div className="flex w-full ">
            {education && (
              <p className="p-1">{education}</p>
            )}
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 mt-1 w-6 h-6" onClick={() => setShowPopup(true)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </form>
        {showPopup && (
          <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 w-1/2 p-4 bg-white border border-gray-300 rounded-md shadow-lg">
            <h2 className="text-lg font-bold mb-2">Add</h2>
            <p className="mb-4">
              <form className=' w-full border-solid border-2 border-black p-1'>
                <input className=' w-full border-none outline-none' onChange={(e) => setEducation(e.target.value)} />
              </form>
            </p>
            <div className="flex gap-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleCancelEducation}>Cancel</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleSaveEducation}>Save</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;