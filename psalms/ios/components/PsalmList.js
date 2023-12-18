import { StyleSheet, Text, View, Button } from "react-native";
const PSALMS_TOTAL = 150
export default function PsalmList(props) {
    const arrayOfIndexes = [...Array(PSALMS_TOTAL).keys()] 
    return (
        <View>
            {arrayOfIndexes.map((value, index) => {
                return <Button key={index} title={"Psalm " + (index + 1)}/>
            })}
        </View>
    )
}