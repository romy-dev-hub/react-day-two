import { useState } from 'react';
import './App.css';
import logo from './logo.svg'; 

function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return(
    <div className={`card ${isFlipped ? 'flipped' : ''}`}>
      <div className="card-inner">
        <div className="card-front">
          <img src={logo} className="react-logo" alt="React Logo" />
          <p>{props.frontMessage}</p>
          <button onClick={handleFlip}>Click Me</button>
        </div>
        <div className="card-back">
          <img src={logo} className="react-logo" alt="React Logo" />
          <h3>Congrats, {props.name}!</h3>
          <p>{props.backMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;