import { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import PsalmList from "./components/PsalmList.js";
import Chapter from "./components/Chapter.js";

const views = {
  // name: id
  index: 0,
  psalm: 1,
};

const App = () => {
  const [view, setView] = useState(0);
  const onPress = () => {
    setView(views.psalm);
  };
  const onPressHomeButton = () => {
    setView(views.index);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          {view === 0 ? (
            <PsalmList onPress={onPress} />
          ) : (
            <Chapter onPress={onPressHomeButton} psalm={views.psalm} />
          )}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});

export default App;
