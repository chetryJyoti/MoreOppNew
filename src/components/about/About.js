import React from 'react'

const  About = () => {
  return (
      <div className="mx-35 p-7 bg-white">
      <div className="mb-6">
        <h5 className="text-lg font-semibold mb-2">
          <span className="text-blue-500">Team members:</span>
        </h5>
        <ul className="list-disc pl-6">
          <li>JYOTI CHETRY</li>
          <li>LEPHARAM RAMCHIARY</li>
          <li>ABHIJEET CHETRY</li>
          <li>SHIVAM D MARAK</li>
        </ul>
        <h5 className="text-lg font-semibold mt-4">
          <span className="text-blue-500">Guide:</span>
        </h5>
        <p className="ml-6">Aparajita Konwar (Application Architect @IBM)</p>
      </div>
      <p className="text-lg mb-6">
        <span className="text-red-500">PROBLEM STATEMENT:</span>
        <br />
        Motive: Organizing updated contents and making it easily accessible.
        <br />
        There are lots of web pages providing lots of info about various domains like scholarships/internships/hackathons/free resources, but the main problem with them is that everything is scattered and finding the right one for our use case is very difficult. So here we come to solve it.
      </p>
      <p className="text-lg mb-6">
        <span className="text-green-500">OUR SOLUTION:</span>
        <br />
        A web page listing all the updated info about Internships, Scholarships, Hackathons, and Free resources (note: we will be just providing links to the pages where you can go by clicking the cards and know about them in full details).
      </p>
      <a href="https://github.com/chetryJyoti/MoreOppNew" className="text-blue-500 font-semibold underline">Project link(For contribution)</a>
    </div>
    
  )
}

export default  About