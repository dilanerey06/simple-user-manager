import React, { useEffect } from 'react';
import ListBtns from './ListBtns';
// import usePagesBtns from '../hooks/usePagesBtns';
import { useState } from 'react';
import ListItems from './ListItems';

export default function List({ data }) {
  // State that allows control the current page and the number pages
  const [pages, updatePages] = useState({
    current: 1,
    numOfPages: 1,
  });

  // useEffect that makes listBtns change adding one when data.length changes
  useEffect(() => {
    if (data.length < 2) return;
    updatePages((prev) => {
      return { current: prev.current, numOfPages: prev.numOfPages + 1 };
    });
  }, [data.length]);

  // Returning component
  return (
    <div
      className='bg-white min-h-75 rounded-3 shadow-sm card'
      style={{ width: '40%' }}
    >
      <h5 className='card-header text-center p-3'>User's List</h5>
      <ListItems data={data} pages={pages} />
      <ListBtns pages={pages} updatePages={updatePages} />
    </div>
  );
}
