import Card from "./Card";

type TCardListProps = {
  cards: typeof import("../mocks/cardData").mockData;
  onEdit: (card: typeof import("../mocks/cardData").mockData[0]) => void;
  onDelete: (id: number | string) => void;
};

const CardList = ({ cards, onEdit, onDelete }: TCardListProps) => {
  return (
    <div className="gap-4 m-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          subTitle={card.subTitle}
          created_at={card.created_at}
          onEdit={() => onEdit(card)}
          onDelete={() => onDelete(card.id)}
        />
      ))}
    </div>
  );
};

export default CardList;
