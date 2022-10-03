const reducer = (state, action) =>{
    switch (action.type) {
        case "GET_NEXTPAGE" :
            let pageNum = state.page +1
            if(pageNum >= state.nbPages){
                pageNum = 0
            }
            return{
                ...state,
                page: pageNum,
            }
        case "GET_PREPAGE":
            let page_Num = state.page -1
            if (page_Num <= 0){
                page_Num = 0
            }
            return{
                ...state,
                page:page_Num
            }
        case "SEARCH_QUERY":
            return{
                ...state,
                query:action.payload,

            }
        case "REMOVE_POST":
            return{
                ...state,
                hits: state.hits.filter(
                    (currEle) => currEle.objectID !== action.payload
                ),
                
            }
        case "SET_LOADING":
            return{
                ...state,
                isLoading:false
            };
        case "GET_STORIES":
            return{
                
                ...state,
                
                hits:action.payload.hits,
                nbPages: action.payload.nbPages,
                isLoading:true,
            };
    }
    return state

}
export default reducer;