import React from "react";
import {useContext, useReducer, useEffect} from "react";
import reducer from "./reducer"
const AppContext = React.createContext();




const AppProvider = ({children}) => {
    let API = "https://hn.algolia.com/api/v1/search?"
    const initialState = {
        isLoading: true,
        query:"",
        nbPages: 0,
        page: 0,
        hits: [],
    };
    const [state, dispatch] = useReducer(reducer, initialState)
    

    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type:"GET_STORIES",
                payload: {
                    hits:data.hits,
                    nbPages:data.nbPages,
                }
        })
        dispatch({
            type:"SET_LOADING"

        })
            //isLoading = false;
        } catch (error) {
           console.log(error) 
        }
    }

    const removePost = (post_ID) =>{
        dispatch({
            type:"REMOVE_POST",
            payload:post_ID,
        });
    };

    const searchPost = (searchQuery) =>{
        dispatch({
            type:"SEARCH_QUERY",
            payload:searchQuery,
        });
    };
    const getPrePage = () =>{
        dispatch({
            type: "GET_PREPAGE"
        })
    }
    const getNextPage =() =>{
        dispatch({
            type: "GET_NEXTPAGE"
        })
    }






    useEffect(() => {
      fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query, state.page])
    return(
        <AppContext.Provider value = {{...state, removePost, searchPost, getNextPage, getPrePage}}>
            {children}
        </AppContext.Provider>
    );
};
const useMyCustomHook = () =>{
    return useContext(AppContext)
    
};
export {AppContext, AppProvider, useMyCustomHook};
