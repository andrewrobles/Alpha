import Link from "@mui/material/Link";
import "./Speaking.css";

const Speaking = () => {
  return (
    <div class="Speaking">
      <Link href="/">home</Link>
      <h1>Connect with Drew</h1>
      <ul>
        <li>Call or text: 805-312-6420</li>
        <li>
          Email:{" "}
          <Link
            href="mailto:andrewrobles@berkeley.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            andrewrobles@berkeley.edu
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Speaking;
