import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./assets/file.jpg")}
        style={styles.imagelayout}
      >
        <View style={styles.first}>
          <Text style={styles.text}>Welcome to signfiy!</Text>
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  first: {
    alignItems: "center",
    justifyContent: "center",
  },
  imagelayout: {
    flex: 1,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    paddingTop: 15,
  },
});
