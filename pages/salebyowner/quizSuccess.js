import React from 'react'
import MainHeader from '../../components/MainHeader'

function quizSuccess() {
  return (
    <div>
        <MainHeader></MainHeader>
        <div className='w-full  px-12 py-6  h-screen '>
            <div className='bg-custom-light-yellow h-full flex flex-col'>
              <div className='w-full flex justify-center py-5 text-2xl font-semibold font-Montserrat'>Results</div>
            </div>

        </div>
    </div>
  )
}

export default quizSuccess