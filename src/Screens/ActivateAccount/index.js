import { Text, useTheme } from "react-native-paper";

ActivateAccount = () => {
  const theme = useTheme();

  return <Text style={{ color: theme.color.primary }}>ActivateAccount</Text>;
};

export default ActivateAccount;