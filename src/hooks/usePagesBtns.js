import { useState } from 'react';

const usePagesBtns = (init) => {
  const [pages, setPages] = useState(init);
  const updatePages = (newPages) => {
    // console.log('Previous State: ', pages);
    // console.log('New State: ', newPages);
    setPages(newPages);
  };
  return [pages, updatePages];
};

export default usePagesBtns;
