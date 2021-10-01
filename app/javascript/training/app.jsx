import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import Trainings from './Trainings';

const root = document.getElementById('root');

const App = (props) => {
  const [trainings, setTrainings] = useState([]);


  async function requestTrainings() {
    const res = await fetch('/api/v1/trainings');
    const trainings = await res.json();
    setTrainings(trainings);
  };

  useEffect(() => {
    requestTrainings();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const form = document.getElementById('new-training-form');
    if (form.classList.contains("hide")) {
      form.classList.remove('hide')
    } else {
      form.classList.add('hide');
    };
  };

  return (
    <div>
      <button id="add-training" className="mb-3 btn btn-primary" onClick={handleClick}>Add new Training</button>
      <Form />
      <Trainings trainings={trainings} />
    </div>
  )
};

ReactDOM.render(<App />, root);
