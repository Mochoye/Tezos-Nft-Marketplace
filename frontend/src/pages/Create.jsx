import React, { useState } from "react";
import "../Css/Create.css";


function Create() {
  
  const [name, setName] = useState("");

  
  const [description, setDescription] = useState("");

  
  const [image, setImage] = useState(null);

  const [price, setPrice] = useState(0);

  
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(name, description, image, price);
    alert("NFT created successfully!");
  };

  return (
    <div className="create-section">
      <h1 className="create-title">Create your own NFT</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <div className="create-form-group">
          <label className="create-form-label" htmlFor="name">
            Name
          </label>
          <input
            className="create-form-input"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="create-form-group">
          <label className="create-form-label" htmlFor="description">
            Description
          </label>
          <textarea
            className="create-form-input"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="create-form-group">
          <label className="create-form-label" htmlFor="image">
            Image
          </label>
          <input
            className="create-form-input"
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="create-form-group">
          <label className="create-form-label" htmlFor="price">
            Price (in XTZ)
          </label>
          <input
            className="create-form-input"
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min={0}
            step={0.01}
            required
          />
        </div>
        <button className="create-form-button" type="submit">
          Create NFT
        </button>
      </form>
      
    </div>
    
  );
}

export default Create;
