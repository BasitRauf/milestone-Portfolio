import React from 'react'

import { IoMailOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl' data-aos="zoom-in-up">Connect with Me!</h2>
            <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up">
                Drop me a line, Give me a Call or send me a message by the Submitting the form.
            </p>
            <div className='flex gap-3 items-centre' data-aos="zoom-in-up">
            <IoMailOutline size={30}/> bbasitrauf@gmail.com
            </div>
            <div className='flex gap-3 items-centre' data-aos="zoom-in-up">
            <BsTelephone size={30}/> 03327890925
            </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="name">Name</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-accent'
                id='name'
                />
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="email">Email</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-accent'
                id='email'
                />
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="msg">Message</label>
                <textarea
                className='bg-transparent border border-accent'
                id='msg'rows={8}>
                </textarea>
            </div>
            <button className='bg-accent p data-aos="zoom-in-up"-2 px-6' data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
