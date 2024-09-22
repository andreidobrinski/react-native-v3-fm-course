import { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { countdownStorageKey, PersistedCountedownState } from ".";
import { getFromStorage } from "../../utils/storage";
import { format } from "date-fns";
import { theme } from "../../theme";

const fullDateFormat = `LLL d yyyy, h:mm aaa`;

export default function HistoryScreen() {
  const [countdownState, setCountdownState] =
    useState<PersistedCountedownState>();

  useEffect(() => {
    const init = async () => {
      const value = await getFromStorage(countdownStorageKey);
      setCountdownState(value);
    };
    init();
  }, []);

  return (
    <FlatList
      data={countdownState?.completedAtTimestamps}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <Text style={styles.listItemText}>
            {format(item, fullDateFormat)}
          </Text>
        </View>
      )}
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text>No history</Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
  list: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  listItemText: {
    fontSize: 18,
  },
  contentContainer: {
    marginTop: 8,
  },
  listItem: {
    backgroundColor: theme.colorLightGrey,
    marginHorizontal: 8,
    padding: 12,
    borderRadius: 6,
    marginBottom: 8,
  },
  listEmptyContainer: {
    marginVertical: 18,
    justifyContent: "center",
    alignItems: "center",
  },
});
