import { useEffect, useState } from "react";
import Link from "../components/Link";
import api from "../api/index";

const Chapter = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const content = await api.useChapter(1);
      setText(content);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Link href="/" />
      <div>{text}</div>
    </div>
  );
};

export default Chapter;
