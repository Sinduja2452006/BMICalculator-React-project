import React from 'react';

function Student({ name, dept, year }) {
  return (
    <div>
      <h1>Student Info</h1>
      <p>Name: {name}</p>
      <p>Department: {dept}</p>
      <p>Year: {year}</p>
    </div>
  );
}

export default Student;
