import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const FoodScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.restaurant}>
          <Text>Restaurant 1</Text>
        </View>
        <View style={styles.restaurant}>
          <Text>Restaurant 2</Text>
        </View>
        {/* Add more restaurants here */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    alignItems: "center",
  },
  restaurant: {
    width: "80%",
    height: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default FoodScreen;

