import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback
} from "react-native";

export const MealContain = ({ item, navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => {
        navigation.navigate(
          
          "MealDetail", item)
    }}>
        <View style={styles.container}>
      <Image
        style={styles.images}
        source={{ uri: item.strMealThumb }}
      />
        <Text style={styles.text}>{item.strMeal}</Text>
    </View>
    </TouchableWithoutFeedback>
    
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: Dimensions.get("window").height / 6,
    borderRadius: 40,
    borderTopRightRadius: 20
  },
  images: {
    flex: 1,
    justifyContent: "flex-end",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  text: {
    color: "white",
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
