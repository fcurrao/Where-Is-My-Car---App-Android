import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../Global/Colors";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "../features/Counter/counterSlice";

const Counter = () => {
    const [inputToAdd, setInputToAdd] = useState("0");
    // const [inputToAdd, setInputToAdd] = useState(0);

    const dispatch = useDispatch()
    const count = useSelector(state => state.counterReducer.value)

    return (
        <View style={styles.container}>
        <View style={styles.buttonsContainer}>
            <Pressable 
            onPress={ () => dispatch(decrement())}
            style={styles.button}
            >
                <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.span}>{count}</Text>
            <Pressable 
            onPress={ () => dispatch(increment())}
             style={styles.button}
             >
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
        <View style={styles.buttonsContainer}>
            <TextInput
                placeholder="Cantidad a aumentar"
                style={styles.spanInput}
                onChangeText={setInputToAdd}
                value={inputToAdd}
            />
            <Pressable
            onPress={ () => dispatch(incrementByAmount(+inputToAdd))}
            style={styles.button}
            >
                <Text style={styles.buttonText}>Add</Text>
            </Pressable>
        </View>
        <Pressable 
        onPress={ () => dispatch(reset())}
        style={styles.button}
        >
            <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
    </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: colors.pink,
        padding: 10,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    button: {
        padding: 10,
        backgroundColor: colors.lightPink,
    },
    span: {
        backgroundColor: colors.red,
        width: "60%",
        padding: 10,
        textAlign: "center",
        fontSize: 20,
    },
    spanInput: {
        backgroundColor: colors.peach,
        width: "60%",
        padding: 10,
        textAlign: "center",
        fontSize: 16,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: "Josefin",
    },
});
