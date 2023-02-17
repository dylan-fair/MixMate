import * as React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Text, Button, useTheme, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";

import signIn from "./HandleSignIn";

function SignIn() {
  const theme = useTheme();
  const navigation = useNavigation();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function onNewAccountPress() {
    navigation.navigate("NewAccount");
  }

  function onPasswordReset() {
    navigation.navigate("PasswordReset");
  }
  return (
    <ScrollView
      style={{ backgroundColor: theme.colors.background }}
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text variant="headlineLarge" style={{ color: theme.colors.primary }}>
          Login
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.formElement}
          autoComplete="email"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.formElement}
          secureTextEntry
          // right={<TextInput.Icon icon="eye" />}
        />
        <Button
          onPress={() => signIn(email, password, navigation)}
          style={styles.formElement}
          mode="contained"
        >
          Login
        </Button>
      </View>
      <View>
        <Button onPress={onNewAccountPress}>Create Account</Button>
        <Button onPress={onPasswordReset}>Forgot Password?</Button>
      </View>
    </ScrollView>
  );
}

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

export default SignIn;
