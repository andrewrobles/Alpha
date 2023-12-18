import { useState } from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import PsalmList from './components/PsalmList.js'
import Chapter from './components/Chapter.js'

const views = {
  // name: id
  index: 1,
  detail: 2,
}

const App = () => {
  const [view, setView] = useState(1)
  const onPress = () => {
    setView(2)
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          { view === 1 ? <PsalmList onPress={onPress}/> : <Chapter/>}
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