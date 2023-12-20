import { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import api from "../api/index";

const PsalmDetail = (props) => {
  const [text, setText] = useState("");
  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    try {
      const content = await api.useChapter(props.psalm);
      setText(content);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <View style={{ marginRight: 'auto'}}>
        <Button title={"Psalm " + props.psalm} onPress={props.onPress} />
      </View>
      <Text>{text}</Text>
    </View>
  );
}

export default PsalmDetail
