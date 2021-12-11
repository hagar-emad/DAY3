import {usersReducer} from './users'
export default (state={},action)=>{
    return {users:usersReducer(state.users,action)}
}

// {
//     users:{
//         list,
//         details
//     },
//     posts:{
//     }
// }

