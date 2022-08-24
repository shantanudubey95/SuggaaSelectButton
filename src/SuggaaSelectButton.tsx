import { Text, View , Image} from 'react-native'
import React from 'react'

const SuggaaSelectButton = () => {
  return (
    <View style={{ paddingVertical: 9, paddingHorizontal: 31, backgroundColor:"green", alignItems:"center", justifyContent:"center", flexDirection:"row", borderRadius: 5}}>
        <Text style={{fontSize: 20, color:"white", fontWeight: "bold"}}>Him</Text>
        <Image style={{  position:"absolute", top: 4, right: 4}} source={require("../assets/Tick.png")}/>
    </View>
  )
}

export default SuggaaSelectButton
