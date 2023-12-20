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
          <li>Drew can post about Q&A/event on TikTok</li>
          <li>Drew can livestream the Q&A on Instagram</li>
        </ul>
        <li>Speaking fee:</li>
        <ul>
          <li>$2,000 for online</li>
          <li>$6,000 for in person + travel expenses</li>
        </ul>
        <li>Get in touch: andrewrobles+speaking@berkeley.edu</li>
      </ul>
    </div>
  );
};

export default Speaking;
