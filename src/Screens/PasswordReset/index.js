import { Text, useTheme } from "react-native-paper";

PasswordReset = () => {
  const theme = useTheme();

  return <Text style={{ color: theme.color.primary }}>Reset</Text>;
};

export default PasswordReset;
