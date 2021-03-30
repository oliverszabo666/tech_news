import React from "react";
import { Link } from "react-router-dom";

import {
  RiInstagramFill,
  RiFacebookBoxFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import Highlighted from "../Highlighted/Highlighted";
import Newsletter from "../Newsletter/Newsletter";
import Title from "../Title/Title";

const Welcome = () => {
  localStorage.setItem("welcome", "false");
  return (
    <div className="landing">
      <Title />

      <Highlighted />
      <Newsletter />

      <div className="proceed">
        <Link to="/">
          <p className="see-more">proceed</p>
        </Link>
        <h2>to see the news feed</h2>
      </div>

      <div>
        <footer>
          <h2>contact us.</h2>
          <ul>
            <li>
              <RiInstagramFill />
            </li>
            <li>
              <RiFacebookBoxFill />
            </li>
            <li>
              <MdEmail />
            </li>
            <li>
              <RiYoutubeFill />
            </li>
            <li>
              <AiFillPhone /> 06 1 666 6666
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Welcome;
