import { useState } from "react";
import { CiHeart, CiEdit, CiGlobe, CiMail, CiPhone } from "react-icons/ci";
import { FaHeart} from "react-icons/fa6"
import { MdDelete } from "react-icons/md";
import EditModal from "./EditModal";

const Card = ({ imageUrl, title, email,phoneNumber, link, onDelete, id, onSave }) => {
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
        <h2 className="cardHeader">{title}</h2>
        <div className="cardBodyItems" style={{ display: "flex", alignItems: "center" }}>
          <CiMail className="cardIcons" style={{ color: "rgba(0,0,0,.65)" }} />
          <p style={{ margin: "0", marginLeft: "0.5em" }}>{email}</p>
        </div>

        <div className="cardBodyItems" style={{ display: "flex", alignItems: "center" }}>
          <CiPhone className="cardIcons" style={{ color: "rgba(0,0,0,.65)" }} />
          <p style={{ margin: "0", marginLeft: "0.5em" }}>{phoneNumber}</p>
        </div>

        <div className="cardBodyItems" style={{ display: "flex", alignItems: "center" }}>
          <CiGlobe className="cardIcons" style={{ color: "rgba(0,0,0,.65)" }} />
          <p style={{ margin: "0", marginLeft: "0.5em" }}>{link}</p>
        </div>

      </div>
      <div className="card-actions">
      {liked ? (
          <FaHeart
            onClick={handleLike}
            className="icon heart-icon border-icon"
            style={{ color: "red", outline: "red" }}
          />
        ) : (
          <CiHeart
            onClick={handleLike}
            className="icon heart-icon border-icon"
            style={{ color: "red" }}
          />
        )}

          <CiEdit onClick={handleWrite} className="icon otherIcon border-icon" />
          <MdDelete onClick={handleDelete} className="icon otherIcon" />
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
