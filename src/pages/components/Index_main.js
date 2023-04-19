import React from "react";
import Windows from "../../../public/windows.webp";
import Shop from "../../../public/shop.webp";
import BShop from "../../../public/shop-business.webp";
import { Posts1 } from "../data/posts1";
import edge from "../../../public/edge.avif";

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
          <div>Shop here</div>
        </div>
        <div className="item-3">
          <img src={BShop.src} alt="business shop" />
          <div>Business Shop</div>
        </div>
      </div>
      <div className="posts-sec">
        {Posts1.map((post, i) => (
          <div className="post" key={i}>
            <img src={edge.src} alt="post image" />
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <div>
              <button>Shop Now</button>
              <div>Shop Now</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bing-sec">
        <div>
          <h3>Introducing the new Bing</h3>
          <p>
            Your AI-powered copilot for the web. Ask questions. Chat to refine
            results. Get comprehensive answers and creative inspiration.
          </p>
          <button>Join the preview</button>
        </div>
      </div>
    </div>
  );
};

export default Index_main;
