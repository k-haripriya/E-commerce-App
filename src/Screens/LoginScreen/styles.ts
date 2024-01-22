import { StyleSheet } from "react-native";
import { ColorConstants } from "../../Constants/ColorConstants";

export const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        backgroundColor:ColorConstants.WHITE
    },
    blueBubble:{
        height:250,
        width:240,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:0
    },
    bubble3:{
        position:'absolute',
        right:0,
        top:350,
    },
    bottomContainer:{
        marginTop:130,
        marginHorizontal:20
    },
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