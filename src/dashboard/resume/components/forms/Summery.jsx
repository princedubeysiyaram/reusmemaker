import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../../service/GlobalApi';
import { Brain, LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';
import { AIChatSession } from './../../../../../service/AIModal';

const prompt = "Job Title: {jobTitle} , Depends on job title give me list of summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format";

function Summery({ enabledNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [summery, setSummery] = useState(resumeInfo?.summery || '');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [aiGeneratedSummeryList, setAiGenerateSummeryList] = useState([]);
  const params = useParams();

  useEffect(() => {
    setResumeInfo(prev => ({ ...prev, summery }));
  }, [summery]);

  const validateForm = () => {
    const newErrors = {};
    if (!summery.trim()) {
      newErrors.summery = 'Summary is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const GenerateSummeryFromAI = async () => {
    setLoading(true);
    const PROMPT = prompt.replace('{jobTitle}', resumeInfo?.jobTitle || 'Software Developer');

    try {
      const result = await AIChatSession.sendMessage(PROMPT);
      const responseText = await result.response.text();
      let data;

      try {
        data = JSON.parse(responseText);
      } catch (err) {
        console.error("Invalid JSON from AI:", err);
        toast.error("AI response couldn't be processed.");
        return;
      }

      if (Array.isArray(data)) {
        setAiGenerateSummeryList(data);
      } else if (Array.isArray(data.summaries)) {
        setAiGenerateSummeryList(data.summaries);
      } else if (data?.summary) {
        setAiGenerateSummeryList([data]);
      } else {
        toast("AI did not return valid data.");
        setAiGenerateSummeryList([]);
      }

    } catch (error) {
      console.error("AI Summary Error:", error);
      toast.error("Error fetching AI summary.");
    } finally {
      setLoading(false);
    }
  };

  const onSave = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast("Please fill out all required fields correctly.");
      return;
    }

    setLoading(true);
    const data = {
      data: { summery }
    };

    GlobalApi.UpdateResumeDetail(params?.resumeid, data)
      .then(() => {
        enabledNext(true);
        toast.success("Your summary was updated successfully.");
      })
      .catch(() => toast.error("Something went wrong."))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold'>Summary</h2>
        <p>Add a summary for your job title</p>

        <form className='mt-7' onSubmit={onSave}>
          <div className='flex justify-between items-end'>
            <label className="text-sm font-medium">Summary <span className='text-red-500'>*</span></label>
            <Button variant="outline" onClick={GenerateSummeryFromAI} type="button" size="sm" className="border-primary text-primary flex gap-2">
              <Brain className='h-4 w-4' />Generate With AI
            </Button>
          </div>

          <Textarea
            className={`mt-5 ${errors.summery ? 'border-red-500' : ''}`}
            value={summery}
            onChange={(e) => {
              setSummery(e.target.value);
              setErrors(prev => ({ ...prev, summery: '' }));
              enabledNext(false);
            }}
            placeholder="Write a brief professional summary..."
          />
          {errors.summery && <p className="text-red-500 text-xs mt-1">{errors.summery}</p>}

          <div className='mt-2 flex justify-end'>
            <Button type="submit" disabled={loading}>
              {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
            </Button>
          </div>
        </form>
      </div>

      {Array.isArray(aiGeneratedSummeryList) && aiGeneratedSummeryList.length > 0 && (
        <div className='my-5'>
          <h2 className='font-bold text-lg'>Suggestions</h2>
          {aiGeneratedSummeryList.map((item, index) => (
            <div key={index} onClick={() => setSummery(item?.summary)} className='p-5 shadow-lg my-4 rounded-lg cursor-pointer'>
              <h2 className='font-bold my-1 text-primary'>Level: {item?.experience_level}</h2>
              <p>{item?.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Summery;
