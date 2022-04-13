import React from 'react';

export default function ListItems({ data, pages }) {
  const pageData = data[pages.current - 1];
  return (
    <div className='card-body pt-4'>
      {pageData.map((user, i) => {
        return (
          <ul className='list-group list-group-horizontal' key={i}>
            <li className='list-group-item w-25' key={1}>
              {user.name}
            </li>
            <li className='list-group-item w-25' key={2}>
              {user.lastName}
            </li>
            <li className='list-group-item w-50' key={3}>
              {user.email}
            </li>
          </ul>
        );
      })}
    </div>
  );
}
