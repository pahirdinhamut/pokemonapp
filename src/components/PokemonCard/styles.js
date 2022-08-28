import { StyleSheet } from "react-native";
import { textColor } from "../../../assets/COLORS/Color";
import { width, height } from "../../../assets/Size/Size";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 115,
    borderRadius: 10,
    marginTop: 25,
  },
  cardContainer: {
    margin: 20,
  },
  pokeNumber: { fontSize: 12, lineHeight: 14, color: textColor.number },
  pokeName: { fontSize: 26, fontWeight: "700", color: textColor.white },
  typesContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  item: {
    width: 74,
    height: 32,
    position: "absolute",
    left: 90,
    bottom: 110,
  },
  pokeImageStyle: {
    position: "absolute",

    height: height / 7,
    width: width / 1.7,
  },
});

export default styles;
