import * as React from "react";
import { Text, useTheme, TextInput, Button } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import confirmSignUp from "./HandleAuthCode";
import { Auth } from "aws-amplify";

ActivateAccount = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [authCode, setAuthCode] = React.useState("");
  const [email, setEmail] = React.useState("");

  function resendCode() {
    navigation.navigate("ResendCodeScreen")
  }

  function backToCreate() {
    navigation.navigate("NewAccount")
  }

  return (
    <ScrollView
      style={{ backgroundColor: theme.colors.background }}
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Text variant="headlineLarge" style={styles.header}>Confirm Account</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          autoComplete="email"
          style={styles.formElement}
          label="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.formElement}
          label="Confirmation Code"
          value={authCode}
          onChangeText={setAuthCode}
        />
        <Button 
          style={styles.formElement}
          onPress={() => {confirmSignUp(email, authCode, navigation)}}
          mode="contained"
          >Submit Code</Button>
      </View>
      <View>
        <Button onPress={resendCode}>Resend the code</Button>
        <Button onPress={backToCreate}>Re-Create Account</Button>
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
export default ActivateAccount;
