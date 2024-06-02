import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';

interface IProps {
    text: string,
    color: string,
    textColor: string,
    symbolName: string,
    symbolColor: string
}

export default function Button(props: IProps) {

    return (
        <Pressable style={[styles.button, { backgroundColor: props.color }]} onPress={() => console.log("test")}>
            <View style={styles.buttonOrganizer}>
                <Entypo name={props.symbolName} size={24} color={props.symbolColor} />
                <Text style={[styles.buttonText, { color: props.textColor }]}>{props.text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        width: "100%",
        height: "15%",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5
    },
    buttonOrganizer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10

    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 25,
        letterSpacing: 2,
    }
})