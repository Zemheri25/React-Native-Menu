import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { useFetch } from "../Utils/useFetch";
import { Categories } from "../components/Categories";

export const Category = ({ navigation }) => {
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  const renderItem = ({ item }) => {
    return <Categories item={item} navigation={navigation} />;
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.category}>
      <FlatList
        data={data.categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.idCategory}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    backgroundColor: "#FFA500",
  },
});
