'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 


export default function Login() {
   
        const router = useRouter();
      
        const handleClick = () => {
          console.log('going');
          router.push('/Products');
        };
      
  const initialValues = { name: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      
      window.location.reload(); 
    }
  }, [formErrors, isSubmit, formValues]);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
    } else if (values.password.length > 20) {
      errors.password = "Password cannot exceed more than 20 characters";
    }
    return errors;
  };

  return (
    <div className='relative w-full h-screen bg-zinc-500'>
      <img
        className='absolute w-full h-full object-cover mix-blend-overlay'
        src="https://mrwallpaper.com/images/thumbnail/tropical-monstera-plant-aesthetic-r05hdlfk9li0u2p1.jpg"
        alt="background"
      />
      <div className='flex justify-center items-center h-full'>
        <form className='max-w-[480px] w-full mx-auto bg-green-800 p-8' onSubmit={handleSubmit}>
          <h2 className='text-4xl font-bold text-center py-4'>Login</h2>
          <div className='flex flex-col mb-4'>
            <label>Name</label>
            <input
              className='border relative bg-black p-2'
              type="text"
              name="name"
              placeholder="Name"
              value={formValues.name}
              onChange={handleChange}
            />
            {formErrors.name && <p className="text-red-600">{formErrors.name}</p>}
          </div>
          <div className='flex flex-col mb-4'>
            <label>Password</label>
            <input
              className='border relative bg-black p-2'
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
            {formErrors.password && <p className="text-red-600">{formErrors.password}</p>}
          </div>
          <button onClick={handleClick} className='w-full py-3 mt-8 bg-black text-white' type="submit">Login</button>
       
          
        </form>
      </div>
    </div>
  );
}
