import { useState } from 'react';

const initialValues = () => {
  return { name: 'Name', lastName: 'Last Name', email: 'Email' };
};

const useSubmit = (init) => {
  const [data, setData] = useState(init);
  const currentData = data[data.length - 1];
  const newData = [...data];

  // Custom hook functions
  const sendData = (user) => {
    if (user.name === '' || user.lastName === '' || user.email === '') return;
    if (currentData.length < 10) {
      const newDataPage = [...currentData, user];
      newData.splice(data.length - 1, 1, newDataPage);
      setData(newData);
    } else {
      setData([...data, [{ ...initialValues() }, user]]);
    }
  };

  return [data, sendData];
};

export default useSubmit;
