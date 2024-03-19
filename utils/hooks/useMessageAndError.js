
import { useEffect } from "react"
import { Toast } from "react-native-toast-message/lib/src/Toast"
import { useSelector } from "react-redux"

import { loadUser } from "../../redux/action/userAction"



export const useMessageAndError = (navigate, dispatch, navigateTo = 'login') => {
    const { loading, message, error } = useSelector((state) => state.user)
    console.log(loading, message, error);
    useEffect(() => {
        if (error) {
            Toast.show({
                type: "error",
                text1: error
            })
            dispatch({
                type: "clearError"
            })
        }
        if (message) {
            navigate.reset({
                index: 0,
                routes: [{ name: navigateTo }],
            });
            Toast.show({
                type: "success",
                text1: message
            })
            dispatch({
                type: "clearMessage"
            })
            dispatch(loadUser())

        }
    }, [error, message, dispatch])
    return loading
}

export const useMessageAndErrorOther = (dispatch, navigate, navigateTo, func) => {
    const { loading, message, error } = useSelector((state) => state.otherState)
    console.log(loading, message, error);
    useEffect(() => {
        if (error) {
            Toast.show({
                type: "error",
                text1: error
            })
            dispatch({
                type: "clearError"
            })
        }
        if (message) {

            Toast.show({
                type: "success",
                text1: message
            })
            dispatch({
                type: "clearMessage"
            })
            navigateTo && navigate.navigate(navigateTo)
            func && dispatch(func())

        }
    }, [error, message, dispatch])
    return loading
}