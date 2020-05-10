import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Text, FAB, List, IconButton } from "react-native-paper";
import Header from "../components/Header";

function ViewNotes({ navigation }) {
  const [notes, setNotes] = useState([]);

  const addNotes = (note) => {
    note.id =  Math.random();
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    let newNotes = [...notes]
    let itemIndex = newNotes.findIndex(item => item.id === id)
    newNotes.splice(itemIndex, 1)
    setNotes(newNotes);
  };

  return (
    <>
      <Header titleText="Your past few days" navigation={navigation} />
      <View style={styles.container}>
        {notes.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>There are no diary writings yet...</Text>
          </View>
        ) : (
          <FlatList
            data={notes}
            renderItem={({ item }) => (
              <>
                <List.Item
                  title={item.noteTitle}
                  description={item.noteDescription}
                  descriptionNumberOfLines={1}
                  titleStyle={styles.listTitle}
                  right={props => <IconButton {...props} icon="delete" size={20} onPress={() => deleteNote(item.id)} />}
                />
              </>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
        <FAB
          style={styles.fab}
          small
          icon="plus"
          label="Log diary"
          onPress={() => navigation.navigate("AddNotes", { addNotes })}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faeaea",
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 16,
  },
  fab: {
    backgroundColor: "#3a4aea",
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 8,
  },
  listTitle: {
    fontSize: 20,
  },
  flexContainer: {
    flex: 1,
  },
});

export default ViewNotes;
