import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Pizza Demo"
        onPress={() => navigation.navigate("Pizza")}
      />
      <Button
        title="Go to Password Demo"
        onPress={() => navigation.navigate("Text")}
      />
      <Button
        title="Go to Colour Demo"
        onPress={() => navigation.navigate("Colour")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
