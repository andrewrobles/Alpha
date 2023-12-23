import { useEffect } from "react";

const Link = (props) => {
  useEffect(() => {
    window.location.replace(props.url);
  }, []);
  return <></>;
};

export default Link;
