import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.ctaButton}
        onPress={() => navigation.navigate("Food")}
      >
        <Text style={styles.ctaButtonText}>Food</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ctaButton}
        onPress={() => navigation.navigate("Instamart")}
      >
        <Text style={styles.ctaButtonText}>Instamart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  ctaButton: {
    backgroundColor: "blue",
    width: "80%",
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  ctaButtonText: {
    color: "white",
    fontSize: 20,
  },
});

export default MainScreen;
