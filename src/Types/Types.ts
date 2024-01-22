export type NavigationStackParams = {
    SplashScreen:undefined,
    CreateAccount:undefined,
    LoginScreen:undefined,
    WebView:undefined,
}

export type RouterConstantsType = {
    SplashScreen:keyof NavigationStackParams,
    CreateAccount:keyof NavigationStackParams,
    LoginScreen:keyof NavigationStackParams
}

export type SplashScreenType = {
    handleGetStarted:Function,
    handleAlreadyHaveAnAcc:Function
}

export type ButtonType = {
    ButtonText:string,
    onPress:Function
}

export type InputFieldType = {
    PlaceHolderText:string,
    onChangeText:Function,
    value:string | undefined
}

export type CreateAccountType = {
    fields:string[],
    openImagePicker:Function,
    image:any,
    submitImage:Function,
    handleInputChange:Function,
    handleSubmit:Function,
    getData:any,
    getLoader:boolean,
}

export type InputChangeType = {
    newText:string,
    field:string
}

export type LoginType = {
    handleInputChange : Function,
    getEmail : string,
    handleCheckEmail: Function,
    getVisibility:boolean

}

export type EmailType = {
    handleInputChange:Function,
    getEmail:string,
    handleCheckEmail:Function,
}

