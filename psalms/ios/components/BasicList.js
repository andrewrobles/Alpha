import BasicListItem from "./BasicListItem"
import { StyleSheet, Text, View } from "react-native";
export default function BasicList(props) {
    const arrayOfIndexes = [...Array(10).keys()] 
    return (
        <View>
            {arrayOfIndexes.map((value, index) => {
                return <BasicListItem primary={"Psalm " + (index + 1)}/>
            })}
        </View>
    )
}