import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Text, TextInput, FAB } from "react-native-paper";
import Header from "../components/Header";

function AddNotes({ navigation }) {
  let data = new Date(),
    day = (data.getDate() - 1).toString(),
    dayF = day.length == 1 ? "0" + day : day,
    month = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
    monthF = month.length == 1 ? "0" + month : month,
    yearF = data.getFullYear();
  const noteTitle = dayF + "/" + monthF + "/" + yearF;

  const [noteDescription, setNoteDescription] = useState("");

  function onSaveNote() {
    navigation.state.params.addNotes({ noteTitle, noteDescription });
    navigation.goBack();
  }

  return (
    <>
      <Header titleText="Log your day" navigation={navigation} />

      <View style={styles.container}>
        <Text style={styles.title}>{noteTitle}</Text>

        <TextInput
          label="Tell me about yesterday"
          value={noteDescription}
          mode="flat"
          onChangeText={setNoteDescription}
          style={styles.text}
          scrollEnabled
          returnKeyLabel="done"
          blurOnSubmit={true}
          multiline={true}
          autoFocus={true}
        />

        <FAB
          style={styles.fab}
          small
          icon="check"
          label="save"
          disabled={Boolean(!noteTitle)}
          onPress={() => onSaveNote()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    marginHorizontal: 4,
  },
  text: {
    fontSize: 16,
    marginHorizontal: 4,
    marginBottom: 80,
    flex: 1
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
  },
});

export default AddNotes;
