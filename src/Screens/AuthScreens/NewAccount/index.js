import * as React from "react";
import { Text, useTheme, Button, TextInput, List } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import handleSignUp from "./HandleSignUp";

import { emailRegex } from "../../../common/constants/regex";

NewAccount = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userType, setUserType] = React.useState("");
  const [listExpand, setListExpand] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passTrue, setPassTrue] = React.useState(false);
  const [emailTrue, setEmailTrue] = React.useState(false);

  function onSignInPress() {
    navigation.navigate("SignIn");
  }

  function passwordChecker() {
    let data = password;
    const is8CharactersOrMore = data.length >= 8;
    const has1Letter = /[a-z]/i.test(data);
    const has1Number = /\d/.test(data);
    const has1Special = /[^a-zA-Z\d:]/.test(data);
    if (!is8CharactersOrMore) {
      setPasswordError("Must be 8 characters long");
      return false;
    } else if (!has1Letter) {
      setPasswordError("Must have at least one capital letter");
      return false;
    } else if (!has1Number) {
      setPasswordError("Must have at least one number");
      return false;
    } else if (!has1Special) {
      setPasswordError("Must have at least one special character");
      return false;
    }
    setPasswordError("");
    setPassTrue(true);
    return true;
  }
  function checkEmail() {
    let data = email;
    let goodEmail = emailRegex.test(data);
    if (!goodEmail) {
      setEmailError("Not a valid email");
      return false;
    }
    setEmailError("");
    setEmailTrue(true);
    return true;
  }

  return (
    <ScrollView
      style={{ backgroundColor: theme.colors.background }}
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text variant="headlineLarge" style={{ color: theme.colors.primary }}>
          New Account
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          autoComplete="email"
          style={styles.formElement}
          label="Email"
          value={email}
          onChangeText={setEmail}
          onChange={() => checkEmail()}
        />
        <Text style={styles.errorElement}>{emailError}</Text>
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          onChange={() => passwordChecker()}
          onEndEditing={() => passwordChecker()}
          style={styles.formElement}
          secureTextEntry
          // right={<TextInput.Icon icon="eye" />}
        />
        <Text style={styles.errorElement}>{passwordError}</Text>
        <List.Accordion style={styles.formElement} title="User Type">
          <List.Item onPress={() => setUserType("listener")} title="Listener" />
          <List.Item onPress={() => setUserType("dj")} title="DJ" />
          <List.Item onPress={() => setUserType("venue")} title="Venue" />
        </List.Accordion>
        <Button
          disabled={!(passTrue && emailTrue && userType)}
          style={styles.formElement}
          mode="contained"
          onPress={() => handleSignUp(email, password, userType, navigation)}
        >
          Create Account
        </Button>
      </View>
      <View>
        <Button onPress={onSignInPress}>Already have an account?</Button>
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
  errorElement: {
    marginRight: 10,
    marginLeft: 10,
  },
});
export default NewAccount;
