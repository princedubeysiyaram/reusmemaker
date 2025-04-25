import React from 'react';

function Resume2({ resumeInfo }) {
  const themeColor = resumeInfo?.ThemeColor || '#FF6B6B';

  return (
    <div
      className="flex w-[210mm] min-h-[297mm] mx-auto bg-white font-sans text-gray-800 text-sm leading-tight"
      style={{
        boxSizing: 'border-box',
        colorAdjust: 'exact',
        WebkitPrintColorAdjust: 'exact',
        printColorAdjust: 'exact',
      }}
    >
      {/* Sidebar */}
      <div
        className="w-2/5 p-4 text-white flex flex-col"
        style={{
          backgroundColor: themeColor,
          minHeight: '297mm', // full A4 height
        }}
      >
        <div className="text-center mb-4">
          <h1 className="text-xl font-bold">
            {resumeInfo?.firstName} {resumeInfo?.lastName}
          </h1>
          <p className="text-xs">{resumeInfo?.jobTitle}</p>
        </div>

        <div className="mb-4">
          <h2 className="text-sm font-semibold mb-1">Contact</h2>
          <p className="text-xs">{resumeInfo?.address}</p>
          <p className="text-xs">📞 {resumeInfo?.phone}</p>
          <p className="text-xs">✉️ {resumeInfo?.email}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold mb-1">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {resumeInfo?.skills?.map((skill, i) => (
              <span
                key={i}
                className="bg-white text-xs text-black font-medium px-2 py-0.5 rounded-full"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-grow" /> {/* Pushes content up, fills remaining height */}
      </div>

      {/* Main Content */}
      <div className="w-3/5 p-6 space-y-4">
        {/* Summary */}
        {resumeInfo?.summery && (
          <section>
            <h2 className="text-lg font-semibold border-b pb-1" style={{ borderColor: themeColor }}>Summary</h2>
            <p className="text-xs mt-1">{resumeInfo?.summery}</p>
          </section>
        )}

        {/* Experience */}
        {resumeInfo?.experience?.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold border-b pb-1" style={{ borderColor: themeColor }}>Experience</h2>
            {resumeInfo.experience.map((exp, i) => (
              <div key={i} className="mt-2">
                <h3 className="font-semibold text-sm">{exp.title} – {exp.companyName}</h3>
                <p className="text-xs text-gray-500">{exp.city}, {exp.state} | {exp.startDate} - {exp.endDate}</p>
                <div className="text-xs" dangerouslySetInnerHTML={{ __html: exp.workSummery }} />
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {resumeInfo?.education?.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold border-b pb-1" style={{ borderColor: themeColor }}>Education</h2>
            {resumeInfo.education.map((edu, i) => (
              <div key={i} className="mt-2">
                <h3 className="font-semibold text-sm">{edu.universityName}</h3>
                <p className="text-xs">{edu.degree} in {edu.major} | {edu.startDate} - {edu.endDate}</p>
                <p className="text-xs">{edu.description}</p>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}

export default Resume2;
