// ResumeTemplate1.jsx
import React from 'react';
import PersonalDetailPreview from './preview/PersonalDetailPreview';
import SummaryPreview from './preview/SummaryPreview';
import ExperiencePreview from './preview/ExperiencePreview';
import EducationalPreview from './preview/EducationalPreview';
import SkillsPreview from './preview/SkillsPreview';

const ResumeTemplate1 = ({ resumeInfo }) => {
  return (
    <div className="shadow-lg h-full p-14"
      style={{
        borderBlockStart: '15px solid',
        borderBlockStartColor: '#ff5733',
      }}
    >
      <PersonalDetailPreview resumeInfo={resumeInfo} />
      <SummaryPreview resumeInfo={resumeInfo} />
      <ExperiencePreview resumeInfo={resumeInfo} />
      <EducationalPreview resumeInfo={resumeInfo} />
      <SkillsPreview resumeInfo={resumeInfo} />
    </div>
  );
};

export default ResumeTemplate1;
