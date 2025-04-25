// import React from 'react';

// function Resume4({ resumeInfo }) {
//   const themeColor = resumeInfo?.ThemeColor || '#003366';

//   return (
//     <div
//       className="w-[210mm] min-h-[297mm] mx-auto px-[15mm] py-[10mm] text-[11pt] font-sans text-black bg-white"
//       style={{
//         boxSizing: 'border-box',
//         colorAdjust: 'exact',
//         WebkitPrintColorAdjust: 'exact',
//         printColorAdjust: 'exact',
//       }}
//     >
//       {/* Header */}
//       <div className="text-center mb-5">
//         <h1 className="text-[22pt] font-bold" style={{ color: themeColor }}>
//           {resumeInfo?.firstName} {resumeInfo?.lastName}
//         </h1>
//         <p className="italic text-[13pt]">{resumeInfo?.jobTitle}</p>
//         <p>{resumeInfo?.address}</p>
//         <p>📞 {resumeInfo?.phone} | ✉️ {resumeInfo?.email}</p>
//       </div>

//       {/* Summary */}
//       {resumeInfo?.summery && (
//         <section className="mb-3">
//           <h2 className="font-bold text-[13pt]" style={{ color: themeColor }}>Professional Summary</h2>
//           <p className="text-justify text-[10.5pt]">{resumeInfo?.summery}</p>
//         </section>
//       )}

//       {/* Experience */}
//       {resumeInfo?.experience?.length > 0 && (
//         <section className="mb-3">
//           <h2 className="font-bold text-[13pt]" style={{ color: themeColor }}>Experience</h2>
//           {resumeInfo.experience.map((exp, i) => (
//             <div key={i} className="mb-2">
//               <p className="font-semibold">{exp.title} - {exp.companyName}</p>
//               <p className="text-gray-600 text-[10pt]">{exp.city}, {exp.state} | {exp.startDate} - {exp.endDate}</p>
//               <div className="text-[10.5pt]" dangerouslySetInnerHTML={{ __html: exp.workSummery }} />
//             </div>
//           ))}
//         </section>
//       )}

//       {/* Education */}
//       {resumeInfo?.education?.length > 0 && (
//         <section className="mb-3">
//           <h2 className="font-bold text-[13pt]" style={{ color: themeColor }}>Education</h2>
//           {resumeInfo.education.map((edu, i) => (
//             <div key={i} className="mb-1.5">
//               <p className="font-semibold">{edu.universityName}</p>
//               <p className="text-[10pt]">{edu.degree} in {edu.major} | {edu.startDate} - {edu.endDate}</p>
//               <p className="text-[10pt]">{edu.description}</p>
//             </div>
//           ))}
//         </section>
//       )}

//       {/* Skills */}
//       {resumeInfo?.skills?.length > 0 && (
//         <section className="mb-2">
//           <h2 className="font-bold text-[13pt]" style={{ color: themeColor }}>Skills</h2>
//           <div className="flex flex-wrap gap-1 mt-1.5">
//             {resumeInfo.skills.map((skill, i) => (
//               <span
//                 key={i}
//                 className="px-2 py-0.5 text-xs rounded-full"
//                 style={{
//                   backgroundColor: skill.color || themeColor,
//                   color: '#fff',
//                 }}
//               >
//                 {skill.name}
//               </span>
//             ))}
//           </div>
//         </section>
//       )}
//     </div>
//   );
// }

// export default Resume4;


import React from 'react';

const BestFresherResume = () => {
  const data = {
    name: 'Prince Dubey',
    title: 'Aspiring Software Developer | MCA 2025',
    contact: {
      email: 'dubeyprince1909@gmail.com',
      phone: '+91 9321216851',
      location: 'Mumbai, India',
      linkedin: 'www.linkedin.com/in/prince-dubey-3ab38b360',
    },
    summary:
   'Passionate Computer Science graduate with strong fundamentals in Data Structures, Web Development, DevOps, and Problem Solving. Actively seeking a software development role to apply my skills in building impactful and scalable applications, while continuously improving development and deployment processes',
    education: [
      {
        degree: 'Master in Computer Science',
        institution: 'Savitribai Phule Pune University',
        year: '2023 – 2025',
        grade: 'CGPA: 9.16/10',
      },
    ],
    education1: [
      {
        degree: 'Bsc in Computer Science',
        institution: 'Mumbai University',
        year: '2020 – 2023',
        grade: 'CGPA: 9.18/10',
      },
    ],
    education2: [
      {
        degree: 'Senior Secondary (Class XII)',
        institution: 'Maharashtra State Board',
        year: '2018 – 2020',
        grade: 'Percentage: 58%',
      },
    ],
    education3: [
      {
        degree: 'Secondary (Class X)',
        institution: 'UP State Board',
        year: '2017 – 2018',
        grade: 'Percentage: 61%',
      },
    ],
    skills: [
      'Java',
      'React.js',
      'XML',
      'DevOps',
      'SQL',
      'PLSQL',
      'Python',
      'Git & GitHub',
      'Data Structures',
    ],
    projects: [
      {
        name: 'AI Resume Builder',
        description:
          'Developed a React + Node.js based resume builder with AI suggestions and PDF export features. Users can select templates, edit live, and save profiles.',
        techStack: 'React.js, strapi, Tailwind CSS, OpenAI API, MySql',
        features: [
          'Dynamic resume templates with live preview',
          'AI-powered content suggestions based on job title',
          'PDF export with print-friendly styles',
          'Customizable theme colors and section control',
        ],
        link: 'https://github.com/aaravdev/ai-resume-builder',
      },
      {
        name: 'Online Exam Portal App',
        description:
          'Developed a mobile application for conducting online exams with secure login, dynamic question loading, and real-time result display.',
        techStack: 'Android, Java, Firebase Realtime Database, XML, Firebase Authentication',
        features: [
          'User authentication with secure Firebase login',
          'Live exam functionality with real-time question rendering',
          'Generate Result after completion of Exam',
        ],
        link: 'https://github.com/aaravdev/online-exam-portal', // Change to your actual GitHub link
      },
      
    ],
    achievements: [
      'Got a certificate in coding from GeeksForGeeks',
      'participate in Smart India Hackathon 2024',
      'Make Multipal Project in Android '
     
    ],
    
    languages: ['English', 'Hindi'],
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden p-6 print:max-w-full print:shadow-none print:rounded-none print:bg-white print:p-4">
      {/* Header */}
      <div className="border-b pb-4 mb-4">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">{data.name}</h1>
          <p className="text-gray-700 text-sm">{data.title}</p>
        </div>
        <div className="mt-2 text-xs text-gray-600 text-center md:text-left">
          <p>linkedin: {data.contact.linkedin}</p>
          <p>Email: {data.contact.email}</p>
          <p>Location: {data.contact.location}</p>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold border-b pb-1 mb-1">Professional Summary</h2>
        <p className="text-xs text-gray-800">{data.summary}</p>
      </section>

      {/* Education */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold border-b pb-1 mb-1">Education</h2>
        {[...data.education, ...data.education1, ...data.education2, ...data.education3].map((edu, idx) => (
          <div key={idx} className="text-xs mb-2">
            <p className="font-semibold">{edu.degree} - {edu.institution}</p>
            <p>{edu.year} | {edu.grade}</p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold border-b pb-1 mb-1">Skills</h2>
        <div className="flex flex-wrap gap-2 text-xs">
          {data.skills.map((skill, idx) => (
            <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold border-b pb-1 mb-1">Projects</h2>
        {data.projects.map((proj, idx) => (
          <div key={idx} className="text-xs mb-4">
            <p className="font-semibold text-sm">{proj.name}</p>
            <p className="text-gray-800 mb-1">{proj.description}</p>
            {proj.techStack && (
              <p className="mb-1"><span className="font-semibold">Tech Stack:</span> {proj.techStack}</p>
            )}
            {proj.features && (
              <div className="mb-1">
                <p className="font-semibold">Key Features:</p>
                <ul className="list-disc list-inside ml-2">
                  {proj.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            {proj.link && (
              <a
                href={proj.link}
                className="text-blue-600 text-xs"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </section>

      {/* Achievements */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold border-b pb-1 mb-1">Achievements</h2>
        <ul className="list-disc list-inside text-xs text-gray-800">
          {data.achievements.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Certifications */}
      {/* <section className="mb-4">
        <h2 className="text-lg font-semibold border-b pb-1 mb-1">Certifications</h2>
        <ul className="list-disc list-inside text-xs">
          {data.certifications.map((cert, idx) => (
            <li key={idx}>{cert}</li>
          ))}
        </ul>
      </section> */}

      {/* Languages */}
      <section>
        <h2 className="text-lg font-semibold border-b pb-1 mb-1">Languages</h2>
        <p className="text-xs">{data.languages.join(', ')}</p>
      </section>
    </div>
  );
};

export default BestFresherResume;
