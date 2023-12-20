import { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import PsalmList from "./components/PsalmList.js";
import PsalmDetail from "./components/PsalmDetail.js";

const views = {
  // name: id
  index: 0,
  psalm: 1,
};

const App = () => {
  const [view, setView] = useState(0);
  const onPress = (psalm) => {
    setView(psalm);
  };
  const onPressHomeButton = () => {
    setView(views.index);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text>
          {view === 0 ? (
            <PsalmList onPress={onPress} />
          ) : (
            <PsalmDetail onPress={onPressHomeButton} psalm={view} />
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
