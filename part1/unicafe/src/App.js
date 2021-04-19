import React, { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = (props) => {
  if (props.statistics === 0 || isNaN(props.statistics)) {
    return <p>No feedback given</p>;
  }
  return (
    <p>
      {props.text} {props.statistics}
      {props.append}
    </p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const average = () => (good - bad) / (good + bad + neutral);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h2>Statistics</h2>
      <div>
        <Statistics text="Good" statistics={good} />
        <Statistics text="Neutral" statistics={neutral} />
        <Statistics text="Bad" statistics={bad} />
        <Statistics text="Reviews" statistics={bad + neutral + good} />
        <Statistics text="Average" statistics={average()} />
        <Statistics
          text="Positive"
          statistics={(good / (good + bad + neutral)) * 100}
          append="%"
        />
      </div>
    </div>
  );
};

export default App;
