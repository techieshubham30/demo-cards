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
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleCancel}>
          &times;
        </span>
        <h2>Basic Modal</h2>
        <div className="form-group">
          <span className="required">*</span>
          <label>Name:</label>
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
        <div className="form-group">
          <label>
            <span className="required">*</span>Email:
          </label>
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
        <div className="form-group">
          <span className="required">*</span>
          <label>Phone:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
          />
          {errors.phoneNumber && (
            <p className="error-message">{errors.phoneNumber}</p>
          )}{" "}
        </div>
        <div className="form-group">
          <span className="required">*</span>
          <label>Website:</label>
          <input
            type="text"
            value={website}
            onChange={(e) => handleInputChange("website", e.target.value)}
            style={{
              borderColor: errors.phoneNumber && "#f5222d",
            }}
          />
          {errors.website && (
            <p className="error-message" style={{ color: "#f5222d" }}>
              {errors.website}
            </p>
          )}
        </div>
        <div className="button-container">
          <button className="secondary-button" onClick={handleCancel}>
            Cancel
          </button>
          <button className="primary-button" onClick={handleSave}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
