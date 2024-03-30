import axios from "axios";

import { savedProjectRoute } from "../Api";

exports.addSavedProject = async(email,_id) => {
    console.log("first", email, _id)
    console.log("addSavedProject hai")
    try{
        const response = await axios.post(savedProjectRoute.addSavedProject,{Email:email, projectId:_id});
        console.log("response of recent jobs", response);
        if(response){
            return response;
        }
    }catch(error){
        console.log("error", error.message);
    }
}

exports.getSavedProject = async(email) => {
    console.log("response find ka service me",email )
    console.log("getSavedProject hai")
    try{
        const response = await axios.post(savedProjectRoute.getSavedProject, {Email:email});
        console.log("response of recent jobs", response);
        if(response){
            return response;
        }
    }catch(error){
        console.log("error", error.message);
    }
}

exports.getRecentProject = async() => {
    console.log("getRecentProject hai")
    try{
        const response = await axios.get(savedProjectRoute.getRecentProject);
        console.log("response of recent jobs", response);
        if(response){
            return response;
        }
    }catch(error){
        console.log("error", error.message);
    }
}