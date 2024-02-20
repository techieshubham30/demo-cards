import { useState } from "react";
import { CiHeart, CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import EditModal from "./EditModal";

const Card = ({ imageUrl, title, email, phoneNumber, link, onDelete, id, onSave }) => {
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

  const handleSaveModal = ({ name, email, phoneNumber, website }) => {
    onSave(id, { name, email, phoneNumber, website });
    handleCloseModal();
  };

  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-details">
        <h2>{title}</h2>
        <p>{email}</p>
        <p>{phoneNumber}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Link
        </a>
      </div>
      <div className="card-actions">
          <CiHeart
            onClick={handleLike}
            className="icon border-icon"
            style={{ color: liked ? "red" : "inherit" }}
          />{" "}
          <CiEdit onClick={handleWrite} className="icon border-icon" />
          <MdDelete onClick={handleDelete} className="icon" />
        </div>

        {showModal && (
          <EditModal
            defaultName={title}
            defaultEmail={email}
            defaultPhone = {phoneNumber}
            defaultWebsite={link}
            onSave={handleSaveModal}
            onCancel={handleCloseModal}
          />
        )}
    </div>
  );
};

export default Card;
