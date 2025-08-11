import Card from './Card';
import './App.css';

function App() {
  const cards = [
    {
      id: 'card-1',
      name: 'Roro',
      frontMessage: 'Since you made it this far, click the button!',
      backMessage: 'You managed to finish your second day with React successfully!',
      age: 20,
    },
  ];

  return(
    <div className="app-container">
      <div className="card-list">
        {cards.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            frontMessage={card.frontMessage}
            backMessage={card.backMessage}
            age={card.age}
          />
        ))}
      </div>
    </div>
  );
}

export default App;