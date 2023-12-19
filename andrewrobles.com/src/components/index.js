/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import drew from '../drew.jpg'

const Index = () => {
  return (
    <div>
      <img src={drew} width={175}/>
      <p>
        I'm a Software Consultant who enjoys making programming videos on{" "}
        <a
          href="https://www.youtube.com/@andrew.robles"
          target="_blank"
          rel="noopener noreferrer"
        >
         TikTok 
        </a>{" "}
        and building a bible app called{" "}
        <a
          href="https://psalms.andrewrobles.com/"
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
        <a href="/speaking">Interested in having me speak at an event?</a>
      </p>
    </div>
  );
};

export default Index;
