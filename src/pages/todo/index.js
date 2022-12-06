import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function Add() {
    if (todo.length !== 0) {
      setTodos([...todos, todo]);
      console.log(todos);
    }
  }

  const deleteTodo = (todoIndex) => setTodos(oldTodos => oldTodos.filter((_, index) => index !== todoIndex))

  return (
    <LinearGradient
      style={styles.screen}
      colors={["rgba(63, 55, 80, 1)", "rgba(91, 74, 128, 0.9)"]}
    >
      <KeyboardAvoidingView style={styles.container}>
        <TextInput
          placeholder="T y p e  TODO  h e r e"
          style={styles.Input}
          onChangeText={(e) => {
            setTodo(e);
          }}
        ></TextInput>
        <TouchableOpacity style={styles.SendButton} onPress={Add}>
          <Image source={require("../../assets/send.png")}></Image>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <LinearGradient
        style={styles.TodoContainer}
        colors={["rgba(115, 87, 174, 1)", "rgba(148, 120, 205, 1)"]}
      >
        <KeyboardAvoidingView style={styles.TodoContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.componentContainer}
          >
            {todos.map((todo, index) => (
              <View style={styles.BlockContainer} key={index}>
                <Text style={styles.content}>{todo}</Text>
                <View style={styles.btnContainer}>
                  <TouchableOpacity style={styles.risk}></TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {deleteTodo(index)}}
                    style={styles.delete}
                  ></TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </KeyboardAvoidingView>
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  TodoContainer: {
    flex: 2.5,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  componentContainer: {
    flex: 1,
    width: 350,
    overflow: "scroll",
    marginVertical: 10,
  },
  Input: {
    backgroundColor: "white",
    width: 235,
    height: 40,
    borderRadius: 100,
    paddingLeft: 15,
    margin: 15,
  },
  SendButton: {
    backgroundColor: "rgba(115, 85, 174, 1)",
    width: 45,
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 10,
    letterSpacing: 6,
  },
  BlockContainer: {
    backgroundColor: "rgba(63, 55, 80, 1)",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    height: "auto",
    maxWidth: 300,
    borderRadius: 10,
    marginVertical: 10,
    marginLeft: 24,
  },
  content: {
    flex: 1,
    color: "#fff",
    textAlign: "left",
  },
  btnContainer: {
    width: 55,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  risk: {
    backgroundColor: "yellow",
    height: 24,
    width: 24,
    borderRadius: 100,
  },
  delete: {
    backgroundColor: "red",
    height: 24,
    width: 24,
    borderRadius: 100,
  },
});

export default Todo;
