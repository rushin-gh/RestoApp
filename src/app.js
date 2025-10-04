import React from "react";
import ReactDOM from "react-dom/client";
import SwiggyLogo from "./Data/Images/SwiggyLogo.png";

const Header = () => {
  const SwiggyLogoPath = new URL(
    "./Data/Images/SwiggyLogo.png",
    import.meta.url
  ).href;

  return (
    <div id="header">
      <div id="brandIdentifier">
        <img id="brandLogo" src={SwiggyLogoPath} alt="compLogo" />
        <div id="brandName">Swiggy</div>
      </div>
      <div id="othLinks">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div id="body">
      <div id="searchBar">
        <input type="text" />
        <button>Submit</button>
      </div>
      <div id="res-cards-container">
        <div id="res-card">
          <img
            id="res-card-img"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/683d0e4d-f314-46ea-8b2e-d416aeae9031_415842.jpg"
          />
          <h2 id="res-name">Subway</h2>
          <h3 id="res-rate-est">
            <span>4.3* </span>
            <span> 35 Min</span>
          </h3>
          <h4 id="res-cuisine">Sandwich, Salads, wrap</h4>
          <h4>Airoli</h4>
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div id="appLayout">
      <Header />
      <Body />
    </div>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<AppLayout />);
