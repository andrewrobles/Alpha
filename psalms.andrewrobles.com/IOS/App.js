import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Chapter from "./components/Chapter.js";

export default function App() {
  const arrayOfIndexes = [...Array(150).keys()];
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Chapter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
