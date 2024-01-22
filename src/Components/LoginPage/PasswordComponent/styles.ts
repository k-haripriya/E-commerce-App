import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../Constants/ColorConstants";

export const styles = StyleSheet.create({
    container:{
        position:'absolute',
        top:-200,
        
    },
    imageView:{
        padding:15,
        backgroundColor:ColorConstants.WHITE,
        marginLeft:130,
        borderRadius:100,
        // borderColor:ColorConstants.APP_THEME,
        // borderWidth:2        
    },
    image :{
        height:100,
        width:100,
        borderRadius:100
    
    },
    userText:{
        color:ColorConstants.BLACK,
        textAlign:'center',
        fontSize:28,
        fontWeight:'900',
        marginTop:-20,
        marginBottom:10
    },
    text:{
        color:ColorConstants.BLACK,
        textAlign:'center',
        fontSize:22,
        fontWeight:'300',
    },
    passwordView:{
        display:'flex',
        flexDirection:'row',
        // justifyContent:'space-evenly',
        gap:20,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    },
    box:{
        paddingHorizontal:10,
        backgroundColor:ColorConstants.App_THEME_2,
        borderRadius:10,
        alignItems:'center',
        },
    active:{
        height:20,
        width:10,
        borderRadius:25,
    },
    correct:{
        backgroundColor:ColorConstants.APP_THEME,
    },
    wrong:{
        backgroundColor:ColorConstants.RED
    },
    forgotPassword:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:'62%'
    },
    buttonView:{
        marginTop:'5%',
        marginHorizontal:20
    }
})