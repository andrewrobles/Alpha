import { useEffect, useState } from "react";
import api from '../api/index'

const Chapter = () => {
  const [text, setText] = useState('')
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const content = await api.usePsalm(1)
      setText(content);
    } catch (error) {
      console.error(error);
    }
  };
  return <div>{text}</div>;
};

export default Chapter;
