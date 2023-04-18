import React from "react";
import Windows from "../../../public/windows.webp";
import Shop from "../../../public/shop.webp";
import BShop from "../../../public/shop-business.webp";

const Index_main = () => {
  return (
    <div>
      <div className="shop-sec">
        <div className="item-1">
          <img src={Windows.src} alt="windows logo" />
          <div>Windows 11</div>
        </div>
        <div className="item-2">
          <img src={Shop.src} alt="shop" />
          <div>Shop</div>
        </div>
        <div className="item-3">
          <img src={BShop.src} alt="business shop" />
          <div>Business Shop</div>
        </div>
      </div>
    </div>
  );
};

export default Index_main;
