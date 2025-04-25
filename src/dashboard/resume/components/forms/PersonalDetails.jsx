import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { LoaderCircle } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../../service/GlobalApi'
import { toast } from 'sonner'

function PersonalDetails({ enabledNext }) {
  const params = useParams();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData({
      firstName: resumeInfo?.firstName || '',
      lastName: resumeInfo?.lastName || '',
      jobTitle: resumeInfo?.jobTitle || '',
      address: resumeInfo?.address || '',
      phone: resumeInfo?.phone || '',
      email: resumeInfo?.email || ''
    });
  }, [resumeInfo]);

  const handleInputChange = (e) => {
    enabledNext(false);
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setResumeInfo((prev) => ({
      ...prev,
      [name]: value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ''
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    } else if (!nameRegex.test(formData.firstName)) {
      newErrors.firstName = 'Only letters allowed';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    } else if (!nameRegex.test(formData.lastName)) {
      newErrors.lastName = 'Only letters allowed';
    }

    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = 'Job Title is required';
    } else if (!nameRegex.test(formData.jobTitle)) {
      newErrors.jobTitle = 'Only letters allowed';
    }

    if (!formData.address.trim()) newErrors.address = 'Address is required';

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSave = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast('Please fix the highlighted fields.');
      return;
    }

    setLoading(true);
    const data = { data: formData };

    GlobalApi.UpdateResumeDetail(params?.resumeid, data).then(() => {
      enabledNext(true);
      setLoading(false);
      toast("Your details updated successfully.");
    }).catch(() => {
      setLoading(false);
      toast("Something went wrong!");
    });
  };

  const inputClass = (field) => errors[field] ? 'border-red-500' : '';

  const requiredLabel = (label) => (
    <label className='text-sm font-medium'>
      {label} <span className='text-red-500'>*</span>
    </label>
  );

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Personal Details</h2>
      <p>Get started with the basic information</p>

      <form onSubmit={onSave}>
        <div className='grid grid-cols-2 mt-5 gap-3'>
          <div>
            {requiredLabel('First Name')}
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={inputClass('firstName')}
            />
            {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
          </div>

          <div>
            {requiredLabel('Last Name')}
            <Input
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={inputClass('lastName')}
            />
            {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
          </div>

          <div className='col-span-2'>
            {requiredLabel('Job Title')}
            <Input
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleInputChange}
              className={inputClass('jobTitle')}
            />
            {errors.jobTitle && <p className="text-red-500 text-xs">{errors.jobTitle}</p>}
          </div>

          <div className='col-span-2'>
            {requiredLabel('Address')}
            <Input
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className={inputClass('address')}
            />
            {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
          </div>

          <div>
            {requiredLabel('Phone')}
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={inputClass('phone')}
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
          </div>

          <div>
            {requiredLabel('Email')}
            <Input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={inputClass('email')}
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
        </div>

        <div className='mt-3 flex justify-end'>
          <Button type="submit" disabled={loading}>
            {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetails;
