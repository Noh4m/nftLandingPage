import React from 'react'

export default function Stats() {
  const stats = [
    {
      "title": "Collections",
      "numbers": "432K+",
    },
    {
      "title": "Artists",
      "numbers": "200K+",
    },
    {
      "title": "Community",
      "numbers": "10K+",
    },
  ]
  return (
    <div className=' flex flex-wrap mt-4 mr-6 justify-between font-Poppins sm:w-[16rem] lg:w-[27rem]'>
      {stats.map((stat) => (
        <div className=' text-center text-bold '>
          <h3 className='text-3xl'> {stat.numbers} </h3>
          <p className=' '> {stat.title} </p>
        </div>
      ))}
      
    </div>
  )
}
