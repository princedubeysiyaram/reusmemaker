import { Input } from '@/components/ui/input';
import React, { useContext, useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import GlobalApi from './../../../../../service/GlobalApi';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

function Skills() {
  const [skillsList, setSkillsList] = useState([
    {
      name: '',
      rating: 0,
    },
  ]);
  const { resumeid } = useParams();
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [highlighted, setHighlighted] = useState({});

  useEffect(() => {
    resumeInfo?.skills && setSkillsList(resumeInfo.skills);
  }, []);

  const handleChange = (index, name, value) => {
    const newEntries = [...skillsList];
    newEntries[index][name] = value;
    setSkillsList(newEntries);
  };

  const AddNewSkills = () => {
    setSkillsList([
      ...skillsList,
      {
        name: '',
        rating: 0,
      },
    ]);
  };

  const RemoveSkills = () => {
    if (skillsList.length > 1) {
      setSkillsList((skillsList) => skillsList.slice(0, -1));
    } else {
      toast('At least one skill is required!');
    }
  };

  const validateForm = () => {
    const errors = {};
    skillsList.forEach((item, index) => {
      if (!item.name.trim()) errors[`name-${index}`] = true;
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
        skills: skillsList.map(({ id, ...rest }) => rest),
      },
    };

    GlobalApi.UpdateResumeDetail(resumeid, data).then(
      (resp) => {
        setLoading(false);
        toast('Details updated!');
      },
      (error) => {
        setLoading(false);
        toast('Server Error, Try again!');
      }
    );
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      skills: skillsList,
    });
  }, [skillsList]);

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Skills</h2>
      <p>Add your top professional key skills</p>

      <div>
        {skillsList.map((item, index) => (
          <div key={index} className='flex justify-between mb-2 border rounded-lg p-3'>
            <div className='w-full mr-4'>
              <label className='text-xs'>
                Name <span className='text-red-500'>*</span>
              </label>
              <Input
                className={`w-full ${highlighted[`name-${index}`] ? 'border-red-500' : ''}`}
                defaultValue={item.name}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
              />
              {highlighted[`name-${index}`] && (
                <p className='text-red-500 text-xs mt-1'>Skill name is required.</p>
              )}
            </div>
            <div className='flex items-end'>
              <Rating
                style={{ maxWidth: 120 }}
                value={item.rating}
                onChange={(v) => handleChange(index, 'rating', v)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <Button variant='outline' onClick={AddNewSkills} className='text-primary'>
            + Add More Skill
          </Button>
          <Button variant='outline' onClick={RemoveSkills} className='text-primary'>
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

export default Skills;
