import React, { useState } from "react";
import "../Css/Mint.css"

function Mint() {

  const [id, setId] = useState("");

 
  const [owner, setOwner] = useState("");

 
  const [status, setStatus] = useState("");

 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(id, owner);
    setStatus("Minting in progress...");
    setTimeout(() => {
      setStatus("Minting completed!");
    }, 3000);
  };

  return (
    <div className="mint-section">
      <div className="mint-card">
        <h1 className="mint-title">Mint your NFT</h1>
        <form className="mint-form" onSubmit={handleSubmit}>
          <div className="mint-form-group">
            <label className="mint-form-label" htmlFor="id">
              Content ID (IPFS)
            </label>
            <input
              className="mint-form-input"
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div className="mint-form-group">
            <label className="mint-form-label" htmlFor="owner">
              Owner Address
            </label>
            <input
              className="mint-form-input"
              type="text"
              id="owner"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              required
            />
          </div>
          <button className="mint-form-button" type="submit">
            Mint NFT
          </button>
        </form>
        <p className="mint-status">{status}</p>
      </div>
    </div>
  );
}

export default Mint;
