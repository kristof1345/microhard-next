import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import Link from "next/link";

export default function Slider() {
  let activeIndex = 0;

  const handleLeftClick = () => {
    const slides = document.getElementsByClassName("slide");
    const nextIndex =
      activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

    const currentSlide = document.querySelector(
        `[data-index="${activeIndex}"]`
      ),
      nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = "after";

    nextSlide.dataset.status = "becoming-active-from-before";
    paintDot(nextIndex);

    setTimeout(() => {
      nextSlide.dataset.status = "active";
      activeIndex = nextIndex;
    });
  };

  const handleRightClick = () => {
    const slides = document.getElementsByClassName("slide");
    const nextIndex =
      activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

    const currentSlide = document.querySelector(
        `[data-index="${activeIndex}"]`
      ),
      nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = "before";

    paintDot(nextIndex);

    nextSlide.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
      nextSlide.dataset.status = "active";
      activeIndex = nextIndex;
    });
  };

  const paintDot = (nextIndex) => {
    const dots = document.getElementsByClassName("dot");
    [...dots].map((dot) => {
      dot.style.backgroundColor = "transparent";
    });
    dots[nextIndex].style.backgroundColor = "rgb(57, 57, 57)";
  };
  return (
    <div>
      <div className="image-slider">
        <div id="slide1" className="slide" data-index="0" data-status="active">
          <div className="content-s1">
            <h1 className="slide-title">Microhard 365</h1>
            <p className="slide-p">
              Turn your ideas into reality, stay safer online and off, and focus
              on what matters most with Microsoft 365 apps
            </p>
            <Link href="#" className="s-btn btn">
              Choose your Microhard 365
            </Link>
          </div>
        </div>
        <div
          id="slide2"
          className="slide"
          data-index="1"
          data-status="inactive"
        >
          <div className="content-s2">
            <h1 className="slide-title">Microhard 365</h1>
            <p className="slide-p">
              Turn your ideas into reality, stay safer online and off, and focus
              on what matters most with Microsoft 365 apps
            </p>
            <Link href="#" className="s-btn btn">
              Choose your Microhard 365
            </Link>
          </div>
        </div>
      </div>
      <div className="dot-container">
        <button className="prev" onClick={handleLeftClick}>
          <BsChevronLeft />
        </button>
        <button
          className="dot"
          style={{ backgroundColor: "rgb(57, 57, 57)" }}
        ></button>
        <button className="dot"></button>
        <button className="next" onClick={handleRightClick}>
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
}
