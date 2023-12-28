import React from "react";
import drew from "../../drew.jpg";
import Link from "@mui/material/Link";
import "./Bio.css";

const Bio = () => {
  return (
    <div id="bio-container">
      <div class="Bio">
        <img src={drew} width={200} />
        <p>
          I'm a Software Consultant who enjoys making programming videos on{" "}
          <Link
            href="https://www.tiktok.com/@andrew.robles"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </Link>{" "}
          and building a bible app called{" "}
          <Link
            href="https://psalmsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Psalms
          </Link>
          . My favorite technologies right now are React and Arduino.
        </p>
        <p>Follow Me Online Here:</p>
        <ul>
          <li>
            <Link
              href="https://www.tiktok.com/@andrew.robles"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </Link>
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
            <Link
              href="https://www.instagram.com/andrewrobles_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bio;
