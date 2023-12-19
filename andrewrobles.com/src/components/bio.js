/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";

const Bio = () => {
  return (
    <div>
      <p>
        I'm a Software Consultant who enjoys making programming videos on{" "}
        <a
          href="https://youtube.com/c/benawad97"
          target="_blank"
          rel="noopener noreferrer"
        >
         TikTok 
        </a>{" "}
        and building a bible app called{" "}
        <a
          href="https://www.mysaffronapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
         Psalms 
        </a>
        . My favorite technologies right now are: React, Django, and Arduino.
      </p>
      <p>Follow Me Online Here:</p>
      <ul>
        <li>
          <a
            href="https://threads.net/andrewrobles_"
            target="_blank"
            rel="noopener noreferrer"
          >
            Threads
          </a>
        </li>
        <li>
          <a
            href="https://github.com/andrewrobles"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://discord.gg/mMHKGagE3h"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
        </li>
      </ul>
      <p>
        <div>Interested in having me speak at an event?</div>
      </p>
    </div>
  );
};

export default Bio;
