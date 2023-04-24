import React from 'react'

const  About = () => {
  return (
    <div className='container'>
       <div className="about_us">
        <h1>About us </h1>
        <h5>
          <span style={{ color: "blue" }}>Team members:</span> <br /> JYOTI
          CHETRY, <br />
          LEPHARAM RAMCHIARY, <br /> ABHIJEET CHETRY, <br />
          SHIVAM D MARAK <br />
          <span style={{ color: "blue" }}>Guide:</span> Aparajita Konwar
          (Aplication Architect @IBM)
        </h5>
        <p>
          <span style={{ color: "red" }}>PROBLEM STATEMENT:</span> <br />{" "}
          Motive: Organizing updated contents and making it easily accessible .
          <br /> There are lots of web pages providing lots of info about
          various domains like scholarships/internships/hackathons/free
          resources but the main problem with them is that everything is
          scattered and finding the right one for our use case is very
          difficult. So here we come to solve it
        </p>
        <p>
          <span style={{ color: "green" }}>OUR SOLUTION: </span>
          <br /> A web page listing all the updated info about Internships
          Scholarships Hackathons Free resources (note: we will be just
          providing links to the pages where you can go by clicking the cards
          and know about them in full details)
        </p>
        <a href="https://github.com/chetryJyoti/MoreOppNew">
          Project link
        </a>
      </div>
    </div>
  )
}

export default  About