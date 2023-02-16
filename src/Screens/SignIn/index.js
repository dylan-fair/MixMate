import { Text, useTheme } from "react-native-paper";
import { StyleSheet, ScrollView, View } from "react-native";
import {useNavigation} from '@react-navigation/native';

function SignIn() {
    const theme = useTheme();
  console.log(theme.colors.primary);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text variant="headlineLarge" theme={{colors: ""}}>Login</Text>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
    flex: 1,
    paddingTop: 50,
    height: "100%",
    color: "31cbd5"

  },
  text : {
    color: "31cbd5"
  }
});

export default SignIn;
