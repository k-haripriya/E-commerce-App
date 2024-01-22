import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../Constants/ColorConstants";

export const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    circle:{
        height:15,
        width:15,
        borderWidth:1,
        borderRadius:10,
        margin:10,
    },
    smallCircle:{
        backgroundColor:ColorConstants.APP_THEME,
        height:20,
        width:20,
        borderRadius:20
    }
})