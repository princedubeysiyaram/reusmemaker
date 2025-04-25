import React from 'react'

function EducationalPreview({ resumeInfo }) {
  return (
    <div className='my-6'>
      <h2 className='text-center font-bold text-sm mb-2'
        style={{

          color: resumeInfo?.ThemeColor || '#ff5733',
        }}
      >Education</h2>
      <hr
        style={{
          borderTop: `2px solid ${resumeInfo?.ThemeColor || '#ff5733'}`,
          marginBottom: '12px',
        }}
      />

      {resumeInfo?.education.map((education, index) => (
        <div key={index} className='my-5'>
          <h2 className='text-sm font-bold'
            style={{
              color: resumeInfo?.ThemeColor || '#ff5733'
            }}
          >{education.universityName}</h2>
          <h2 className='text-xs flex justify-between'>{education?.degree} in {education?.major}
            <span>{education?.startDate} - {education?.endDate}</span>
          </h2>
          <p className='text-xs my-2'>
            {education?.description}
          </p>
        </div>
      ))}

    </div>
  )
}

export default EducationalPreview