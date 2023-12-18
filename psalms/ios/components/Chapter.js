import { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import api from "../api/index";

export default function Chapter(props) {
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
  return (
    <View>
      <Button title={"Psalm " + props.psalm} onPress={props.onPress} />
      <Text>{text}</Text>
    </View>
  );
}
