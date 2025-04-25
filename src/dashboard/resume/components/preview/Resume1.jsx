import React from 'react'

function Resume1({ resumeInfo }) {
  return (
    <div className="bg-white max-w-4xl mx-auto p-4 rounded-xl font-sans text-gray-800 space-y-4 text-sm leading-tight">

      {/* Header */}
      <div className="text-center border-b pb-3">
        <h2
          className="text-2xl font-bold"
          style={{ color: resumeInfo?.ThemeColor || '#ff5733' }}
        >
          {resumeInfo?.firstName} {resumeInfo?.lastName}
        </h2>
        <p className="text-base text-gray-600">{resumeInfo?.jobTitle}</p>
        <p className="text-xs text-gray-500">{resumeInfo?.address}</p>
        <p className="text-xs text-gray-500 mt-1">
          📞 {resumeInfo?.phone} | ✉️ {resumeInfo?.email}
        </p>
      </div>

      {/* Summary */}
      {resumeInfo?.summery && (
        <section>
          <h2 className="font-semibold mb-1" style={{ color: resumeInfo?.ThemeColor || '#ff5733' }}>Summary</h2>
          <p>{resumeInfo?.summery}</p>
        </section>
      )}

      {/* Experience */}
      {resumeInfo?.experience?.length > 0 && (
        <section>
          <h2 className="font-semibold mb-1" style={{ color: resumeInfo?.ThemeColor || '#ff5733' }}>Experience</h2>
          {resumeInfo.experience.map((exp, idx) => (
            <div key={idx} className="mb-2">
              <h3 className="font-semibold">{exp.title} – {exp.companyName}</h3>
              <p className="text-xs text-gray-500">
                {exp.city}-{exp.state} | {exp.startDate} - {exp.endDate}
              </p>
              <div className="text-xs" dangerouslySetInnerHTML={{ __html: exp.workSummery }} />
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {resumeInfo?.education?.length > 0 && (
        <section>
          <h2 className="font-semibold mb-1" style={{ color: resumeInfo?.ThemeColor || '#ff5733' }}>Education</h2>
          {resumeInfo.education.map((edu, idx) => (
            <div key={idx} className="mb-2">
              <h3 className="font-semibold">{edu.universityName}</h3>
              <p className="text-xs text-gray-600">{edu.degree} in {edu.major} | {edu.startDate} - {edu.endDate}</p>
              <p className="text-xs">{edu.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {resumeInfo?.skills?.length > 0 && (
        <section>
          <h2 className="font-semibold mb-1" style={{ color: resumeInfo?.ThemeColor || '#ff5733' }}>Skills</h2>
          <div className="flex flex-wrap gap-1">
            {resumeInfo.skills.map((skill, i) => (
              <span
                key={i}
                style={{
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  color: '#fff',
                  backgroundColor: skill.color || resumeInfo?.ThemeColor || '#ff5733',
                }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default Resume1;
