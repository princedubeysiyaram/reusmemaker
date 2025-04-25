import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import SummaryPreview from './preview/SummaryPreview'
import ExperiencePreview from './preview/ExperiencePreview'
import EducationalPreview from './preview/EducationalPreview'
import SkillsPreview from './preview/SkillsPreview'
import Resume1 from './preview/Resume1'


function ResumePreview() {

   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
   return (


      <div className='shadow-lg h-full p-14 border-t-[20x]'
         style={{
            borderTop: `15px solid ${resumeInfo?.ThemeColor || '#ff5733'}`,

            borderBlockStartColor: '#ff5733', // Top border color


         }}

      >




         {/* personal details  */}
         <PersonalDetailPreview resumeInfo={resumeInfo} />
         {/* summary  */}
         <SummaryPreview resumeInfo={resumeInfo} />

         {/* Professional Experience  */}
         <ExperiencePreview resumeInfo={resumeInfo} />
         {/* Education  */}
         <EducationalPreview resumeInfo={resumeInfo} />
         {/* Skills */}
         <SkillsPreview resumeInfo={resumeInfo} />
         
         

      </div>
   )
}

export default ResumePreview






 