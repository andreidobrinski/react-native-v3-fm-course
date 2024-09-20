import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { theme } from "../theme";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { Link } from "expo-router";
import { useState } from "react";

type ShoppingListItem = {
  id: string;
  name: string;
};

const initialList: Array<ShoppingListItem> = [
  { id: "1", name: "Coffee" },
  { id: "2", name: "Tea" },
  { id: "3", name: "Sugar" },
];

export default function App() {
  const [shoppingList, setShoppingList] =
    useState<Array<ShoppingListItem>>(initialList);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value) {
      const newShoppingList = [
        { id: new Date().toISOString(), name: value },
        ...shoppingList,
      ];
      setShoppingList(newShoppingList);
      setValue("");
    }
  };

  return (
    <FlatList
      data={shoppingList}
      stickyHeaderIndices={[0]}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      ListHeaderComponent={() => (
        <TextInput
          value={value}
          onChangeText={setValue}
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
          placeholder="E.g. coffee"
          style={styles.textInput}
        />
      )}
      // no need for a `key` if the item already has either an id or a key on it
      // otherwise use the `keyExtractor` prop
      renderItem={({ item }) => <ShoppingListItem name={item.name} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    padding: 12,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50,
    backgroundColor: theme.colorWhite,
  },
});
