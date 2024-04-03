import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useFetch } from "../Utils/useFetch";
import { useEffect, useState } from "react";

export const MealDetail = ({ route }) => {
  const [detailData, setDetailData] = useState({});
  const [mealDetailUrlState, setMealDetailUrlState] = useState({});
  const { data } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${route?.params?.strMeal}`
  );

  useEffect(() => {
    if (Object.values(data) && !Array.isArray(data)) {
      setDetailData(data.meals[0]);
    }
  }, [data]);

  const { data: detailDataMeal } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route?.params?.idMeal}`
  );

  useEffect(() => {
    if (Object.values(detailDataMeal) && !Array.isArray(detailDataMeal)) {
      setMealDetailUrlState(detailDataMeal.meals[0]);
    }
  }, [detailDataMeal]);

  const onPress = () => {
    Linking.openURL(detailData.strYoutube);
  };

  return (
    <ScrollView>
      <View style={style.container}>
        <Image
          source={{
            uri: detailData.strMealThumb,
          }}
          style={style.image}
        />
        <View style={style.textContainer}>
          <Text style={style.headerTitle}>{detailData.strMeal}</Text>
          <Text style={style.country}>{detailData.strArea}</Text>
        </View>
        <View style={style.line}></View>
        <Text>{mealDetailUrlState.strInstructions}</Text>
        <View style={style.buttonView}>
          {detailData.strYoutube ? (
            <TouchableOpacity style={style.button} onPress={onPress}>
              <Text style={style.buttonText}>Watch on Youtube</Text>
            </TouchableOpacity>
          ) : (
            ""
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  image: { height: 250, width: "100%", borderRadius: 10 },
  buttonView: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FF0000",
    width: 350,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "800",
  },
  container: {
    backgroundColor: "##F2F2F2",
    flex: 1,
    padding: 10,
  },
  textContainer: {},
  headerTitle: {
    color: "#A5292A",
    fontSize: 20,
    fontWeight: "900",
    marginTop: 10,
  },
  country: {
    color: "#A5292A",
    fontSize: 15,
    fontWeight: "900",
    marginTop: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    marginTop: 10,
  },
});
