import * as types from "./actionType"

const initalState={
    profileData:[],
    isLoading:false,
    isError:false,
    AllFriends:[],
    SingleProfile:[],
    SinglePost:[],
    SingleFriends:[],
}

const reducer = (state = initalState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.PROFILE_REQUEST:{
            return{
                ...state,
                isLoading:true,
                isError:false,
            }
        }
        case types.PROFILE_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                profileData:[payload]
            }
        }
        case types.PROFILE_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
        }
        case types.All_FRIENDS:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                AllFriends:payload
            }
        }
        case types.SINGLE_USER_PROFILE:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                SingleProfile:[payload]
            }
        }
        case types.SINGLE_POST:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                SinglePost:[payload]
            }
        } 
        case types.SINGLE_USER_FRIENDS:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                SingleFriends:payload
            }
        }   
        
        default:
            return state;
    }
}

export {reducer}