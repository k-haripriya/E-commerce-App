import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../Constants/ColorConstants";

export const styles = StyleSheet.create({
    loginText:{
        fontSize:52,
        color:ColorConstants.BLACK,
        fontWeight:'700',
    },
    welcomemsg:{
        fontSize:18,
        color:ColorConstants.BLACK,
        fontFamily:'100',
        marginRight:10
    },
    flexrow:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    flexColumn:{
        marginTop:60        
    },
    separator:{
        marginTop:20
    }
})