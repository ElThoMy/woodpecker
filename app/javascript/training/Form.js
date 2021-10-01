import React from 'react';
import ReactDOM from 'react-dom';

const Field = (props) => {
  const today = new Date;
  const splitToday = today.toLocaleDateString().split('/');
  let date = `${splitToday[2]}-${splitToday[1]}-${splitToday[0]}`;

  return (
    <div className="mb-2">
      <label htmlFor="">{props.children}</label>
      <input type={props.type} className="form-control" placeholder={props.placeholder} defaultValue={(props.type === 'date' ? date : '')}/>
    </div>
  )
};


const Form = () => {
  const handleClick = (e) => {
    e.preventDefault();
    e.target.parentNode.classList.add('hide');
  };

  return(
    <form id="new-training-form" action="" className="form-group new-training-form hide">
      <button className="btn btn-secondary" onClick={handleClick} className="close-btn">X</button>
      <Field type='date'>Date</Field>
      <Field type='text'>Time</Field>
      <Field type='text'>Puzzles</Field>
      <Field type='text'>Points</Field>
      <Field type='textarea'>Comments</Field>
      <div className="mt-2">
        <button className="btn btn-primary btn-lg btn-block">Submit</button>
      </div>
    </form>
  )
};

export default Form;
