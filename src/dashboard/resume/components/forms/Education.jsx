import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { LoaderCircle } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../../service/GlobalApi';
import { toast } from 'sonner';

function Education() {
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const params = useParams();

  const [educationalList, setEducationalList] = useState([
    {
      universityName: '',
      degree: '',
      major: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  ]);

  const [highlighted, setHighlighted] = useState({});

  useEffect(() => {
    resumeInfo?.education && setEducationalList(resumeInfo.education);
  }, []);

  const handleChange = (event, index) => {
    const newEntries = [...educationalList];
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setEducationalList(newEntries);
  };

  const AddNewEducation = () => {
    setEducationalList([
      ...educationalList,
      {
        universityName: '',
        degree: '',
        major: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ]);
  };

  const RemoveEducation = () => {
    if (educationalList.length > 1) {
      setEducationalList((prev) => prev.slice(0, -1));
    } else {
      toast('At least one education entry is required!');
    }
  };

  const validateForm = () => {
    const errors = {};
    educationalList.forEach((item, index) => {
      if (!item.universityName.trim()) errors[`universityName-${index}`] = true;
      if (!item.degree.trim()) errors[`degree-${index}`] = true;
      if (!item.major.trim()) errors[`major-${index}`] = true;
      if (!item.startDate.trim()) errors[`startDate-${index}`] = true;
      // if (!item.endDate.trim()) errors[`endDate-${index}`] = true;
    });

    setHighlighted(errors);
    if (Object.keys(errors).length > 0) {
      toast.error('Please fill all required fields!');
      return false;
    }
    return true;
  };

  const onSave = () => {
    if (!validateForm()) return;

    setLoading(true);
    const data = {
      data: {
        education: educationalList.map(({ id, ...rest }) => rest),
      },
    };

    GlobalApi.UpdateResumeDetail(params.resumeid, data).then(
      (resp) => {
        setLoading(false);
        toast('Details updated!');
      },
      (error) => {
        setLoading(false);
        toast('Server Error, Please try again!');
      }
    );
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      education: educationalList,
    });
  }, [educationalList]);

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Education</h2>
      <p>Add Your educational details</p>

      <div>
        {educationalList.map((item, index) => (
          <div key={index}>
            <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
              <div className='col-span-2'>
                <label>
                  University Name <span className='text-red-500'>*</span>
                </label>
                <Input
                  name='universityName'
                  onChange={(e) => handleChange(e, index)}
                  defaultValue={item?.universityName}
                  className={highlighted[`universityName-${index}`] ? 'border-red-500' : ''}
                />
                {highlighted[`universityName-${index}`] && (
                  <p className='text-red-500 text-xs mt-1'>University Name is required.</p>
                )}
              </div>
              <div>
                <label>
                  Degree <span className='text-red-500'>*</span>
                </label>
                <Input
                  name='degree'
                  onChange={(e) => handleChange(e, index)}
                  defaultValue={item?.degree}
                  className={highlighted[`degree-${index}`] ? 'border-red-500' : ''}
                />
                {highlighted[`degree-${index}`] && (
                  <p className='text-red-500 text-xs mt-1'>Degree is required.</p>
                )}
              </div>
              <div>
                <label>
                  Major <span className='text-red-500'>*</span>
                </label>
                <Input
                  name='major'
                  onChange={(e) => handleChange(e, index)}
                  defaultValue={item?.major}
                  className={highlighted[`major-${index}`] ? 'border-red-500' : ''}
                />
                {highlighted[`major-${index}`] && (
                  <p className='text-red-500 text-xs mt-1'>Major is required.</p>
                )}
              </div>
              <div>
                <label>
                  Start Date <span className='text-red-500'>*</span>
                </label>
                <Input
                  type='date'
                  name='startDate'
                  onChange={(e) => handleChange(e, index)}
                  defaultValue={item?.startDate}
                  className={highlighted[`startDate-${index}`] ? 'border-red-500' : ''}
                />
                {highlighted[`startDate-${index}`] && (
                  <p className='text-red-500 text-xs mt-1'>Start Date is required.</p>
                )}
              </div>
              <div>
                <label>
                  End Date <span className='text-red-500'>*</span>
                </label>
                <Input
                  type='date'
                  name='endDate'
                  onChange={(e) => handleChange(e, index)}
                  defaultValue={item?.endDate}
                  className={highlighted[`endDate-${index}`] ? 'border-red-500' : ''}
                />
                {highlighted[`endDate-${index}`] && (
                  <p className='text-red-500 text-xs mt-1'>End Date is required.</p>
                )}
              </div>
              <div className='col-span-2'>
                <label>Description</label>
                <Textarea
                  name='description'
                  onChange={(e) => handleChange(e, index)}
                  defaultValue={item?.description}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <Button variant='outline' onClick={AddNewEducation} className='text-primary'>
            + Add More Education
          </Button>
          <Button variant='outline' onClick={RemoveEducation} className='text-primary'>
            - Remove
          </Button>
        </div>
        <Button disabled={loading} onClick={onSave}>
          {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
        </Button>
      </div>
    </div>
  );
}

export default Education;
