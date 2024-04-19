import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const InstamartScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.item}>
          <Text>Item 1</Text>
        </View>
        <View style={styles.item}>
          <Text>Item 2</Text>
        </View>
        {/* Add more items here */}
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
  item: {
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

export default InstamartScreen;
