import { useState } from "react";
import CardList from "./CardList";
import Modal from "./Modal";
import { mockData } from "../mocks/cardData";
import { Add2Icon } from "../assets/Icons";
import { uniqueId } from "lodash";

const ListContainer = () => {
  const [cards, setCards] = useState(mockData);
  const [editingCard, setEditingCard] = useState<null | {
    id?: number | string;
    title: string;
    subTitle: string;
  }>(null);
  const [isCreate, setIsCreate] = useState(false);

  const handleCreateClick = () => {
    setEditingCard({ title: "", subTitle: "" });
    setIsCreate(true);
  };

  const handleSave = (title: string, subTitle: string) => {
    if (isCreate) {
      const newCard = {
        id: uniqueId("card_"),
        title,
        subTitle,
        created_at: new Date().toISOString().split("T")[0],
      };
      setCards([...cards, newCard]);
      setIsCreate(false);
    } else if (editingCard?.id) {
      setCards((prev) =>
        prev.map((c) =>
          c.id === editingCard.id ? { ...c, title, subTitle } : c
        )
      );
    }
    setEditingCard(null);
  };

  const handleClose = () => {
    setEditingCard(null);
    setIsCreate(false);
  };

  const handleEditCard = (card: (typeof cards)[0]) => {
    setEditingCard(card);
    setIsCreate(false);
  };

  const handleDelete = (id: number | string) => {
    setCards(cards.filter((c) => c.id !== id));
  };

  return (
    <div>
      <div className="flex justify-end p-10">
        <button
          onClick={handleCreateClick}
          className="bg-[#244FD4] cursor-pointer w-[150px] p-3 flex justify-between items-center h-[50px] rounded-[30px] text-white"
        >
          Create Card
          <Add2Icon />
        </button>
      </div>

      <CardList cards={cards} onEdit={handleEditCard} onDelete={handleDelete} />

      {editingCard && (
        <Modal
          isOpen={!!editingCard}
          title={editingCard.title}
          subTitle={editingCard.subTitle}
          onClose={handleClose}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default ListContainer;
