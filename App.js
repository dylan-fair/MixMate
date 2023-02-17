import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Amplify } from "aws-amplify";
import config from './src/aws-exports'
import theme from "./src/common/theme";
import Navigation from "./src/navigation";

Amplify.configure(config)

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={{ backgroundColor: "#252426", flex: 1 }}>
        <Navigation />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252426",
    borderWidth: 4,
    borderColor: "red",
  },
});
