import * as React from "react";
import { Text, useTheme, Button, TextInput, List } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/core";

NewAccount = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userType, setUserType] = React.useState("");
  const [listExpand, setListExpand] = React.useState(false);

  function onSignInPress() {
    navigation.navigate("SignIn");
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
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.formElement}
          secureTextEntry
          // right={<TextInput.Icon icon="eye" />}
        />
        <List.Accordion style={styles.formElement} title="User Type">
          <List.Item onPress={() => setUserType("listener")} title="Listener" />
          <List.Item onPress={() => setUserType("dj")} title="DJ" />
          <List.Item onPress={() => setUserType("venue")} title="Venue" />
        </List.Accordion>
        <Button  style={styles.formElement} mode="contained">Create Account</Button>
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
});
export default NewAccount;
