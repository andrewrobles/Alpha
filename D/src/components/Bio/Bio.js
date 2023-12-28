import React from "react";
import drew from "../../drew.jpg";
import Link from "@mui/material/Link";
import TikTok from './links/TikTok'
import Psalms from "./links/Psalms";
import Instagram from "./links/Instagram";
import YouTube from './links/YouTube';
import "./Bio.css";

const Bio = () => {
  return (
    <div id="bio-container">
      <div class="Bio">
        <img src={drew} width={200} />
        <p>
          Hello, world! My name is Drew the Engineer. I enjoy making programming videos on{" "}
          <TikTok/>{" "}
          and building a bible app called{" "}
          <Psalms/>
        </p>
        <p>Follow Me Online Here:</p>
        <ul>
          <li>
           <TikTok/> 
          </li>
          <li>
            <YouTube/>
          </li>
          <li>
            <Instagram/>
          </li>
        </ul>
        <br/>
      </div>
    </div>
  );
};

export default Bio;
