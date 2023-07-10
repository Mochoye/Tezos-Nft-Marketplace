// import React, { useState, useEffect } from "react";
// import { NFTCard } from "./NFTCard"; 
// import { fetchOwnedNFTs, fetchAuctionedNFTs } from "./api";
// import '../Css/Profile.css';

// export const ProfilePage = () => {

//   const [ownedNFTs, setOwnedNFTs] = useState([]);
//   const [auctionedNFTs, setAuctionedNFTs] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const ownedData = await fetchOwnedNFTs();
        
//         setOwnedNFTs(ownedData);
//         const auctionedData = await fetchAuctionedNFTs();
        
//         setAuctionedNFTs(auctionedData);
//       } catch (error) {
//         console.error(error);
//         alert("Something went wrong!");
//       }
//     };
  
//     fetchData();
//   }, []);

//   return (
//     <div className="profile-page">
//       <h1>Profile</h1>
//       <div className="profile-page-content">
//         <div className="profile-page-left">
//           <h2>Owned</h2>
//           <div className="nft-grid">
//             {ownedNFTs.map((nft) => (
//               <NFTCard key={nft.id} nft={nft} />
//             ))}
//           </div>
//         </div>
//         <div className="profile-page-right">
//           <h2>On Auction</h2>
//           <div className="nft-grid">
//             {auctionedNFTs.map((nft) => (
//               <NFTCard key={nft.id} nft={nft} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;