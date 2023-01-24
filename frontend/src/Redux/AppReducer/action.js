import * as types from "./actionType"
import axios from 'axios'


const postProfileRequest =()=>{
    return{
        type:types.PROFILE_REQUEST
    }
}

const postProfileSuccess = (payload) =>{
    return{
        type:types.PROFILE_SUCCESS,
        payload
    }
}
const postProfileFailure = () =>{
    return{
        type:types.PROFILE_FAILURE
    }
}

const postAllFriends=(payload)=>{
    return{
        type:types.All_FRIENDS,
        payload
    }
}

const postSingleUser=(payload)=>{
    return{
        type:types.SINGLE_USER_PROFILE,
        payload
    }
}
const postSingleUserFriends=(payload)=>{
    return{
        type:types.SINGLE_USER_FRIENDS,
        payload
    }
}

const postSinglePost=(payload)=>{
    return{
        type:types.SINGLE_POST,
        payload
    }
}


const {token,user}=JSON.parse(localStorage.getItem("socialPshcyoToken")) || []

const getProfiles=(r=user)=>async(dispatch)=>{
    dispatch(postProfileRequest())
   await axios.get(`http://localhost:3002/users/${r._id}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then((res)=>{
        // console.log(res.data)
        dispatch(postProfileSuccess(res.data))
    })
    .catch((err)=>{
        console.log(err)
        dispatch(postProfileFailure())
    })
}




const getFriendList=(r=user)=>(dispatch)=>{
    // dispatch(postProfileRequest())
     axios.get(`http://localhost:3002/users/${r._id}/friends`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then((res)=>{  
        // console.log(res.data)
        dispatch(postAllFriends(res.data))
    })
    .catch((err)=>{
        console.log(err)
        // dispatch(postProfileFailure())
    })
}


const getSingleUserFriendList=(payload)=>(dispatch)=>{
     axios.get(`http://localhost:3002/users/${payload}/friends`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then((res)=>{  
        console.log(res.data)
        dispatch(postSingleUserFriends(res.data))
        getProfiles()
    })
    .catch((err)=>{
        console.log(err)
    })
}

const getSingleUserProfile=(payload)=>(dispatch)=>{
     axios.get(`http://localhost:3002/users/${payload}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then((res)=>{  
         dispatch(postSingleUser(res.data))
    })
    .catch((err)=>{
        console.log(err)
    })
}

const getSinglePost=(payload)=>(dispatch)=>{
    console.log(payload)
    axios.get(`http://localhost:3002/posts/singlepost/${payload}`,{
       headers:{
           Authorization: `Bearer ${token}`
       }
   })
   .then((res)=>{  
       console.log(res.data,"profile in action of single post")
        dispatch(postSinglePost(res.data))
   })
   .catch((err)=>{
       console.log(err)
   })
}

export{getProfiles,postProfileFailure,postProfileRequest,postProfileSuccess,getFriendList,getSingleUserFriendList,getSingleUserProfile,getSinglePost}

