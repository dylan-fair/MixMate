import { Text, useTheme } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
function Venue() {
  const theme = useTheme();
  return (
    <ScrollView
      style={{ backgroundColor: theme.colors.background }}
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
    >  
        <View style={styles.header}>
        <Text variant="headlineLarge">Venue</Text>
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

});

export default Venue;
