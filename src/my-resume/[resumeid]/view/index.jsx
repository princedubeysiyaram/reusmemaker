// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// import Header from '@/components/custom/Header';
// import { Button } from '@/components/ui/button';
// import ResumePreview from '@/dashboard/resume/components/ResumePreview';
// import { ResumeInfoContext } from '@/context/ResumeInfoContext';
// import GlobalApi from './../../../../service/GlobalApi';
// import { RWebShare } from 'react-web-share';
// import ThemeColor from '@/dashboard/resume/components/ThemeColor';

// function ViewResume() {
//   const [resumeInfo, setResumeInfo] = useState();
//   const { resumeid } = useParams();

//   useEffect(() => {
//     if (resumeid) {
//       fetchResumeInfo();
//     }
//   }, [resumeid]);

//   const fetchResumeInfo = async () => {
//     try {
//       const response = await GlobalApi.GetResumeById(resumeid);
//       setResumeInfo(response.data.data);
//     } catch (error) {
//       console.error('Failed to fetch resume:', error);
//     }
//   };

//   const handleDownload = () => {
//     window.print();
//   };



//   return (
//     <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
//       {/* Non-printable area */}
//       <div id="no-print">
//         <Header />


//         <div className="my-10 mx-6 md:mx-20 lg:mx-36">
//           <h2 className="text-center text-2xl font-semibold text-gray-800">
//             🎉 Congrats! Your AI-generated Resume is Ready!
//           </h2>
//           <p className="text-center text-gray-500 mt-2">
//             Download or share your personalized resume using the buttons below.
//           </p>

//           <div className="flex justify-center gap-6 my-8">
//             <ThemeColor/>
//             <Button onClick={handleDownload}>Download</Button>
//             <RWebShare
//         data={{
//           text: "Hello Everyone, This is my resume please open url to see it",
//           url: import.meta.env.VITE_BASE_URL+"/my-resume/"+resumeid+"/view",
//           title: resumeInfo?.firstName+" "+resumeInfo?.lastName+" resume",
//         }}
//         onClick={() => console.log("shared successfully!")}
//       > <Button>Share</Button>
//       </RWebShare>





//           </div>
//         </div>
//       </div>

//       {/* Printable area */}
//       <div className="border rounded-xl shadow-md p-4 bg-white mx-6 md:mx-20 lg:mx-36" id="print-area">
//         <ResumePreview />
//       </div>
//     </ResumeInfoContext.Provider>
//   );
// }

// export default ViewResume;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// import Header from '@/components/custom/Header';
// import { Button } from '@/components/ui/button';
// import ResumePreview from '@/dashboard/resume/components/ResumePreview';
// import { ResumeInfoContext } from '@/context/ResumeInfoContext';
// import GlobalApi from './../../../../service/GlobalApi';
// import { RWebShare } from 'react-web-share';
// import ThemeColor from '@/dashboard/resume/components/ThemeColor';
// import Resume1 from '@/dashboard/resume/components/preview/Resume1';
// import Resume2 from '@/dashboard/resume/components/preview/Resume2';
// import Resume3 from '@/dashboard/resume/components/preview/Resume3';
// import Resume4 from '@/dashboard/resume/components/preview/Resume4';



// function ViewResume() {
//   const [resumeInfo, setResumeInfo] = useState();
//   const { resumeid } = useParams();

//   useEffect(() => {
//     if (resumeid) {
//       fetchResumeInfo();
//     }
//   }, [resumeid]);

//   const fetchResumeInfo = async () => {
//     try {
//       const response = await GlobalApi.GetResumeById(resumeid);
//       setResumeInfo(response.data.data);
//     } catch (error) {
//       console.error('Failed to fetch resume:', error);
//     }
//   };

//   const handleDownload = () => {
//     window.print();
//   };

//   const handleTemplateChange = (e) => {
//     setResumeInfo((prev) => ({
//       ...prev,
//       template: e.target.value, // Update the template
//     }));
//   };

//   // Conditional rendering based on selected template
//   const renderTemplate = () => {
//     switch (resumeInfo?.template) {
//       case 'template1':
//         return <Resume1 resumeInfo={resumeInfo} />;
//       case 'template2':
//         return <Resume2 resumeInfo={resumeInfo} />;
//       case 'template3':
//         return <Resume3 resumeInfo={resumeInfo} />;
//       case 'template4':
//         return <Resume4 resumeInfo={resumeInfo} />;
//       default:
//         return <ResumePreview />; // Default template (your initial ResumePreview)
//     }
//   };

//   return (
//     <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
//       {/* Non-printable area */}
//       <div id="no-print">
//         <Header />

//         <div className="my-10 mx-6 md:mx-20 lg:mx-36">
//           <h2 className="text-center text-2xl font-semibold text-gray-800">
//             🎉 Congrats! Your AI-generated Resume is Ready!
//           </h2>
//           <p className="text-center text-gray-500 mt-2">
//             Download or share your personalized resume using the buttons below.
//           </p>

//           <div className="flex flex-wrap justify-center gap-6 my-8">
//             <ThemeColor />

//             {/* Template selector */}
//             <select
//               onChange={handleTemplateChange}
//               value={resumeInfo?.template || ''}
//               className="border p-2 rounded"
//             >
//               <option value="">Default Template</option>
//               <option value="template1">Template 1</option>
//               <option value="template2">Template 2</option>
//               <option value="template3">Template 3</option>
//               <option value="template4">Template 4</option>
//             </select>

//             <Button onClick={handleDownload}>Download</Button>

//             <RWebShare
//               data={{
//                 text: 'Hello Everyone, This is my resume please open url to see it',
//                 url: import.meta.env.VITE_BASE_URL + '/my-resume/' + resumeid + '/view',
//                 title: resumeInfo?.firstName + ' ' + resumeInfo?.lastName + ' resume',
//               }}
//               onClick={() => console.log('shared successfully!')}
//             >
//               <Button>Share</Button>
//             </RWebShare>
//           </div>
//         </div>
//       </div>

//       {/* Printable area */}
//       <div className="border rounded-xl shadow-md p-4 bg-white mx-6 md:mx-20 lg:mx-36" id="print-area">
//         {renderTemplate()} {/* Render the selected template here */}
//       </div>
//     </ResumeInfoContext.Provider>
//   );
// }

// export default ViewResume;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '@/components/custom/Header';
import { Button } from '@/components/ui/button';
import ResumePreview from '@/dashboard/resume/components/ResumePreview';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import GlobalApi from './../../../../service/GlobalApi';
import { RWebShare } from 'react-web-share';
import ThemeColor from '@/dashboard/resume/components/ThemeColor';
import Resume1 from '@/dashboard/resume/components/preview/Resume1';
import Resume2 from '@/dashboard/resume/components/preview/Resume2';
import Resume3 from '@/dashboard/resume/components/preview/Resume3';
import Resume4 from '@/dashboard/resume/components/preview/Resume4';

function ViewResume() {
  const [resumeInfo, setResumeInfo] = useState();
  const { resumeid } = useParams();

  useEffect(() => {
    if (resumeid) {
      fetchResumeInfo();
    }
  }, [resumeid]);

  const fetchResumeInfo = async () => {
    try {
      const response = await GlobalApi.GetResumeById(resumeid);
      setResumeInfo(response.data.data);
    } catch (error) {
      console.error('Failed to fetch resume:', error);
    }
  };

  const handleDownload = () => {
    window.print();
  };

  const handleTemplateChange = (e) => {
    setResumeInfo((prev) => ({
      ...prev,
      template: e.target.value, // Update the template
    }));
  };

  // Conditional rendering based on selected template
  const renderTemplate = () => {
    switch (resumeInfo?.template) {
      case 'template1':
        return <Resume1 resumeInfo={resumeInfo} />;
      case 'template2':
        return <Resume2 resumeInfo={resumeInfo} />;
      case 'template3':
        return <Resume3 resumeInfo={resumeInfo} />;
      case 'template4':
        return <Resume4 resumeInfo={resumeInfo} />;
      default:
        return <ResumePreview />; // Default template (your initial ResumePreview)
    }
  };

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      {/* Non-printable area */}
      <div id="no-print">
        <Header />

        <div className="my-10 mx-6 md:mx-20 lg:mx-36">
          <h2 className="text-center text-2xl font-semibold text-gray-800">
            🎉 Congrats! Your AI-generated Resume is Ready!
          </h2>
          <p className="text-center text-gray-500 mt-2">
            Download or share your personalized resume using the buttons below.
          </p>

          <div className="flex flex-wrap justify-center gap-6 my-8">
            <ThemeColor />

            {/* Template selector */}
            <select
              onChange={handleTemplateChange}
              value={resumeInfo?.template || ''}
              className="border p-2 rounded"
            >
              <option value="">Default Template</option>
              <option value="template1">Template 1</option>
              <option value="template2">Template 2</option>
              <option value="template3">Template 3</option>
              <option value="template4">Template 4</option>
            </select>

            <Button onClick={handleDownload}>Download</Button>

            <RWebShare
              data={{
                text: 'Hello Everyone, This is my resume please open url to see it',
                url: import.meta.env.VITE_BASE_URL + '/my-resume/' + resumeid + '/view',
                title: resumeInfo?.firstName + ' ' + resumeInfo?.lastName + ' resume',
              }}
              onClick={() => console.log('shared successfully!')}
            >
              <Button>Share</Button>
            </RWebShare>
          </div>
        </div>
      </div>

      {/* Printable area */}
      <div className="border rounded-xl shadow-md p-4 mx-6 md:mx-20 lg:mx-36" id="print-area">
        {renderTemplate()} {/* Render the selected template here */}
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default ViewResume;
