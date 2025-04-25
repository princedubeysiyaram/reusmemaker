import React from 'react'

function ExperiencePreview({ resumeInfo }) {
    return (
        <div className='my-6'>
            <h2 className='text-center font-bold text-sm mb-2'
                style={{
                    color: resumeInfo?.ThemeColor || '#ff5733'
                }}
            >Professional Experience</h2>
            <hr
                style={{
                    borderTop: `2px solid ${resumeInfo?.ThemeColor || '#ff5733'}`,
                    marginBottom: '12px',
                }}
            />

            {resumeInfo?.experience.map((experience, index) => (
                <div key={index} className='my-5'>
                    <h2 className='text-sm font-bold'
                        style={{
                            color: resumeInfo?.ThemeColor || '#ff5733'
                        }}>{experience?.title}</h2>
                    <h2 className='text-xs flex justify-between'>{experience?.companyName},
                        {experience?.city},
                        {experience?.state}
                        <span>{experience?.startDate} to {experience?.currentlyWorking ? 'Present' : experience.endDate} </span>
                    </h2>
                    {/* <p className='text-xs my-2'>
                        {experience.workSummery}
                    </p> */}
                    <div className='text-xs my-2' dangerouslySetInnerHTML={{ __html: experience?.workSummery }} />
                </div>
            ))}
        </div>
    )
}

export default ExperiencePreview

