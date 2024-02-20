import { useState } from "react";

import mockData from "./utils/config";
import Card from "./component/Card";

function App() {
  const [cards, setCards] = useState(mockData);

  const handleDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const handleSaveModal = (id, { name, email, phoneNumber, website }) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, title: name, email, phoneNumber, link: website };
      }
      return card;
    });
    setCards(updatedCards);
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
            phoneNumber={card.phoneNumber}
            link={card.link}
            onDelete={handleDelete}
            onSave={handleSaveModal}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
