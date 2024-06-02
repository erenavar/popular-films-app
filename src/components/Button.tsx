import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';

interface IProps {
    name: string,
    color: string,
    textColor: string
}

export default function Button(props: IProps) {

    return (
        <Pressable style={[styles.button, { backgroundColor: props.color }]} onPress={() => console.log("test")}>
            <View style={styles.buttonOrganizer}>
                <Entypo name="controller-play" size={30} color="black" />
                <Text style={[styles.buttonText, { color: props.textColor }]}>{props.name}</Text>
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
        marginTop: 5
    },
    buttonOrganizer: {
        flexDirection: "row"
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 25,
        letterSpacing: 2,
        marginLeft: 4


    }
})