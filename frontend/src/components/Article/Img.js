import { useState, useEffect, useRef } from "react";

const LOADING_OFFSET = 300; //px

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    (rect.top >= 0 - LOADING_OFFSET &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) +
          LOADING_OFFSET) ||
    (rect.bottom >= 0 - LOADING_OFFSET &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) +
          LOADING_OFFSET)
  );
}

const Img = (props) => {
  const [src, setSrc] = useState("");

  const div = useRef(null);

  const scrolling = () => {
    if (isInViewport(div.current) && src === "") {
      console.log(props.src);
      setSrc(props.src);
    }
  };

  useEffect(() => {
    scrolling();
    window.addEventListener("scroll", scrolling);
    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  }, [src]);

  return (
    <div className="img" ref={div}>
      <img src={src} alt={props.alt} />
    </div>
  );
};

export default Img;
