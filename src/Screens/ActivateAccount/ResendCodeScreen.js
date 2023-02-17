import * as React from "react";
import { Text, useTheme, TextInput, Button } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import confirmSignUp from "./HandleAuthCode";

ResendCodeScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const [authCode, setAuthCode] = React.useState("");
  const [email, setEmail] = React.useState("");

  function goToActiavte() {
    navigation.navigate('ActivateAccount')
  }

  return (
    <ScrollView
      style={{ backgroundColor: theme.colors.background }}
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Text variant="headlineLarge" style={styles.header}>Resend Code</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          autoComplete="email"
          style={styles.formElement}
          label="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Button 
          style={styles.formElement}
          onPress={() => {confirmSignUp(email, authCode)}}
          mode="contained"
          >Resend Code</Button>
      </View>
      <View>
        <Button onPress={goToActiavte}>Confirm Account</Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#252426",
  },
  contentContainerStyle: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    paddingTop: 40,
  },
  form: {
    width: "100%",
  },
  formElement: {
    margin: 20,
  },
});
export default ResendCodeScreen;