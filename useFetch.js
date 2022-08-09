import { useEffect, useState } from "react";

export const useFetch = (url)=>{

    const [state, setState] = useState({
        data:null,
        isLoading:true,
        hasError:null
    })

    const getFetch = async()=>{

        setState({
            ...state,
            isLoading:true,
        })
        // console.log('First render', state)

        const response = await fetch(url);
        const data = await response.json();
        setState({
            data:data,
            isLoading:false,
            hasError:null
        })
        // console.log('state',state);

    }
    useEffect( ()=>{
        getFetch()
    },[url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }

}