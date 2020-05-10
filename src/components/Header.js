import React from "react";
import { View, StyleSheet } from "react-native";

import { Appbar, Title, FAB } from "react-native-paper";

function Header({ titleText, navigation }) {
  return (
    <View>
      <Appbar.Header style={styles.headerContainer}>
        <FAB
            style={styles.fab}
            small
            icon="home"
            onPress={() => navigation.navigate("ViewNotes")}
        />
        <View style={styles.container}>
          <Title style={styles.title}>{titleText}</Title>
        </View>
      </Appbar.Header>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#0c8599",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    color: "#fafafa",
  },
  fab: {
    backgroundColor: "#15aabf",
    position: 'absolute',
    margin: 8,
    left: 0,
    top: 0,
  }
});

export default Header;
