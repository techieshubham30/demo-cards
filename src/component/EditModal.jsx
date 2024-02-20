import React, { useState } from "react";

const EditModal = ({
  defaultName,
  defaultEmail,
  defaultPhone,
  defaultWebsite,
  onSave,
  onCancel,
}) => {
  const [name, setName] = useState(defaultName);
  const [email, setEmail] = useState(defaultEmail);
  const [phoneNumber, setPhone] = useState(defaultPhone);
  const [website, setWebsite] = useState(defaultWebsite);

  const handleSave = () => {
    onSave({ name, email, phoneNumber, website });
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleCancel}>
          &times;
        </span>
        <h2>Basic Modal</h2>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Website:</label>
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <button className="secondary-button" onClick={handleCancel}>
          Cancel
        </button>
        <button className="primary-button" onClick={handleSave}>
          OK
        </button>
      </div>
    </div>
  );
};

export default EditModal;
