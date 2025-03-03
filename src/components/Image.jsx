import React, { useState } from "react";
// import icon from './icon.png'
import user from "./user.png";
function Image() {
  const [modal, setModal] = useState(false);
  const openModel = () => {
    setModal(true);
  };
  const [image, setImage] = useState(null);
  const handleFileChange = (event) => {
    const files = event.target.files[0];
    setImage(files);
  };

  return (
    <div className="center-container">
      <button onClick={openModel} className="openbtn">
        Create user
      </button>

      {modal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <h2>Create user</h2>
            <form className="modal-form">
              <div className="input-container">
                <label htmlFor="file-input">
                  <img
                    src={image ? URL.createObjectURL(image) : user}
                    alt="logo"
                    className="image-preview"   
                  />
                </label>

                <input
                  type="file"
                  id="file-input"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </div>
              {/* <div>
                {image && (
                    <img src={URL.createObjectURL(image)} alt='selected' width="50" height="50" />
                )}
            </div> */}
              <div className="horizontal">
                <div className="form-group">
                  <label>First Name:</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label>Last Name:</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input type="email" className="form-input" />
                </div>
                <div className="form-group">
                  <label>Phone:</label>
                  <input type="tel" className="form-input" />
                </div>
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Image;
