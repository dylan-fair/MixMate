import { Text, useTheme } from "react-native-paper";

NewAccount = () => {
  const theme = useTheme();

  return <Text style={{ color: theme.color.primary }}>New Account</Text>;
};

export default NewAccount;