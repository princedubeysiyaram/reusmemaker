
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import React, { useContext, useEffect, useState } from 'react'
// import RichTextEditor from '../RichTextEditor'
// import { ResumeInfoContext } from '@/context/ResumeInfoContext'
// import { useParams } from 'react-router-dom'
// import GlobalApi from './../../../../../service/GlobalApi'
// import { toast } from 'sonner'
// import { LoaderCircle } from 'lucide-react'

// const formField={
//     title:'',
//     companyName:'',
//     city:'',
//     state:'',
//     startDate:'',
//     endDate:'',
//     workSummery:'',

// }
// function Experience() {
//     const [experinceList,setExperinceList]=useState([formField]);
//     const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
//     const params=useParams();
//     const [loading,setLoading]=useState(false);

//     // useEffect(()=>{
//     //     resumeInfo?.experience.length>0&&setExperinceList(resumeInfo?.experience)
        
//     // },[])
//     useEffect(() => {
//     if (resumeInfo?.experience?.length > 1) {
//       setExperinceList(resumeInfo?.experience);
//     }
//   }, [resumeInfo]);
   


//     const handleChange=(index,event)=>{
//         const newEntries=experinceList.slice();
//         const {name,value}=event.target;
//         newEntries[index][name]=value;
//         console.log(newEntries)
//         setExperinceList(newEntries);
//     }

//     const AddNewExperience=()=>{
    
//         setExperinceList([...experinceList,{
//             title:'',
//             companyName:'',
//             city:'',
//             state:'',
//             startDate:'',
//             endDate:'',
//             workSummery:'',
//         }])
//     }

//     // const RemoveExperience=()=>{
//     //     setExperinceList(experinceList=>experinceList.slice(0,-1))
//     // }
//     const RemoveExperience = () => {
//         setExperinceList(prev => {
//           if (prev.length > 1) {
//             return prev.slice(0, -1);
//           } else {
//             toast("At least one experience entry is required!");
//             return prev; // Don't change anything
//           }
//         });
//       };

//     const handleRichTextEditor=(e,name,index)=>{
//         const newEntries=experinceList.slice();
//         newEntries[index][name]=e.target.value;
       
//         setExperinceList(newEntries);
//     }

//     useEffect(()=>{
//       setResumeInfo((prevInfo) => ({
//         ...prevInfo,
//         experience: experinceList,
//       }));
//     }, [experinceList, setResumeInfo]);

   
  
//     const onSave = async () => {
//       setLoading(true);
//       const data = {
//           data: { experience: experinceList.map(({ id, ...rest }) => rest) }
//       };
  
//       try {
//           await GlobalApi.UpdateResumeDetail(params?.resumeid, data);
//           toast.success("Details updated successfully!");
//       } catch (error) {
//           console.error("Error updating resume:", error);
//           toast.error("Failed to update details. Try again!");
//       } finally {
//           setLoading(false);
//       }
//   };
//   return (
//     <div>
//         <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
//         <h2 className='font-bold text-lg'>Professional Experience</h2>
//         <p>Add Your previous Job experience</p>
//         <div>
//             {experinceList.map((item,index)=>(
//                 <div key={index}>
//                     <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
//                         <div>
//                             <label className='text-xs'>Position Title</label>
//                             <Input name="title"   
//                            required  onChange={(event)=>handleChange(index,event)}
//                             defaultValue={item?.title}
//                             />
//                         </div>
//                         <div>
//                             <label className='text-xs'>Company Name</label>
//                             <Input name="companyName" required 
//                             onChange={(event)=>handleChange(index,event)}
//                             defaultValue={item?.companyName} />
//                         </div>
//                         <div>
//                             <label className='text-xs'>City</label>
//                             <Input name="city"  required 
//                             onChange={(event)=>handleChange(index,event)} 
//                             defaultValue={item?.city}/>
//                         </div>
//                         <div>
//                             <label className='text-xs'>State</label>
//                             <Input name="state" required 
//                             onChange={(event)=>handleChange(index,event)}
//                             defaultValue={item?.state}
//                              />
//                         </div>
//                         <div>
//                             <label className='text-xs'>Start Date</label>
//                             <Input type="date"  
//                             name="startDate" required 
//                             onChange={(event)=>handleChange(index,event)} 
//                             defaultValue={item?.startDate}/>
//                         </div>
//                         <div>
//                             <label className='text-xs'>End Date</label>
//                             <Input type="date" name="endDate" required 
//                             onChange={(event)=>handleChange(index,event)} 
//                             defaultValue={item?.endDate}
//                             />
//                         </div>
//                         <div className='col-span-2'>
//                            {/* Work Summery  */}
//                            <RichTextEditor
//                            index={index}
//                            defaultValue={item?.workSummery} required 
//                            onRichTextEditorChange={(event)=>handleRichTextEditor(event,'workSummery',index)}  />
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//         <div className='flex justify-between'>
//             <div className='flex gap-2'>
//             <Button variant="outline" onClick={AddNewExperience} className="text-primary"> + Add More Experience</Button>
//             <Button variant="outline" onClick={RemoveExperience} className="text-primary"> - Remove</Button>

//             </div>
//             <Button disabled={loading} onClick={()=>onSave()}>
//             {loading?<LoaderCircle className='animate-spin' />:'Save'}    
//             </Button>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Experience;

// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import React, { useContext, useEffect, useState } from 'react';
// import RichTextEditor from '../RichTextEditor';
// import { ResumeInfoContext } from '@/context/ResumeInfoContext';
// import { useParams } from 'react-router-dom';
// import GlobalApi from './../../../../../service/GlobalApi';
// import { toast } from 'sonner';
// import { LoaderCircle } from 'lucide-react';

// const formField = {
//   title: '',
//   companyName: '',
//   city: '',
//   state: '',
//   startDate: '',
//   endDate: '',
//   workSummery: '',
// };

// function Experience() {
//   const [experinceList, setExperinceList] = useState([formField]);
//   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
//   const params = useParams();
//   const [loading, setLoading] = useState(false);
//   const [highlighted, setHighlighted] = useState({});

//   useEffect(() => {
//     if (resumeInfo?.experience?.length > 1) {
//       setExperinceList(resumeInfo?.experience);
//     }
//   }, [resumeInfo]);

//   const handleChange = (index, event) => {
//     const newEntries = experinceList.slice();
//     const { name, value } = event.target;
//     newEntries[index][name] = value;
//     setExperinceList(newEntries);
//   };

//   const handleRichTextEditor = (e, name, index) => {
//     const newEntries = experinceList.slice();
//     newEntries[index][name] = e.target.value;
//     setExperinceList(newEntries);
//   };

//   const AddNewExperience = () => {
//     setExperinceList([...experinceList, { ...formField }]);
//   };

//   const RemoveExperience = () => {
//     setExperinceList((prev) => {
//       if (prev.length > 1) {
//         return prev.slice(0, -1);
//       } else {
//         toast("At least one experience entry is required!");
//         return prev;
//       }
//     });
//   };

//   useEffect(() => {
//     setResumeInfo((prevInfo) => ({
//       ...prevInfo,
//       experience: experinceList,
//     }));
//   }, [experinceList, setResumeInfo]);

//   const validateForm = () => {
//     const errors = {};
//     experinceList.forEach((item, index) => {
//       if (!item.title.trim()) errors[`title-${index}`] = 'Title is required';
//       if (!item.companyName.trim()) errors[`companyName-${index}`] = 'Company Name is required';
//       if (!item.city.trim()) errors[`city-${index}`] = 'City is required';
//       if (!item.state.trim()) errors[`state-${index}`] = 'State is required';
//       if (!item.startDate.trim()) errors[`startDate-${index}`] = 'Start Date is required';
//       if (item.endDate.trim()) errors[`endDate-${index}`] = 'End Date is required';
//       if (!item.workSummery.trim()) errors[`workSummery-${index}`] = 'Work Summary is required';
//     });

//     setHighlighted(errors);
//     if (Object.keys(errors).length > 0) {
//       toast.error("Please fill all required fields!");
//       return false;
//     }

//     return true;
//   };

//   const onSave = async () => {
//     if (!validateForm()) return;

//     setLoading(true);
//     const data = {
//       data: { experience: experinceList.map(({ id, ...rest }) => rest) },
//     };

//     try {
//       await GlobalApi.UpdateResumeDetail(params?.resumeid, data);
//       toast.success("Details updated successfully!");
//     } catch (error) {
//       console.error("Error updating resume:", error);
//       toast.error("Failed to update details. Try again!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
//         <h2 className="font-bold text-lg">Professional Experience</h2>
//         <p>Add Your previous Job experience</p>

//         {experinceList.map((item, index) => (
//           <div key={index}>
//             <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
//               <div>
//                 <label className="text-xs">Position Title</label>
//                 <Input
//                   name="title"
//                   required
//                   onChange={(e) => handleChange(index, e)}
//                   defaultValue={item?.title}
//                   className={highlighted[`title-${index}`] ? 'border-red-500' : ''}
//                 />
//                 {highlighted[`title-${index}`] && (
//                   <p className="text-red-500 text-xs mt-1">{highlighted[`title-${index}`]}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="text-xs">Company Name</label>
//                 <Input
//                   name="companyName"
//                   required
//                   onChange={(e) => handleChange(index, e)}
//                   defaultValue={item?.companyName}
//                   className={highlighted[`companyName-${index}`] ? 'border-red-500' : ''}
//                 />
//                 {highlighted[`companyName-${index}`] && (
//                   <p className="text-red-500 text-xs mt-1">{highlighted[`companyName-${index}`]}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="text-xs">City</label>
//                 <Input
//                   name="city"
//                   required
//                   onChange={(e) => handleChange(index, e)}
//                   defaultValue={item?.city}
//                   className={highlighted[`city-${index}`] ? 'border-red-500' : ''}
//                 />
//                 {highlighted[`city-${index}`] && (
//                   <p className="text-red-500 text-xs mt-1">{highlighted[`city-${index}`]}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="text-xs">State</label>
//                 <Input
//                   name="state"
//                   required
//                   onChange={(e) => handleChange(index, e)}
//                   defaultValue={item?.state}
//                   className={highlighted[`state-${index}`] ? 'border-red-500' : ''}
//                 />
//                 {highlighted[`state-${index}`] && (
//                   <p className="text-red-500 text-xs mt-1">{highlighted[`state-${index}`]}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="text-xs">Start Date</label>
//                 <Input
//                   type="date"
//                   name="startDate"
//                   required
//                   onChange={(e) => handleChange(index, e)}
//                   defaultValue={item?.startDate}
//                   className={highlighted[`startDate-${index}`] ? 'border-red-500' : ''}
//                 />
//                 {highlighted[`startDate-${index}`] && (
//                   <p className="text-red-500 text-xs mt-1">{highlighted[`startDate-${index}`]}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="text-xs">End Date</label>
//                 <Input
//                   type="date"
//                   name="endDate"
//                   required
//                   onChange={(e) => handleChange(index, e)}
//                   defaultValue={item?.endDate}
//                   className={highlighted[`endDate-${index}`] ? 'border-red-500' : ''}
//                 />
//                 {highlighted[`endDate-${index}`] && (
//                   <p className="text-red-500 text-xs mt-1">{highlighted[`endDate-${index}`]}</p>
//                 )}
//               </div>

//               <div className="col-span-2">
//                 <RichTextEditor
//                   index={index}
//                   defaultValue={item?.workSummery}
//                   required
//                   onRichTextEditorChange={(e) => handleRichTextEditor(e, 'workSummery', index)}
//                 />
//                 {highlighted[`workSummery-${index}`] && (
//                   <p className="text-red-500 text-xs mt-1">{highlighted[`workSummery-${index}`]}</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}

//         <div className="flex justify-between">
//           <div className="flex gap-2">
//             <Button variant="outline" onClick={AddNewExperience} className="text-primary">
//               + Add More Experience
//             </Button>
//             <Button variant="outline" onClick={RemoveExperience} className="text-primary">
//               - Remove
//             </Button>
//           </div>
//           <Button disabled={loading} onClick={onSave}>
//             {loading ? <LoaderCircle className="animate-spin" /> : 'Save'}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Experience;


// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import React, { useContext, useEffect, useState } from 'react';
// import RichTextEditor from '../RichTextEditor';
// import { ResumeInfoContext } from '@/context/ResumeInfoContext';
// import { useParams } from 'react-router-dom';
// import GlobalApi from './../../../../../service/GlobalApi';
// import { toast } from 'sonner';
// import { LoaderCircle } from 'lucide-react';

// const formField = {
//   title: '',
//   companyName: '',
//   city: '',
//   state: '',
//   startDate: '',
//   endDate: '',
//   workSummery: '',
// };

// function Experience() {
//   const [experinceList, setExperinceList] = useState([formField]);
//   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
//   const params = useParams();
//   const [loading, setLoading] = useState(false);
//   const [highlighted, setHighlighted] = useState({});

//   // Initialize experience list once on mount
//   useEffect(() => {
//     if (resumeInfo?.experience?.length > 0) {
//       setExperinceList(resumeInfo.experience);
//     }
//   }, []);

//   const handleChange = (index, event) => {
//     const newEntries = [...experinceList];
//     const { name, value } = event.target;
//     newEntries[index][name] = value;
//     setExperinceList(newEntries);
//   };

//   const handleRichTextEditor = (e, name, index) => {
//     const newEntries = [...experinceList];
//     newEntries[index][name] = e.target.value;
//     setExperinceList(newEntries);
//   };

//   const AddNewExperience = () => {
//     setExperinceList([...experinceList, { ...formField }]);
//   };

//   const RemoveExperience = () => {
//     setExperinceList((prev) => {
//       if (prev.length > 1) {
//         return prev.slice(0, -1);
//       } else {
//         toast("At least one experience entry is required!");
//         return prev;
//       }
//     });
//   };

//   // Update context with current experience list
//   useEffect(() => {
//     setResumeInfo((prevInfo) => ({
//       ...prevInfo,
//       experience: experinceList,
//     }));
//   }, [experinceList, setResumeInfo]);

//   const validateForm = () => {
//     const errors = {};
//     experinceList.forEach((item, index) => {
//       if (!item.title.trim()) errors[`title-${index}`] = 'Title is required';
//       if (!item.companyName.trim()) errors[`companyName-${index}`] = 'Company Name is required';
//       if (!item.city.trim()) errors[`city-${index}`] = 'City is required';
//       if (!item.state.trim()) errors[`state-${index}`] = 'State is required';
//       if (!item.startDate.trim()) errors[`startDate-${index}`] = 'Start Date is required';
//       // if (item.endDate.trim()) errors[`endDate-${index}`] = 'End Date is not required';
//       if (!item.workSummery.trim()) errors[`workSummery-${index}`] = 'Work Summary is required';
//     });

//     setHighlighted(errors);
//     if (Object.keys(errors).length > 0) {
//       toast.error("Please fill all required fields!");
//       return false;
//     }

//     return true;
//   };

//   const onSave = async () => {
//     if (!validateForm()) return;

//     setLoading(true);
//     const data = {
//       data: { experience: experinceList.map(({ id, ...rest }) => rest) },
//     };

//     try {
//       await GlobalApi.UpdateResumeDetail(params?.resumeid, data);
//       toast.success("Details updated successfully!");
//     } catch (error) {
//       console.error("Error updating resume:", error);
//       toast.error("Failed to update details. Try again!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
//         <h2 className="font-bold text-lg">Professional Experience</h2>
//         <p>Add Your previous Job experience</p>

//         {experinceList.map((item, index) => (
//           <div key={index}>
//             <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
//               <div>
//                 <label className="text-xs">Position Title</label>
//                 <Input
//                   name="title"
//                   required
//                   onChange={(e) => handleChange(index, e)}
//                   value={item.title}
//                   className={highlighted[`title-${index}`] ? 'border-red-500' : ''}
//                 />
//                 {highlighted[`title-${index}`] && (
//                   <p className="text-red-500 text-xs mt-1">{highlighted[`title-${index}`]}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="text-xs">Company Name</label>
//                 <Input
//                   name="companyName"
//                   required
//                   onChange={(e) => handleChange(index, e)}
//                   value={item.companyName}
//                   className={highlighted[`companyName-${index}`] ? 'border-red-500' : ''}
//                 />
//                 {highlighted[`companyName-${index}`] && (
//                   <p className="text-red-500 text-xs mt-1">{highlighted[`companyName-${index}`]}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="text-xs">City</label>
//                 <Input
//                   name="city"
//                   required
//                   onChange={(e) => handleChange(index, e)}
//                   value={item.city}
//                   className={highlighted[`city-${index}`] ? 'border-red-500' : ''}
//                 />
//                 {highlighted[`city-${index}`] && (
//                   <p className="text-red-500 text-xs mt-1">{highlighted[`city-${index}`]}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="text-xs">State</label>
//                 <Input
//                   name="state"
//                   required
//                   onChange={(e) => handleChange(index, e)}
//                   value={item.state}
//                   className={highlighted[`state-${index}`] ? 'border-red-500' : ''}
//                 />
//                 {highlighted[`state-${index}`] && (
//                   <p className="text-red-500 text-xs mt-1">{highlighted[`state-${index}`]}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="text-xs">Start Date</label>
//                 <Input
//                   type="date"
//                   name="startDate"
//                   required
//                   onChange={(e) => handleChange(index, e)}
//                   value={item.startDate}
//                   className={highlighted[`startDate-${index}`] ? 'border-red-500' : ''}
//                 />
//                 {highlighted[`startDate-${index}`] && (
//                   <p className="text-red-500 text-xs mt-1">{highlighted[`startDate-${index}`]}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="text-xs">End Date</label>
//                 <Input
//                   type="date"
//                   name="endDate"
//                   required
//                   onChange={(e) => handleChange(index, e)}
//                   value={item.endDate}
//                   className={highlighted[`endDate-${index}`] ? 'border-red-500' : ''}
//                 />
//                 {highlighted[`endDate-${index}`] && (
//                   <p className="text-red-500 text-xs mt-1">{highlighted[`endDate-${index}`]}</p>
//                 )}
//               </div>

//               <div className="col-span-2">
//                 <RichTextEditor
//                   index={index}
//                   value={item.workSummery}
//                   required
//                   onRichTextEditorChange={(e) =>
//                     handleRichTextEditor(e, 'workSummery', index)
//                   }
//                 />
//                 {highlighted[`workSummery-${index}`] && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {highlighted[`workSummery-${index}`]}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}

//         <div className="flex justify-between">
//           <div className="flex gap-2">
//             <Button variant="outline" onClick={AddNewExperience} className="text-primary">
//               + Add More Experience
//             </Button>
//             <Button variant="outline" onClick={RemoveExperience} className="text-primary">
//               - Remove
//             </Button>
//           </div>
//           <Button disabled={loading} onClick={onSave}>
//             {loading ? <LoaderCircle className="animate-spin" /> : 'Save'}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Experience;



import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useContext, useEffect, useState } from 'react';
import RichTextEditor from '../RichTextEditor';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../../service/GlobalApi';
import { toast } from 'sonner';
import { LoaderCircle } from 'lucide-react';

const formField = {
  title: '',
  companyName: '',
  city: '',
  state: '',
  startDate: '',
  endDate: '',
  workSummery: '',
};

function Experience() {
  const [experienceList, setExperienceList] = useState([formField]);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [highlighted, setHighlighted] = useState({});

  useEffect(() => {
    if (resumeInfo?.experience?.length > 0) {
      setExperienceList(resumeInfo.experience);
    }
  }, []);

  const handleChange = (index, event) => {
    const newEntries = [...experienceList];
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setExperienceList(newEntries);
  };

  const handleRichTextEditor = (e, name, index) => {
    const newEntries = [...experienceList];
    newEntries[index][name] = e.target.value;
    setExperienceList(newEntries);
  };

  const AddNewExperience = () => {
    setExperienceList([...experienceList, { ...formField }]);
  };

  const RemoveExperience = () => {
    setExperienceList((prev) => {
      if (prev.length > 1) {
        return prev.slice(0, -1);
      } else {
        toast("At least one experience entry is required!");
        return prev;
      }
    });
  };

  useEffect(() => {
    setResumeInfo((prevInfo) => ({
      ...prevInfo,
      experience: experienceList,
    }));
  }, [experienceList, setResumeInfo]);

  const validateForm = () => {
    const errors = {};
    experienceList.forEach((item, index) => {
      if (!item.title.trim()) errors[`title-${index}`] = 'Title is required';
      if (!item.companyName.trim()) errors[`companyName-${index}`] = 'Company Name is required';
      if (!item.city.trim()) errors[`city-${index}`] = 'City is required';
      if (!item.state.trim()) errors[`state-${index}`] = 'State is required';
      if (!item.startDate.trim()) errors[`startDate-${index}`] = 'Start Date is required';
      if (!item.workSummery.trim()) errors[`workSummery-${index}`] = 'Work Summary is required';
    });

    setHighlighted(errors);
    if (Object.keys(errors).length > 0) {
      toast.error("Please fill all required fields!");
      return false;
    }

    return true;
  };

  const onSave = async () => {
    if (!validateForm()) return;

    setLoading(true);
    const data = {
      data: {
        experience: experienceList.map(({ id, ...rest }) => rest), // Keep each summary inside its experience
      },
    };

    try {
      await GlobalApi.UpdateResumeDetail(params?.resumeid, data);
      toast.success("Details updated successfully!");
    } catch (error) {
      console.error("Error updating resume:", error);
      toast.error("Failed to update details. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Professional Experience</h2>
        <p>Add your previous job experiences</p>

        {experienceList.map((item, index) => (
          <div key={index}>
            <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
              <div>
                <label className="text-xs">Position Title</label>
                <Input
                  name="title"
                  onChange={(e) => handleChange(index, e)}
                  value={item.title}
                  className={highlighted[`title-${index}`] ? 'border-red-500' : ''}
                />
                {highlighted[`title-${index}`] && (
                  <p className="text-red-500 text-xs mt-1">{highlighted[`title-${index}`]}</p>
                )}
              </div>

              <div>
                <label className="text-xs">Company Name</label>
                <Input
                  name="companyName"
                  onChange={(e) => handleChange(index, e)}
                  value={item.companyName}
                  className={highlighted[`companyName-${index}`] ? 'border-red-500' : ''}
                />
                {highlighted[`companyName-${index}`] && (
                  <p className="text-red-500 text-xs mt-1">{highlighted[`companyName-${index}`]}</p>
                )}
              </div>

              <div>
                <label className="text-xs">City</label>
                <Input
                  name="city"
                  onChange={(e) => handleChange(index, e)}
                  value={item.city}
                  className={highlighted[`city-${index}`] ? 'border-red-500' : ''}
                />
                {highlighted[`city-${index}`] && (
                  <p className="text-red-500 text-xs mt-1">{highlighted[`city-${index}`]}</p>
                )}
              </div>

              <div>
                <label className="text-xs">State</label>
                <Input
                  name="state"
                  onChange={(e) => handleChange(index, e)}
                  value={item.state}
                  className={highlighted[`state-${index}`] ? 'border-red-500' : ''}
                />
                {highlighted[`state-${index}`] && (
                  <p className="text-red-500 text-xs mt-1">{highlighted[`state-${index}`]}</p>
                )}
              </div>

              <div>
                <label className="text-xs">Start Date</label>
                <Input
                  type="date"
                  name="startDate"
                  onChange={(e) => handleChange(index, e)}
                  value={item.startDate}
                  className={highlighted[`startDate-${index}`] ? 'border-red-500' : ''}
                />
                {highlighted[`startDate-${index}`] && (
                  <p className="text-red-500 text-xs mt-1">{highlighted[`startDate-${index}`]}</p>
                )}
              </div>

              <div>
                <label className="text-xs">End Date</label>
                <Input
                  type="date"
                  name="endDate"
                  onChange={(e) => handleChange(index, e)}
                  value={item.endDate}
                  className={highlighted[`endDate-${index}`] ? 'border-red-500' : ''}
                />
                {highlighted[`endDate-${index}`] && (
                  <p className="text-red-500 text-xs mt-1">{highlighted[`endDate-${index}`]}</p>
                )}
              </div>

              <div className="col-span-2">
                <RichTextEditor
                  index={index}
                  value={item.workSummery}
                  onRichTextEditorChange={(e) => handleRichTextEditor(e, 'workSummery', index)}
                />
                {highlighted[`workSummery-${index}`] && (
                  <p className="text-red-500 text-xs mt-1">
                    {highlighted[`workSummery-${index}`]}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button variant="outline" onClick={AddNewExperience} className="text-primary">
              + Add More Experience
            </Button>
            <Button variant="outline" onClick={RemoveExperience} className="text-primary">
              - Remove
            </Button>
          </div>
          <Button disabled={loading} onClick={onSave}>
            {loading ? <LoaderCircle className="animate-spin" /> : 'Save'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
