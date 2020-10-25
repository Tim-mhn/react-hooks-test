import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({data: null, loading: true});

    useEffect( () => {

        async function f() {
            const res = await fetch(url);
            const text = await res.text();
            setState({data: text, loading: false});
            // return text;
        }

        
        setState({...state, loading: true});

        f();
        console.log(state);

    }, [url])

    return state;
}