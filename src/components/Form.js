import React from 'react';
import Input from './Input';
import useForm from '../hooks/useForm';

export default function Form({ submit }) {
  const [form, handleChange, reset] = useForm({
    name: '',
    lastName: '',
    email: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(form);
    reset();
  };
  return (
    <div
      className='bg-white h-75 rounded-3 shadow-sm card'
      style={{ width: '40%' }}
    >
      <h5 className='card-header text-center p-3'>User's Form</h5>
      <div className='card-body d-flex align-items-start justify-content-center pt-5'>
        <form className='d-flex flex-column align-items-center w-100 h-100'>
          <Input
            label='Name'
            type='text'
            name='name'
            placeholder='Name'
            value={form.name}
            onChange={handleChange}
          />
          <Input
            label='Last Name'
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={form.lastName}
            onChange={handleChange}
          />
          <Input
            label='Email'
            type='email'
            name='email'
            placeholder='email@example.com'
            value={form.email}
            onChange={handleChange}
          />
          <input
            type='submit'
            value='Send'
            onClick={handleSubmit}
            className='btn btn-primary w-25'
          />
        </form>
      </div>
    </div>
  );
}
