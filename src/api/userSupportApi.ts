import axios from "axios"
export const createNewUser =async (getData:any)=> {
    const payload:any = {
        "email":getData.EMail,
        "password":getData.Password,
        "phone":getData.Phonenumber,
        "dp":getData.dp,

    }
    try{
        const response = await axios.post("http://10.0.2.2:8080/user/addUser",payload);
        return response.status

    }catch(err:any)
    {
        console.log("Errror in adding user",err);
    }
}

export const CheckEmail =async (email:string) => {
    
    try{
        const response = await axios.get(`http://10.0.2.2:8080/user/findUser/${email}`);
        return response.data

    }catch(err:any)
    {
        console.log("Errror in checking Email",err);
    } 
}