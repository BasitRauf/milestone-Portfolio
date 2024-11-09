import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-centre'>
        <div data-aos="zoom-in-up">
          <h2 className='text-4xl md:text-5xl'>Technalogie's I Work With</h2>
          <p className='text-gray-500 pt-2'>
            I have a Solid Foundation in Web-Development, Specializing HTML,CSS and JavaScript. My experience extends to using framework like React, Nexde.JS to create dynamic and user-friendly application. I'm also proficient in Tailwind CSS for efficient styling and design
            With a passion for lerning. I stat update on the latest Technalogis to enhance my skills set and contribute efficiently
            projects. 
          </p>
        </div>

        <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>

            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">TypeScript</h2>
              <h2 data-aos="zoom-in-up">NextJS</h2>
              <h2 data-aos="zoom-in-up">Python</h2>
            </div>

            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">TailWind</h2>
              <h2 data-aos="zoom-in-up">Figma</h2>
              <h2 data-aos="zoom-in-up">NodeJS</h2>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills
