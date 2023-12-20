import Link from "@mui/material/Link";
import "./Speaking.css";

const Speaking = () => {
  return (
    <div class="Speaking">
      <Link href="/">home</Link>
      <h1>Hire Drew to speak at your next Event</h1>
      <ul>
        <li>Drew specializes in Q&A style talks by himself or on a panel</li>
        <li>Optional addons:</li>
        <ul>
          <li>
            Drew can post about Q&A/event on{" "}
            <Link
              href="https://www.tiktok.com/@andrew.robles"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </Link>
          </li>
          <li>
            Drew can livestream the Q&A on{" "}
            <Link
              href="https://www.instagram.com/andrewrobles_"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
          </li>
        </ul>
        <li>Speaking fee:</li>
        <ul>
          <li>$200 for online</li>
          <li>$600 for in person + travel expenses</li>
        </ul>
        <li>
          Get in touch:{" "}
          <Link
            href="mailto:andrewrobles+speaking@berkeley.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            andrewrobles+speaking@berkeley.edu
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Speaking;
