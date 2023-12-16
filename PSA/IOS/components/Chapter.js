import { useEffect, useState } from "react";
import { Text } from "react-native";
import api from "../api/index";

export default function Chapter() {
  const [text, setText] = useState("");
  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    try {
      const content = await api.useChapter(1);
      setText(content);
    } catch (error) {
      console.log(error);
    }
  };
  return <Text>{text}</Text>;
}
