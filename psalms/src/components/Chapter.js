import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";
import api from "../api/index";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

const Chapter = (props) => {
  const [text, setText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const content = await api.useChapter(props.index);
      setText(content);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div style={{ padding: "0px 10px" }}>
        <Link href="/">{`Psalm ${props.index}`}</Link>
      </div>
     
      <Div>{text}</Div>
    </div>
  );
};

export default Chapter;
