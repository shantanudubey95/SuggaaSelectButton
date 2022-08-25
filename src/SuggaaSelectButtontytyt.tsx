import { Text, View, Image, Pressable} from 'react-native'
import React from 'react'
interface Props {
  // style?: string;
  // type: "button" | "submit" | "reset";
  title?: string;
  onPress: () => void;
}

const SuggaaSelectButton = ({title, onPress}: Props) => {
  return (
    <Pressable onPress={onPress}
    style={{ paddingVertical: 9, paddingHorizontal: 31, backgroundColor:"#04825C", alignItems:"center", justifyContent:"center", flexDirection:"row", borderRadius: 5}}>
        <Text style={{fontSize: 20, lineHeight: 30, color:"white", fontWeight: "400"}}>{title}</Text>
        <Image style={{  position:"absolute", top: 6, right: 6}} source={require("../assets/Tick.png")}/>
    </Pressable>
  )
}

export default SuggaaSelectButton
