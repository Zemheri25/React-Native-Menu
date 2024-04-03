import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

export const Categories = ({ item, navigation }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("Meals", {
          cateGory: item.strCategory,
        });
      }}
    >
      <View style={styles.category}>
        <Image style={styles.images} source={{ uri: item.strCategoryThumb }} />
        <Text style={styles.text}>{item.strCategory}</Text>
        <Text style={styles.desc}>
          {item.strCategoryDescription.length > 100
            ? `${item.strCategoryDescription.slice(0, 100)}...`
            : item.strCategoryDescription}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  category: {
    backgroundColor: "white",
    marginTop: 20,
    width: "95%",
    marginLeft: 10,
    height: 80,
    borderWidth: 1,
    borderColor: "#BCAAA4",
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    overflow: "hidden",
    marginBottom: 5,
  },

  images: {
    width: 90,
    height: 70,
    resizeMode: "center",
    borderRadius: 20,
  },

  text: {
    marginLeft: 5,
    fontSize: 13,
    fontWeight: "600",
    minWidth: 90,
  },

  desc: {
    height: 60,
    paddingLeft: 10,
    fontSize: 10,
    width: 170,
  },
});
