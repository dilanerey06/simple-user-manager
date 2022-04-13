const Input = ({ label, ...rest }) => {
  return (
    <>
      <label className='form-label'>{label}</label>
      <div className='input-group mb-4 w-75'>
        <input {...rest} className='form-control rounded-2' />
      </div>
    </>
  );
};

export default Input;
