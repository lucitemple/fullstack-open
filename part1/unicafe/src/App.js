import React, { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>
        {props.value}
        {props.append}
      </td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, average }) => {
  return (
    <table>
      <tbody>
        <Statistic text="Good" value={good} />
        <Statistic text="Neutral" value={neutral} />
        <Statistic text="Bad" value={bad} />
        <Statistic text="Reviews" value={bad + neutral + good} />
        <Statistic text="Average" value={average} />
        <Statistic
          text="Positive"
          value={(good / (good + bad + neutral)) * 100}
          append="%"
        />
      </tbody>
    </table>
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
      {!good && !neutral && !bad && <p>No feedback given</p>}
      {(good || neutral || bad) && (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          average={average()}
        />
      )}
    </div>
  );
};

export default App;
