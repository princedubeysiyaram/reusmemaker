import React from 'react';

function Resume3({ resumeInfo }) {
  const themeColor = resumeInfo?.ThemeColor || '#6C63FF';

  return (
    <div className="bg-white max-w-4xl mx-auto p-6 rounded-md text-gray-800 font-serif text-sm leading-tight">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold" style={{ color: themeColor }}>
          {resumeInfo?.firstName} {resumeInfo?.lastName}
        </h1>
        <p className="italic text-sm">{resumeInfo?.jobTitle}</p>
        <p className="text-xs text-gray-500">{resumeInfo?.address}</p>
        <p className="text-xs text-gray-500">📞 {resumeInfo?.phone} | ✉️ {resumeInfo?.email}</p>
      </div>

      {/* Summary */}
      {resumeInfo?.summery && (
        <section className="mb-4">
          <h2 className="text-base font-semibold border-b pb-1 mb-1" style={{ borderColor: themeColor }}>Summary</h2>
          <p className="text-xs">{resumeInfo?.summery}</p>
        </section>
      )}

      {/* Experience */}
      {resumeInfo?.experience?.length > 0 && (
        <section className="mb-4">
          <h2 className="text-base font-semibold border-b pb-1 mb-1" style={{ borderColor: themeColor }}>Experience</h2>
          {resumeInfo.experience.map((exp, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold text-sm">{exp.title} – {exp.companyName}</p>
              <p className="text-xs text-gray-500">{exp.city}, {exp.state} | {exp.startDate} - {exp.endDate}</p>
              <div className="text-xs" dangerouslySetInnerHTML={{ __html: exp.workSummery }} />
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {resumeInfo?.education?.length > 0 && (
        <section className="mb-4">
          <h2 className="text-base font-semibold border-b pb-1 mb-1" style={{ borderColor: themeColor }}>Education</h2>
          {resumeInfo.education.map((edu, i) => (
            <div key={i} className="mb-2">
              <p className="font-semibold text-sm">{edu.universityName}</p>
              <p className="text-xs">{edu.degree} in {edu.major} | {edu.startDate} - {edu.endDate}</p>
              <p className="text-xs">{edu.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {resumeInfo?.skills?.length > 0 && (
        <section>
          <h2 className="text-base font-semibold border-b pb-1 mb-1" style={{ borderColor: themeColor }}>Skills</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {resumeInfo.skills.map((skill, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-xs rounded-full"
                style={{ backgroundColor: skill.color || themeColor, color: 'white' }}
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

export default Resume3;
