import React from 'react';
import '../index.css';
const Button = ({grade, onClick}) => {
  const classname =
    grade === 'CLR' ? 'btn clr' : grade === '<-' ? 'btn bk' : 'btn';

  return (
    <button onClick={onClick} className={classname}>
      {grade}
    </button>
  );
};

export default Button;
