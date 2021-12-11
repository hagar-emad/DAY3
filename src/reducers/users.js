export const usersReducer = (state={},action)=>{
    console.log(action)
    switch (action.type){
        case 'LIST':{
           return {...state,list:action.payload} 
        }
        case 'USER_DETAILS':{
            return {...state,details:action.payload}
        }
        // case 'USER_ADDED':{
        //     return{...state,list:[...state.users.list,action.payload]}
        // }
        default: return state
    }
}