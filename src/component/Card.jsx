import { useState } from "react";
import { CiHeart, CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import EditModal from "./EditModal";

const Card = ({ imageUrl, title, email, link, onDelete, id }) => {
  const [liked, setLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleWrite = () => {
    setShowModal(true);
  };

  const handleDelete = () => {
    onDelete(id); // Call onDelete with the id of the card to be deleted
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveModal = ({ name, email, website }) => {
    console.log("Saving edited details:", { name, email, website });
    handleCloseModal();
  };

  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-details">
        <h2>{title}</h2>
        <p>{email}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Link
        </a>
        <div className="card-actions">
          <CiHeart
            onClick={handleLike}
            className="icon"
            style={{ color: liked ? "red" : "inherit" }}
          />{" "}
          <CiEdit onClick={handleWrite} className="icon" />
          <MdDelete onClick={handleDelete} className="icon" />
        </div>

        {showModal && (
          <EditModal
            defaultName={title}
            defaultEmail={email}
            defaultWebsite={link}
            onSave={handleSaveModal}
            onCancel={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
