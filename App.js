import * as React from 'react';
import './style.css';

export default function App() {
  const employees = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Carl' },
  ];
  

  const found = employees.find((element) => {
    return element.id === 2;
  });

  return (
    <div>
      <div>{found ? <h2>{found.name}</h2> : 'Not Found'}</div>
    </div>
  );
}
