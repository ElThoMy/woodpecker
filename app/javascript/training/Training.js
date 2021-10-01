import React, { useState } from 'react';
import TrainingData from './TrainingData';

const Training = (props) => {
  let initialDate = new Date(props.created_at.replace(/\"/g, "")).toLocaleDateString();

  const [date, setDate] = useState(initialDate);
  const [time, setTime] = useState(props.time);
  const [puzzles, setPuzzles] = useState(props.puzzles);
  const [comments, setComments] = useState(props.comments);

  return(
    <tr>
      <th scope="row">{props.id}</th>
      <TrainingData type="date" defaultValue={date.toString()}/>
      <TrainingData type="number" defaultValue={time}/>
      <TrainingData type="number" defaultValue={puzzles}/>
      <TrainingData type="text" defaultValue={comments}/>
    </tr>
  )
};

export default Training;
