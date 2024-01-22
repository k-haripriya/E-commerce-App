import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer:{
        display:'flex',
        flex:1,
        backgroundColor:'white',
    },
    blueBubble:{
        position:'absolute',
        right:0,
        top:70
    },
    content:{
        position:'absolute',
        top:150,
        left:40


    },
    title:{
        fontSize:52,
        marginRight:100,
        color:'black',
        fontWeight:'700',
    },
    ellipse:{
        marginTop:50,
    },
    camera:{
        marginTop:-60,
        marginLeft:27,
        
    },
    inputView:{
        marginTop:280,
        marginHorizontal:20,
        display:'flex',
        flexDirection:'column',
        gap:10
    },
    button:{
        marginTop:20
    },
    image:{
        height:90,
        width:90,
        marginTop:50,
        borderRadius:45

    }

});