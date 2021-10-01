import React, { useState } from 'react';

const TrainingData = ({type, defaultValue}) => {
  const [editMode, setEditMode] = useState('false');
  const [value, setValue] = useState(defaultValue);
  let date;

  const handleDoubleClick = (e) => {
    e.preventDefault();
    setEditMode(true);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  const handleValidateClick = (e) => {
    e.preventDefault();
    setValue(e.target.previousSibling.value);
    setEditMode(false);
  };

  if (type === "date") {
    const splitDate = defaultValue.split('/');
    date = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
  };

  if (editMode === true) {
    return(
    <td>
      <input type={type} defaultValue={(type === 'date') ? date : value}/>
      <button className="mx-1 btn btn-secondary" onClick={handleValidateClick}>✔</button>
      <button className="btn btn-secondary" onClick={handleCancelClick}>𒒬</button>
    </td>
  )
  } else {
    return <td onDoubleClick={handleDoubleClick}>{value}</td>
  };
};

export default TrainingData;
