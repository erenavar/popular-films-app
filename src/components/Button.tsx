import { Pressable, StyleSheet, Text, View } from 'react-native'

interface IProps {
    name: string
}

export default function Button(props: IProps) {
    return (
        <Pressable style={styles.button} onPress={() => console.log("test")}>
            <Text style={styles.buttonText}>{props.name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "white",
        borderRadius: 10,
        width: "95%",
        height: "15%",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "black",
        

    }
})