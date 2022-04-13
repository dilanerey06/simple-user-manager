import React from 'react';

export default function ListBtns({ pages, updatePages }) {
  const pagesArr = [...Array(pages.numOfPages).keys()];
  const getBtnProps = (key) => {
    return {
      type: 'button',
      className: 'btn btn-outline-primary',
      key: key + 1,
      onClick: () =>
        updatePages({ current: key + 1, numOfPages: pages.numOfPages }),
    };
  };
  return (
    <div
      className='btn-toolbar justify-content-center mb-3'
      role='toolbar'
      aria-label='Toolbar with button groups'
    >
      <div className='btn-group me-2' role='group' aria-label='First group'>
        {pagesArr.map((pag) => {
          return <button {...getBtnProps(pag)}>{pag + 1}</button>;
        })}
      </div>
    </div>
  );
}
