import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    mainView:{
        display:'flex',
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:-180,
    },
    logo:{       
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        padding:30,
        borderRadius:100,
        shadowColor: 'black',
        shadowOffset: {
          width: 10, 
          height: 10,
        },
        shadowOpacity: 0.5, 
        elevation: 5,         
    },
    appname:{
        color:'#202020',
        fontSize:48,
        fontWeight:'bold'
    },
    slogan:{
        fontSize:22,
        color:'#202020',
        fontWeight:'300',
        padding:50,
        textAlign:'center'
    },
    bootomView:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginBottom:100,
        gap:30
    },
    bottomContainer:{
        display:'flex',
        flexDirection:'row',
        gap:15,
        alignItems:'center'
    },
    bottomText:{
        color:'#202020',
        fontSize:18,
        fontWeight:'300'
    }

})