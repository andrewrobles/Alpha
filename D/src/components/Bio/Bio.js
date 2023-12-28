import React from "react";
import drew from "../../drew.jpg";
import Link from "@mui/material/Link";
import TikTok from './links/TikTok'
import PsalmsApp from "./links/PsalmsApp";
import Instagram from "./links/Instagram";
import "./Bio.css";

const Bio = () => {
  return (
    <div id="bio-container">
      <div class="Bio">
        <img src={drew} width={200} />
        <p>
          I'm a Software Consultant who enjoys making programming videos on{" "}
          <TikTok/>{" "}
          and building a bible app called{" "}
          <PsalmsApp/>
        </p>
        <p>Follow Me Online Here:</p>
        <ul>
          <li>
           <TikTok/> 
          </li>
          <li>
            <Link
              href="https://github.com/andrewrobles"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
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
