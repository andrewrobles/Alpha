import Link from "@mui/material/Link";

const A = (props) => {
  return (
    <Link
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </Link>
  );
};

export default A;
