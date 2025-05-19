import { StyleSheet, Text, View } from "react-native";
import { Security } from "@2code/security";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Host App!</Text>
      <Security />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { App };
