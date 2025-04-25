import React from 'react'

function PersonalDetailPreview({ resumeInfo }) {
  return (
    <div>
      <h2 className='font-bold text-xl text-center'
        style={{
          color: resumeInfo?.ThemeColor || '#ff5733'

        }}
        
        >
        {resumeInfo?.firstName} {resumeInfo?.lastName}</h2>
      <h2 className='text-center text-sm font-medium'
      >{resumeInfo?.jobTitle}</h2>

      {/* #new one */}
      <h2 className='text-center font-normal text-xs'
        style={{
            color: resumeInfo?.ThemeColor || '#ff5733'
        }}>
          
          {resumeInfo?.address}</h2>

      <div className='flex justify-between'>
        <h2 className='font-normal text-xs'
          style={{
            color: resumeInfo?.ThemeColor || '#ff5733'
          }}>{resumeInfo?.phone}</h2>
        <h2 className='font-normal text-xs'
          style={{
             color: resumeInfo?.ThemeColor || '#ff5733'
          }}>{resumeInfo?.email}</h2>

      </div>
      <hr className='border-[1.5px] my-2'
        style={{
          borderTop: `2px solid ${resumeInfo?.ThemeColor || '#ff5733'}`,
          marginBottom: '12px',
        }}
      />


    </div>
  )
}

export default PersonalDetailPreview