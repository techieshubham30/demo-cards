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
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    website: "",
  });
  const handleSave = () => {
    const newErrors = {};
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = "This field is required";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "This field is required";
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "This field is required";
      isValid = false;
    }

    if (!website.trim()) {
      newErrors.website = "This field is required";
      isValid = false;
    }

    if (isValid) {
      onSave({ name, email, phoneNumber, website });
    } else {
      setErrors(newErrors);
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  const handleInputChange = (field, value) => {
    if (errors[field] !== "") {
      setErrors({ ...errors, [field]: "" });
    }

    switch (field) {
      case "name":
        setName(value);
        if (!value.trim()) {
          setErrors({ ...errors, name: "This field is required" });
        }
        break;
      case "email":
        setEmail(value);
        if (value.trim() && !validateEmail(value)) {
          setErrors({ ...errors, email: "Invalid email format" });
        }
        if (!value.trim()) {
          setErrors({ ...errors, email: "This field is required" });
        }
        break;
      case "phoneNumber":
        setPhone(value);
        if (!value.trim()) {
          setErrors({ ...errors, phoneNumber: "This field is required" });
        }

        break;
      case "website":
        setWebsite(value);
        if (!value.trim()) {
          setErrors({ ...errors, website: "This field is required" });
        }

        break;
      default:
        break;
    }
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="modalMask">
    <div className="modal">
      <div className="modal-header">
      <h2 className="modalTitle">Basic Modal</h2>
      </div>
      <hr  />
      <div className="modal-content">
        <span className="close" onClick={handleCancel}>
          &times;
        </span>
        
        <div className="form-group" style={{ display: "flex", alignItems: "flex-start", marginBottom: errors.name ? "2px" : "24px" }}>
        <div className="modalFields">
          <span className="required">*</span>
          <label className="modalLabel">Name:</label>
        </div>
        <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
          <input
            type="text"
            value={name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            style={{
              borderColor: errors.name && "#f5222d",
            }}
          />
          {errors.name && (
            <p className="error-message" style={{ color: "#f5222d" }}>
              {errors.name}
            </p>
          )}
        </div>
      </div>

      <div className="form-group" style={{ display: "flex", alignItems: "flex-start", marginBottom: errors.email ? "2px" : "24px" }}>
        <div className="modalFields">
          <label className="modalLabel">
            <span className="required">*</span>Email:
          </label>
        </div>
        <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
          <input
            type="email"
            value={email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            style={{
              borderColor: errors.email ? "#f5222d" : "",
            }}
          />
          {errors.email && (
            <p className="error-message" style={{ color: "#f5222d" }}>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="form-group" style={{ display: "flex", alignItems: "flex-start", marginBottom: errors.phoneNumber ? "2px" : "24px" }}>
        <div className="modalFields">
          <span className="required">*</span>
          <label className="modalLabel">Phone:</label>
        </div>
        <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
          />
          {errors.phoneNumber && (
            <p className="error-message" style={{ color: "#f5222d" }}>{errors.phoneNumber}</p>
          )}
        </div>
      </div>

        <div className="form-group" style={{ display: "flex", alignItems: "flex-start", marginBottom: errors.website ? "2px" : "24px" }}>
        <div className="modalFields">
          <span className="required">*</span>
          <label className="modalLabel">Website:</label>
        </div>
        <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
          <input
            type="text"
            value={website}
            onChange={(e) => handleInputChange("website", e.target.value)}
            style={{
              borderColor: errors.website && "#f5222d",
            }}
          />
          {errors.website && (
            <p className="error-message" style={{ color: "#f5222d" }}>
              {errors.website}
            </p>
          )}
        </div>
      </div>


      </div>
      <hr />
      <div className="button-container">
          <button className="cancel-button modal-button" onClick={handleCancel}>
            Cancel
          </button>
          <button className="save-button modal-button" onClick={handleSave}>
            OK
          </button>
        </div>
    </div>
    </div>
  );
};

export default EditModal;
