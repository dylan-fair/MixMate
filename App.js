import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./src/common/theme";
import Navigation from "./src/navigation";

export default function App() {
  console.log(theme.colors.primary)
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Navigation/>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "000000",
  },
});
