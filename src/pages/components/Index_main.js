import React from "react";
import Windows from "../../../public/windows.webp";
import Shop from "../../../public/shop.webp";
import BShop from "../../../public/shop-business.webp";
import { Posts1 } from "../data/posts1";
import edge from "../../../public/edge.avif";
import Link from "next/link";

export default function Index_main() {
  return (
    <div>
      <div className="shop-sec">
        <Link href="#" className="item-1">
          <img src={Windows.src} alt="windows logo" />
          <div>Windows 11</div>
        </Link>
        <Link href="#" className="item-2">
          <img src={Shop.src} alt="shop" />
          <div>Shop here</div>
        </Link>
        <Link href="#" className="item-3">
          <img src={BShop.src} alt="business shop" />
          <div>Business Shop</div>
        </Link>
      </div>
      <div className="posts-sec">
        {Posts1.map((post, i) => (
          <div className="post" key={i}>
            <img src={edge.src} alt="post image" />
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <div>
              <Link href="#">Shop Now</Link>
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
          <Link href="/bing" className="btn">
            Join the preview
          </Link>
        </div>
      </div>
      <div className="posts-sec">
        <h1 className="for-business">For Business</h1>
        {Posts1.map((post, i) => (
          <div className="post" key={i}>
            <img src={edge.src} alt="post image" />
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <div>
              <Link href="/edge">Shop Now</Link>
              <div>Shop Now</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bing-sec" id="second">
        <div>
          <h3>Making climate change threats visible</h3>
          <p>
            Discover how SEEDS is using Microsoft AI to help India's most
            vulnerable communities survive, adapt, and thrive when impacted by
            the disastrous results of climate change.
          </p>
          <Link href="/seeds" className="btn">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}
