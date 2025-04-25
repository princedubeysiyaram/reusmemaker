import React from 'react';

function Resume4({ resumeInfo }) {
  const themeColor = resumeInfo?.ThemeColor || '#003366';

  return (
    <div
      className="w-[210mm] min-h-[297mm] mx-auto px-[15mm] py-[10mm] text-[11pt] font-sans text-black bg-white"
      style={{
        boxSizing: 'border-box',
        colorAdjust: 'exact',
        WebkitPrintColorAdjust: 'exact',
        printColorAdjust: 'exact',
      }}
    >
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="text-[22pt] font-bold" style={{ color: themeColor }}>
          {resumeInfo?.firstName} {resumeInfo?.lastName}
        </h1>
        <p className="italic text-[13pt]">{resumeInfo?.jobTitle}</p>
        <p>{resumeInfo?.address}</p>
        <p>📞 {resumeInfo?.phone} | ✉️ {resumeInfo?.email}</p>
      </div>

      {/* Summary */}
      {resumeInfo?.summery && (
        <section className="mb-3">
          <h2 className="font-bold text-[13pt]" style={{ color: themeColor }}>Professional Summary</h2>
          <p className="text-justify text-[10.5pt]">{resumeInfo?.summery}</p>
        </section>
      )}

      {/* Experience */}
      {resumeInfo?.experience?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-bold text-[13pt]" style={{ color: themeColor }}>Experience</h2>
          {resumeInfo.experience.map((exp, i) => (
            <div key={i} className="mb-2">
              <p className="font-semibold">{exp.title} - {exp.companyName}</p>
              <p className="text-gray-600 text-[10pt]">{exp.city}, {exp.state} | {exp.startDate} - {exp.endDate}</p>
              <div className="text-[10.5pt]" dangerouslySetInnerHTML={{ __html: exp.workSummery }} />
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {resumeInfo?.education?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-bold text-[13pt]" style={{ color: themeColor }}>Education</h2>
          {resumeInfo.education.map((edu, i) => (
            <div key={i} className="mb-1.5">
              <p className="font-semibold">{edu.universityName}</p>
              <p className="text-[10pt]">{edu.degree} in {edu.major} | {edu.startDate} - {edu.endDate}</p>
              <p className="text-[10pt]">{edu.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {resumeInfo?.skills?.length > 0 && (
        <section className="mb-2">
          <h2 className="font-bold text-[13pt]" style={{ color: themeColor }}>Skills</h2>
          <div className="flex flex-wrap gap-1 mt-1.5">
            {resumeInfo.skills.map((skill, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-xs rounded-full"
                style={{
                  backgroundColor: skill.color || themeColor,
                  color: '#fff',
                }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Resume4;


