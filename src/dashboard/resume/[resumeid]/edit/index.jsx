// import { Console } from 'console';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FromSection from '../../components/FromSection';
import ResumePreview from '../../components/ResumePreview';
import FormSection from '../../components/FromSection';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import dummy from '@/data/dummy';
import GlobalApi from './../../../../../service/GlobalApi';

function EditResume() {
  const { resumeid } = useParams();
  const [resumeInfo, setResumeInfo] = useState();
  useEffect(() => {
    //    console.log(params.resumeid)
    setResumeInfo();
    GetResumeInfo();

  }, [])

  const GetResumeInfo=()=>{
    GlobalApi.GetResumeById(resumeid).then(resp=>{
      console.log(resp.data.data);
      setResumeInfo(resp.data.data);
    })
}



  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
        {/* from section */}
        <FromSection />
        {/* preview Section */}
        <ResumePreview />

      </div>
    </ResumeInfoContext.Provider>
  )
}

export default EditResume