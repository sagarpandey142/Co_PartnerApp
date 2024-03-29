import axios from 'axios';

import { projectsRoute } from '../Api'; 

exports.ProjectsHandler = async() => {
    console.log("handler serverice")
       try{
        console.log("hndi ser")
            const response = await axios.get(projectsRoute.project);
            console.log("reshandler", response)
            if(response){
                return response;
            }
       }catch(error){
        console.log("error", error);
       }
}

exports.ProjectsByNameHandler = async(projectName) => {
    try{
         const response = await axios.post(projectsRoute.projectByName, projectName);
         if(response){
             return response;
         }
    }catch(error){
     console.log("error", error);
    }
}

exports.createProjectHandler=async(data)=>{
    try{
         console.log("come",data)
         const data1=data;
        const response = await axios.post(projectsRoute.createProject, data);
        console.log("res", response)
        if(response){
            return response;
        }
    } catch(error){
        console.log("error", error);
    }
}