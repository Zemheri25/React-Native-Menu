import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { useFetch } from "../Utils/useFetch";
import { MealContain } from "../components/MealContain";

export const Meal = ({ route, navigation }) => {
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params.cateGory}`
  );

  const renderItem = ({item}) => {
    return <MealContain item={item} navigation={navigation}/>
  }

  if(loading) {
    return <ActivityIndicator />
  }
  
  return (
    <View style={styles.container}>
      <FlatList
        data={data.meals}
        renderItem={renderItem}
        keyExtractor={(item) => item.idMeal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container :{
        backgroundColor: "#FFA500",
        height: "100%",
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 15
    }
  });
