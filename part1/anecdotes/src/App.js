import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);

  const handleClick = () => {
    // select next anecdote randomly by index
    let random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  };

  const handleVotes = () => {
    // update votes for each anecdote
    let votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };

  const winner = () => {
    // track which anecdote has the most votes
    let maxVotes = 0;
    let leader;
    votes.forEach((value, index) => {
      if (value > maxVotes) {
        maxVotes = value;
        leader = index;
      }
    });
    return leader;
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <q>{anecdotes[selected]}</q>
      <p>has {votes[selected]} votes.</p>
      <button onClick={handleVotes}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      {winner() === undefined && <p>No votes received</p>}
      { winner() !== undefined && 
      <><q>{anecdotes[winner()]}</q>
      <p>has {votes[winner()]} votes.</p></>
      }
    </div>
  );
};

export default App;
