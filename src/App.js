import { useState } from "react";

import mockData from "./utils/config";
import Card from "./component/Card";

function App() {
  const [cards, setCards] = useState(mockData);

  const handleDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };
  return (
    <div className="App">
      <div className="card-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            imageUrl={card.imageUrl}
            title={card.title}
            email={card.email}
            link={card.link}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
