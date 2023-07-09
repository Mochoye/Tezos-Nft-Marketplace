import React, { useState } from "react";
import { NFTCard } from "./NFTCard"; // a component to display the NFT card as a demo
import { uploadFile } from "./uploadFile"; // a function to upload the file to IPFS and get the URL
import { mintNFT } from "./mintNFT"; // a function to mint the NFT on the blockchain

export const CreatePage = () => {
  // state variables for the input fields
  const [file, setFile] = useState(null); // the file to be uploaded
  const [price, setPrice] = useState(""); // the price of the NFT in ETH
  const [minBid, setMinBid] = useState(""); // the minimum bid for the NFT in ETH
  const [startDate, setStartDate] = useState(""); // the starting date of the auction
  const [endDate, setEndDate] = useState(""); // the expiration date of the auction
  const [title, setTitle] = useState(""); // the title of the NFT
  const [description, setDescription] = useState(""); // the description of the NFT

  // state variable for the preview URL
  const [previewURL, setPreviewURL] = useState("");

  // handler function for file input change
  const handleFileChange = (e) => {
    // get the selected file
    const selectedFile = e.target.files[0];
    // set the file state
    setFile(selectedFile);
    // create a temporary URL for preview
    const tempURL = URL.createObjectURL(selectedFile);
    // set the preview URL state
    setPreviewURL(tempURL);
  };

  // handler function for price input change
  const handlePriceChange = (e) => {
    // get the input value
    const value = e.target.value;
    // validate that it is a positive number
    if (value >= 0) {
      // set the price state
      setPrice(value);
    }
  };

  // handler function for minimum bid input change
  const handleMinBidChange = (e) => {
    // get the input value
    const value = e.target.value;
    // validate that it is a positive number
    if (value >= 0) {
      // set the minimum bid state
      setMinBid(value);
    }
  };

  // handler function for start date input change
  const handleStartDateChange = (e) => {
    // get the input value
    const value = e.target.value;
    // validate that it is a valid date format
    if (Date.parse(value)) {
      // set the start date state
      setStartDate(value);
    }
  };

  // handler function for end date input change
  const handleEndDateChange = (e) => {
    // get the input value
    const value = e.target.value;
    // validate that it is a valid date format and later than start date
    if (Date.parse(value) && Date.parse(value) > Date.parse(startDate)) {
      // set the end date state
      setEndDate(value);
    }
  };

  // handler function for title input change
  const handleTitleChange = (e) => {
    // get the input value
    const value = e.target.value;
    // set the title state
    setTitle(value);
  };

  // handler function for description input change
  const handleDescriptionChange = (e) => {
    // get the input value
    const value = e.target.value;
    // set the description state
    setDescription(value);
  };

  // handler function for create button click
  const handleCreateClick = async () => {
    try {
      // check if all fields are filled
      if (
        file &&
        price &&
        minBid &&
        startDate &&
        endDate &&
        title &&
        description
      ) {
        // upload the file to IPFS and get the URL
        const fileURL = await uploadFile(file);
        console.log("File uploaded to IPFS:", fileURL);
        // mint the NFT on the blockchain and get the token ID and contract address
        const { tokenId, contractAddress } = await mintNFT(
          fileURL,
          price,
          minBid,
          startDate,
          endDate,
          title,
          description
        );
        console.log("NFT minted on blockchain:", tokenId, contractAddress);
        alert("NFT created successfully!");
      } else {
        alert("Please fill all fields!");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="create-page">
      <h1>Create NFT</h1>
      <div className="create-page-content">
        <div className="create-page-left">
          <h2>Preview Item</h2>
          <NFTCard
            imageURL={previewURL}
            title={title}
            description={description}
          />
        </div>
        <div className="create-page-right">
          <h2>Upload File</h2>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <h2>Price</h2>
          <input
            type="number"
            placeholder="Enter price in ETH"
            value={price}
            onChange={handlePriceChange}
          />
          <h2>Minimum Bid</h2>
          <input
            type="number"
            placeholder="Enter minimum bid in ETH"
            value={minBid}
            onChange={handleMinBidChange}
          />
          <h2>Starting Date</h2>
          <input
            type="date"
            placeholder="Enter starting date of auction"
            value={startDate}
            onChange={handleStartDateChange}
          />
          <h2>Expiration Date</h2>
          <input
            type="date"
            placeholder="Enter expiration date of auction"
            value={endDate}
            onChange={handleEndDateChange}
          />
          <h2>Title</h2>
          <input
            type="text"
            placeholder="Enter title of NFT"
            value={title}
            onChange={handleTitleChange}
          />
          <h2>Description</h2>
          <textarea
            placeholder="Enter description of NFT"
            value={description}
            onChange={handleDescriptionChange}
          />
          <button onClick={handleCreateClick}>Create</button>
        </div>
      </div>
    </div>
  );
};
