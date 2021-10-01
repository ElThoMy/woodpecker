import React from 'react';
import Training from './Training';

const Trainings = ({ trainings }) => {

  return (
    <div className="trainings-grid">
      {!trainings.length ? (
        <h2>No trainings yet, time to start working out =]</h2>
      ) : (

          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Training ID</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Puzzles</th>
                <th scope="col">Comments</th>
              </tr>
            </thead>
            <tbody>
              {trainings.map((training) => (
                <Training
                  key={training.id}
                  id={training.id}
                  date={training.date}
                  time={training.time}
                  puzzles={training.puzzles}
                  comments={training.comments}
                  created_at={training.created_at}
                />
              ))}
            </tbody>
          </table>
      )}
    </div>
  )
};

export default Trainings;
