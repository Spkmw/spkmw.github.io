import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

const greetings = ["Hi", "Hey", "Yo "];

function App() {
  return <div>
    <Greet message="Hello" />
  </div>;
}

/** This is a component :O */
function Greet({ message }) {
  return (
    <p>{message}</p>
  );
}

function displayForm() {
  return (
    <>
      <p>How many sets?</p>
      <input type="text"></input>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
