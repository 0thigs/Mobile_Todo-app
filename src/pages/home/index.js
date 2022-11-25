import React from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

function Home() {

  const navigation = useNavigation()

  return (
    <LinearGradient
      style={styles.screen}
      colors={["rgba(63, 55, 80, 1)", "rgba(91, 74, 128, 0.9)"]}
    >
      <View style={styles.container}>
        <Text style={styles.title}>TODO</Text>
      </View>
      <LinearGradient
        style={styles.buttonContainer}
        colors={["rgba(115, 87, 174, 1)", "rgba(148, 120, 205, 1)"]}
      >
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Todo")}}>
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
      </LinearGradient>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    ...Platform.select({
      default: {
        padding: 0,
      },
      android: {
        paddingTop: 25,
      },
    }),
    flex: 1,
  },
  title: {
    fontSize: 60,
    fontWeight: "300",
    color: "white",
    letterSpacing: 20,
    textShadowColor: "rgba(0, 0, 0, 0.30)",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1.5,
    backgroundColor: "white",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#000',
    shadowOffset: { width: -10, height: -10 },
    shadowOpacity: 0.8,
    shadowRadius: 100,
    elevation: 5,
  },
  button: {
    backgroundColor: "white",
    width: 115,
    height: 57,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: 3,
    fontSize: 10,

  },
});

export default Home;
