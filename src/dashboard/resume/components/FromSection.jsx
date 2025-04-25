import React, { useState } from 'react'
import PersonalDetails from './forms/PersonalDetails'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, HomeIcon, LayoutGrid } from 'lucide-react'
import Summery from './forms/Summery';
import Experience from './forms/Experience';
import Education from './forms/Education';
import Skills from './forms/Skills';
import Home from '@/home';
import { Link, Navigate, useParams } from 'react-router-dom';
import ThemeColor from './ThemeColor';


function FromSection() {
  const [activeFormIndex, setActiveFromIndex] = useState(1);
  const [enableNext,setEnableNext]=useState(true)
  const {resumeid}=useParams();
  return (

    <div>
      <div className='flex justify-between items-center'>
        <div className='flex gap-5'>
          <Link to={"/dashboard"}>
          <Button><HomeIcon/></Button>
          </Link>
      {/* <ThemeColor/> */}
        
          
          </div>
        <div className='flex gap-2'>
          {activeFormIndex > 1
            && <Button size="sm"
              onClick={() => setActiveFromIndex(activeFormIndex - 1)}
            > <ArrowLeft /> </Button>}
          <Button
          disabled = {!enableNext}
          className="flex gap-2 " size="sm"
            onClick={() => setActiveFromIndex(activeFormIndex + 1)}
          > Next
            <ArrowRight /> </Button>
        </div>
      </div>
      {/* Personal Details  */}
      {activeFormIndex==1? 
      <PersonalDetails  enabledNext={(v)=>setEnableNext(v)}/>
      :activeFormIndex==2?
    <Summery  enabledNext={(v)=>setEnableNext(v)}/>
    
    :activeFormIndex==3?
    <Experience/>
    :activeFormIndex==4?
    <Education/>
    :activeFormIndex==5?
    <Skills/>
    :activeFormIndex==6?
    <Navigate to ={'/my-resume/'+resumeid+"/view"}/>
    :null}
     

      {/* Experience  */}
      


      {/* Educational details  */}

      {/* Skills */}




    </div>
  )
}

export default FromSection